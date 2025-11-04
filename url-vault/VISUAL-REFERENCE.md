# 🎨 URL Vault - Visual Quick Reference

## Color Palette Reference

### Background Colors

```
Cream Background: #FFFFF5 (Main app background)
White:            #FFFFFF (Form background)
```

### Pastel Box Colors (Rotating)

```
1. Light Blue:    #E0F7FA 🔵
2. Light Yellow:  #FFFDE7 🟡
3. Light Pink:    #FCE4EC 🔴
4. Light Green:   #F1F8E9 🟢
5. Light Orange:  #FFF3E0 🟠
```

### Action Colors

```
Primary (Mint):        #B2DFDB
Primary Hover:         #80CBC4
Border (Dark Teal):    #004D40
Text Primary:          #333333
Text Secondary:        #666666
Delete:                #EF4444
```

## Layout Dimensions

```
┌────────────────────────────────┐
│  Extension: 300px × 400px      │
└────────────────────────────────┘

┌────────────────────────────────┐
│  Header: 300px × ~40px         │
├────────────────────────────────┤
│  Form (if shown): 300px × ~110px│
├────────────────────────────────┤
│  URL List: Scrollable area     │
│  Each box: ~280px × 55-60px    │
└────────────────────────────────┘
```

## Component Spacing

```
URL Box Spacing:
├─ Padding: 12px (3 in Tailwind)
├─ Margin between: 8px (2 in Tailwind)
├─ Border radius: 8px
└─ Shadow: 0 1px 3px rgba(0,0,0,0.1)

Container Spacing:
├─ Header: px-4 py-3
├─ Form: px-4 py-3
└─ List: px-4 py-3, space-y-2
```

## Typography

```
Title (Header):
├─ Font size: 16px (text-base)
├─ Weight: Bold
└─ Color: #333333

URL Box Title:
├─ Font size: 14px (text-sm)
├─ Weight: Bold
└─ Color: #333333

URL Box Domain:
├─ Font size: 12px (text-xs)
├─ Weight: Regular
└─ Color: #666666

Form Inputs:
├─ Font size: 14px (text-sm)
├─ Padding: 6px 12px (py-1.5 px-3)
└─ Border: 1px solid gray
```

## Button Styles

### Add Button (Top Right)

```css
Size: 32×32px (w-8 h-8)
Shape: Circle (rounded-full)
Background: #B2DFDB
Border: 2px solid #004D40
Text: #004D40
Icon: "+"
```

### Save Button

```css
Width: Flex-1 (50%)
Height: ~36px (py-1.5)
Background: #B2DFDB
Border: 2px solid #004D40
Text: #004D40, Bold
Hover: #80CBC4
```

### Cancel Button

```css
Width: Flex-1 (50%)
Height: ~36px (py-1.5)
Background: White
Border: 2px solid gray
Text: #4B5563
Hover: Light gray bg
```

## Icon Specifications

### Edit Icon (Pencil)

```
Size: 14px (w-3.5 h-3.5)
Stroke width: 2
Default: Gray (#6B7280)
Hover: Dark Teal (#004D40)
```

### Delete Icon (Trash)

```
Size: 14px (w-3.5 h-3.5)
Stroke width: 2
Default: Gray (#6B7280)
Hover: Red (#EF4444)
```

## States & Interactions

### URL Box States

```
Default:
├─ Pastel background (rotating color)
├─ Shadow: 0 1px 3px rgba(0,0,0,0.1)
└─ Icons hidden (opacity: 0)

Hover:
├─ Same background
├─ Icons visible (opacity: 100)
└─ Cursor: pointer

Click:
├─ Opens URL in new tab
└─ Prevents form trigger
```

### Form States

```
Hidden: display: none
Visible: Inline at top
└─ Smooth transition
```

### Input Focus

```
Border: #B2DFDB
Ring: 1px #B2DFDB
Outline: None
```

## Scrollbar Styling

```css
Width: 6px
Track: Transparent
Thumb: #B2DFDB
Thumb (hover): #80CBC4
Radius: 3px
```

## Animation Durations

```
Icon opacity: 200ms (transition-opacity)
Button hover: 200ms (transition-colors)
All transitions: 200ms (transition-all)
```

## Example URL Box Layout

```
┌─────────────────────────────────────────┐
│ [Pastel Background - Rotating Color]    │
│                                          │
│  LinkedIn                    ✏️  🗑️     │ ← Icons on hover
│  linkedin.com                            │
│                                          │
└─────────────────────────────────────────┘
```

## Domain Extraction Logic

```javascript
// Shows: github.com
// Full URL on hover tooltip
function getDomain(url) {
  return new URL(url).hostname.replace("www.", "");
}
```

## Class Reference

### Container Classes

```
Main: w-[300px] h-[400px] bg-[#FFFFF5] flex flex-col
Header: flex items-center justify-between px-4 py-3
List: flex-1 overflow-y-auto px-4 py-3 space-y-2
```

### URL Box Classes

```
Box: relative rounded-lg p-3 transition-all cursor-pointer group h-[55px]
Title: text-sm font-bold text-[#333333] mb-0.5 truncate
Domain: text-xs text-[#666666] truncate
Actions: absolute top-2 right-2 flex gap-0.5
```

### Form Classes

```
Container: px-4 py-3 bg-white border-b border-gray-200
Input: w-full px-3 py-1.5 mb-2 text-sm border rounded
Button: flex-1 py-1.5 rounded border-2 transition-colors
```

## Responsive Behavior

- Fixed width: **300px**
- Fixed height: **400px**
- Scrollable content: **Vertical only**
- Min boxes visible: **5-6 without scroll**
- Max boxes: **Unlimited** (scrollable)

---

**Pro Tip**: The pastel colors rotate using modulo operator:  
`pastelColors[index % pastelColors.length]`

**Usage**: Load in Chrome at `chrome://extensions/` → Developer mode → Load unpacked → `dist` folder
