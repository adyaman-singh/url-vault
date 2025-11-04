# 🔗 URL Vault

A beautiful, minimal Chrome extension to store and manage your favorite URLs in key-value pairs.

## ✨ Features

- **Minimal Design**: Clean, light-colored interface optimized for Chrome extension popup size (340x500px)
- **Add URLs**: Store URLs with custom names (e.g., "LinkedIn: https://linkedin.com/in/username")
- **Edit & Delete**: Easily modify or remove saved URLs
- **Smart Layout**: Shows 3 URL boxes at a time with smooth scrolling
- **Quick Access**: Click any URL to open it in a new tab
- **Confirmation Dialog**: Prevents accidental deletions

## 🎨 Design

- Light, minimalist aesthetic with soft colors
- Primary accent: Blue (#007AFF) for save/edit actions
- Success accent: Green (#34C759) for add button
- Each URL displayed in a clean box with hover effects
- Edit and delete icons appear on hover

## 🚀 Getting Started

### Installation

1. Clone this repository:

   ```bash
   git clone <repo-url>
   cd url-vault
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the extension:

   ```bash
   npm run build
   ```

4. Load in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `dist` folder from this project

### Development

Run the development server with hot reload:

```bash
npm run dev
```

Then load the extension from the `dist` folder as described above. You'll need to reload the extension in Chrome after making changes.

## 📝 Usage

1. **Add a URL**: Click the green "+" button in the top right
2. **Enter details**: Type a name (e.g., "GitHub") and the full URL
3. **Save**: Click the blue "Save" button or press Enter
4. **Edit**: Hover over a URL box and click the pencil icon
5. **Delete**: Hover over a URL box, click the trash icon, then confirm
6. **Open URL**: Click on any URL to open it in a new tab

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool
- **Chrome Extensions API** - Storage and tabs

## 📦 Project Structure

```
url-vault/
├── src/
│   ├── components/
│   │   └── LinkItem.tsx      # Individual URL box component
│   ├── popup/
│   │   ├── popup.html         # Extension popup HTML
│   │   ├── popup-main.tsx     # React entry point
│   │   └── Popup.tsx          # Main popup component
│   ├── types.d.ts             # TypeScript definitions
│   └── index.css              # Global styles with Tailwind
├── public/
│   └── manifest.json          # Chrome extension manifest
└── package.json
```

## 🎯 Design Specifications

- **Extension Size**: 340px wide × 500px high
- **Visible Boxes**: 3 URL boxes visible without scrolling (~100px each)
- **Color Palette**:
  - Background: White (#FFFFFF) / Light gray (#F9FAFB)
  - Borders: Light gray (#E5E7EB)
  - Primary: Blue (#3B82F6)
  - Success: Green (#22C55E)
  - Danger: Red (#EF4444)
- **Typography**: Inter font family with system fallbacks

## 🎨 Component Architecture

### Popup Component

The main container that manages:

- State for URL list
- Add/Edit form visibility
- Chrome storage sync

### LinkItem Component

Individual URL box featuring:

- Title and URL display
- Edit/Delete action buttons (visible on hover)
- Delete confirmation overlay
- Click-to-open functionality

## 🔄 Data Flow

1. URLs stored in Chrome's sync storage
2. Loaded on popup open
3. Changes synced immediately across devices
4. Uses UUID for unique identifiers

## 📄 License

MIT

---

Made with ❤️ for productivity
