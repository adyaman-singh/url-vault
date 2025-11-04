import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

interface LinkItemProps {
  link: { id: string; title: string; url: string };
  onDelete: (id: string) => void;
  onEdit: (link: { id: string; title: string; url: string }) => void;
  index: number;
}

const LinkItem: React.FC<LinkItemProps> = ({
  link,
  onDelete,
  onEdit,
  index,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link.url);
  };

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-xl border border-[#e0d6cb] transition-all shadow-sm hover:shadow-md ${
        index % 2 === 0 ? "bg-[#f7f3ee]" : "bg-[#f3eee8]"
      } hover:bg-[#f2ebe4]`}
    >
      <div className="flex flex-col max-w-[70%]">
        <span className="text-[0.9rem] font-semibold text-[#262424] truncate tracking-tight">
          {link.title}
        </span>
        <Tooltip title={link.url} arrow>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#722F37] truncate hover:underline"
          >
            {link.url}
          </a>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2 ml-3">
        <button
          onClick={handleCopy}
          title="Copy URL"
          className="p-1.5 rounded-md hover:bg-[#e8ded3] transition focus:outline-none"
        >
          <ContentCopyIcon sx={{ fontSize: 17, color: "#5b3c38" }} />
        </button>
        <button
          onClick={() => onEdit(link)}
          title="Edit"
          className="p-1.5 rounded-md hover:bg-[#e8ded3] transition focus:outline-none"
        >
          <EditIcon sx={{ fontSize: 17, color: "#6b4b3f" }} />
        </button>
        <button
          onClick={() => onDelete(link.id)}
          title="Delete"
          className="p-1.5 rounded-md hover:bg-[#f4dede] transition focus:outline-none"
        >
          <DeleteIcon sx={{ fontSize: 17, color: "#b3473f" }} />
        </button>
      </div>
    </div>
  );
};

export default LinkItem;
