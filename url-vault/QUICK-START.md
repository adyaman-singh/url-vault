# 🎨 URL Vault - Quick Start Guide

## How to Load the Extension

### Step 1: Build the Extension

```bash
npm install
npm run build
```

### Step 2: Load in Chrome

1. Open Chrome browser
2. Go to `chrome://extensions/`
3. Toggle **"Developer mode"** ON (top-right corner)
4. Click **"Load unpacked"** button
5. Select the **`dist`** folder from this project
6. Done! You should see the URL Vault icon in your extensions bar

## 🎯 Features Overview

### Main View

```
┌─────────────────────────────────┐
│  URL Vault              [+]     │  ← Header with Add button
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────┐  │  ← URL Box 1
│  │ LinkedIn          ✏️ 🗑️  │  │    (Edit & Delete on hover)
│  │ linkedin.com/in/user     │  │
│  └─────────────────────────┘  │
│                                 │
│  ┌─────────────────────────┐  │  ← URL Box 2
│  │ GitHub            ✏️ 🗑️  │  │
│  │ github.com/username      │  │
│  └─────────────────────────┘  │
│                                 │
│  ┌─────────────────────────┐  │  ← URL Box 3
│  │ Portfolio         ✏️ 🗑️  │  │
│  │ mysite.com               │  │
│  └─────────────────────────┘  │
│                    ▼           │  ← Scroll for more
└─────────────────────────────────┘
```

### Add/Edit Form

```
┌─────────────────────────────────┐
│  URL Vault                      │
├─────────────────────────────────┤
│  Add New URL                    │  ← Form title
│                                 │
│  ┌─────────────────────────┐  │
│  │ Enter Name (e.g., GitHub)│  │  ← Key input
│  └─────────────────────────┘  │
│                                 │
│  ┌─────────────────────────┐  │
│  │ Enter URL (https://...)  │  │  ← URL input
│  └─────────────────────────┘  │
│                                 │
│  ┌─────────────────────────┐  │
│  │       Save             │  │  ← Blue save button
│  └─────────────────────────┘  │
│  ┌─────────────────────────┐  │
│  │       Cancel            │  │  ← Gray cancel button
│  └─────────────────────────┘  │
│                                 │
└─────────────────────────────────┘
```

### Delete Confirmation

```
┌─────────────────────────────┐
│ Delete "LinkedIn"?          │  ← Confirmation overlay
│                             │
│  [Delete]    [Cancel]       │  ← Red delete, gray cancel
└─────────────────────────────┘
```

## 🎨 Color Reference

| Element        | Color      | Hex Code |
| -------------- | ---------- | -------- |
| Background     | White      | #FFFFFF  |
| Box Background | Light Gray | #F9FAFB  |
| Borders        | Gray       | #E5E7EB  |
| Text           | Dark Gray  | #374151  |
| Add Button     | Green      | #22C55E  |
| Save Button    | Blue       | #3B82F6  |
| Delete Button  | Red        | #EF4444  |

## 💡 Tips

1. **Press Enter** - Save form quickly by pressing Enter in any input field
2. **Hover Actions** - Edit and delete buttons only show when hovering over a URL box
3. **Click URL** - Click any URL text to open it in a new tab
4. **Scroll** - If you have more than 3 URLs, scroll down to see more
5. **Sync** - URLs automatically sync across all your Chrome browsers

## 🐛 Troubleshooting

### Extension not showing?

- Check if Developer Mode is enabled
- Make sure you selected the `dist` folder, not the root folder
- Try refreshing the extension in chrome://extensions/

### Changes not appearing?

- Click the refresh icon on the extension card in chrome://extensions/
- Close and reopen the popup

### Storage not persisting?

- Check if Chrome sync is enabled in your browser
- Make sure the extension has storage permissions

## 📱 Keyboard Shortcuts

| Key   | Action                          |
| ----- | ------------------------------- |
| Enter | Save form (when in input)       |
| Esc   | Close form (future enhancement) |

## 🔄 Development Mode

To develop with hot-reload:

```bash
npm run dev
```

Then refresh the extension in chrome://extensions/ after each change.

---

Enjoy organizing your URLs! 🚀
