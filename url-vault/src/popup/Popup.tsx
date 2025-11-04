import React, { useEffect, useState } from "react";
import type { StoredLink } from "../types";
import LinkItem from "../components/LinkItem";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

declare const chrome: any;

const Popup: React.FC = () => {
  const [links, setLinks] = useState<StoredLink[]>([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    chrome.storage.sync.get(["links"], (result: any) => {
      if (result.links) setLinks(result.links);
    });
  }, []);

  const saveLinks = (newLinks: StoredLink[]) => {
    setLinks(newLinks);
    chrome.storage.sync.set({ links: newLinks });
  };

  const addLink = () => {
    if (!title.trim() || !url.trim()) return;

    if (editingId) {
      const updated = links.map((link) =>
        link.id === editingId
          ? { ...link, title: title.trim(), url: url.trim() }
          : link
      );
      saveLinks(updated);
      setEditingId(null);
    } else {
      const newLink = { id: uuidv4(), title: title.trim(), url: url.trim() };
      const updated = [...links, newLink];
      saveLinks(updated);
    }

    setTitle("");
    setUrl("");
    setShowForm(false);
  };

  const deleteLink = (id: string) => {
    const updated = links.filter((l) => l.id !== id);
    saveLinks(updated);
  };

  const startEdit = (link: StoredLink) => {
    setTitle(link.title);
    setUrl(link.url);
    setEditingId(link.id);
    setShowForm(true);
  };

  const cancelForm = () => {
    setTitle("");
    setUrl("");
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="max-w-[340px] max-h-[260px] min-w-[250px] bg-[#EFDFBB] rounded-2xl shadow-lg flex flex-col overflow-hidden border border-[#d5ccc0] text-[#262424]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#d5ccc0] bg-[#f9f8f6]">
        <h1 className="text-base font-semibold mx-auto text-[#5b3c38] tracking-tight">
          URL Vault
        </h1>
        {!showForm && (
          <Button
            onClick={() => setShowForm(true)}
            sx={{
              width: 26,
              height: 26,
              minWidth: 26,
              color: "#5b3c38",
              transition: "background-color 0.2s, transform 0.1s",
              "&:hover": {
                bgcolor: "#e8ded3",
                transform: "scale(1.1)",
              },
            }}
            title="Add URL"
          >
            <AddIcon fontSize="small" />
          </Button>
        )}
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="px-5 py-4 bg-[#EFDFBB] border-b border-[#d5ccc0] rounded-b-lg">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && url && addLink()}
            className="w-full px-3 py-2 text-center mb-3 text-sm border border-[#d5ccc0] rounded-lg shadow-sm focus:ring-2 focus:ring-[#c6b8a4] focus:border-[#722F37] transition-all bg-[#fffdf9]"
            autoFocus
          />
          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && title && addLink()}
            className="w-full px-3 text-center py-2 mb-3 text-sm border border-[#d5ccc0] rounded-lg shadow-sm focus:ring-2 focus:ring-[#c6b8a4] focus:border-[#722F37] transition-all bg-[#fffdf9]"
          />
          <div className="flex gap-2">
            <button
              onClick={addLink}
              disabled={!title.trim() || !url.trim()}
              className="flex-1 py-2 text-sm font-semibold text-[#f9f8f6] rounded-lg bg-[#722F37] hover:bg-[#5a2228] disabled:bg-gray-300 transition-all shadow-sm"
            >
              {editingId ? "Update" : "Save"}
            </button>
            <button
              onClick={cancelForm}
              className="flex-1 py-2 text-sm font-medium text-[#722F37] transition-all border border-[#d5ccc0] rounded-lg hover:bg-[#f0e7dc]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* URL List */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-[#fefcf9]">
        {links.length ? (
          links.map((link, index) => (
            <LinkItem
              key={link.id}
              link={link}
              onDelete={deleteLink}
              onEdit={startEdit}
              index={index}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-[#8a7f72]">
            <div className="mb-2 text-3xl">🔗</div>
            <p className="text-sm font-medium">No URLs saved yet</p>
            <p className="mt-1 text-xs text-[#b1a79c]">
              Click + to add your first link
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
