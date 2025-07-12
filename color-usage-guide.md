# Custom Color Palette Usage Guide

Your custom color palette has been integrated into Tailwind CSS! Here's how to use each color:

## Available Colors

### 🌸 Orchid (#d85dde)
- **Base**: `bg-orchid`, `text-orchid`, `border-orchid`
- **Shades**: `bg-orchid-100` through `bg-orchid-900`
- **Usage**: Perfect for primary accents, buttons, and highlights

### 🟣 Dark Purple (#361134)
- **Base**: `bg-dark-purple`, `text-dark-purple`, `border-dark-purple`
- **Shades**: `bg-dark-purple-100` through `bg-dark-purple-900`
- **Usage**: Great for headers, dark backgrounds, and sophisticated accents

### 🔘 Silver (#cecccc)
- **Base**: `bg-silver`, `text-silver`, `border-silver`
- **Shades**: `bg-silver-100` through `bg-silver-900`
- **Usage**: Excellent for neutral backgrounds, borders, and subtle text

### 🌺 Lavender Blush (#fdecef)
- **Base**: `bg-lavender-blush`, `text-lavender-blush`, `border-lavender-blush`
- **Shades**: `bg-lavender-blush-100` through `bg-lavender-blush-900`
- **Usage**: Perfect for soft backgrounds, cards, and gentle accents

### 🔷 Lapis Lazuli (#33658a)
- **Base**: `bg-lapis-lazuli`, `text-lapis-lazuli`, `border-lapis-lazuli`
- **Shades**: `bg-lapis-lazuli-100` through `bg-lapis-lazuli-900`
- **Usage**: Ideal for professional elements, links, and trustworthy accents

## Example Usage

```jsx
// Hero section with your custom colors
<div className="bg-lavender-blush-800 text-dark-purple">
  <h1 className="text-orchid-600 font-bold">Welcome to My Portfolio</h1>
  <p className="text-lapis-lazuli-700">Building amazing experiences with code</p>
  <button className="bg-orchid hover:bg-orchid-600 text-white px-6 py-3 rounded-lg">
    Get Started
  </button>
</div>

// Card with gradient
<div className="bg-gradient-to-r from-orchid-200 to-lapis-lazuli-300 p-6 rounded-xl">
  <h2 className="text-dark-purple-800 font-semibold">Featured Project</h2>
  <p className="text-silver-600">Description of your amazing project</p>
</div>
```

## Color Combinations That Work Well

1. **Elegant**: `bg-dark-purple` + `text-lavender-blush`
2. **Vibrant**: `bg-orchid` + `text-white`
3. **Professional**: `bg-lapis-lazuli` + `text-silver-100`
4. **Soft**: `bg-lavender-blush` + `text-dark-purple-700`
5. **Neutral**: `bg-silver-800` + `text-dark-purple`

Your colors are now ready to use throughout your website! 🎨
