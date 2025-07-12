# Custom Color Palette Usage Guide

Your custom color palette has been integrated into Tailwind CSS! Here's how to use each color:

## Available Colors

### 🖤 Charcoal (#424b54)
- **Base**: `bg-charcoal`, `text-charcoal`, `border-charcoal`
- **Shades**: `bg-charcoal-100` through `bg-charcoal-900`
- **Usage**: Perfect for dark text, headers, and sophisticated backgrounds

### 🌹 Rosy Brown (#b38d97)
- **Base**: `bg-rosy-brown`, `text-rosy-brown`, `border-rosy-brown`
- **Shades**: `bg-rosy-brown-100` through `bg-rosy-brown-900`
- **Usage**: Great for warm accents, buttons, and elegant highlights

### 🌸 Tea Rose (#d5aca9)
- **Base**: `bg-tea-rose`, `text-tea-rose`, `border-tea-rose`
- **Shades**: `bg-tea-rose-100` through `bg-tea-rose-900`
- **Usage**: Excellent for soft accents, cards, and gentle backgrounds

### 🏜️ Desert Sand (#ebcfb2)
- **Base**: `bg-desert-sand`, `text-desert-sand`, `border-desert-sand`
- **Shades**: `bg-desert-sand-100` through `bg-desert-sand-900`
- **Usage**: Perfect for warm backgrounds, light sections, and neutral tones

### 🥈 Silver (#c5baaf)
- **Base**: `bg-silver`, `text-silver`, `border-silver`
- **Shades**: `bg-silver-100` through `bg-silver-900`
- **Usage**: Ideal for neutral backgrounds, borders, and subtle text

## Example Usage

```jsx
// Hero section with your custom colors
<div className="bg-desert-sand-800 text-charcoal">
  <h1 className="text-rosy-brown-600 font-bold">Welcome to My Portfolio</h1>
  <p className="text-charcoal-700">Building amazing experiences with code</p>
  <button className="bg-rosy-brown hover:bg-rosy-brown-600 text-white px-6 py-3 rounded-lg">
    Get Started
  </button>
</div>

// Card with gradient
<div className="bg-gradient-to-r from-tea-rose-200 to-desert-sand-300 p-6 rounded-xl">
  <h2 className="text-charcoal-800 font-semibold">Featured Project</h2>
  <p className="text-silver-600">Description of your amazing project</p>
</div>
```

## Color Combinations That Work Well

1. **Elegant**: `bg-charcoal` + `text-desert-sand`
2. **Warm**: `bg-rosy-brown` + `text-white`
3. **Soft**: `bg-tea-rose` + `text-charcoal-700`
4. **Neutral**: `bg-desert-sand` + `text-charcoal`
5. **Sophisticated**: `bg-silver-800` + `text-charcoal`

Your colors are now ready to use throughout your website! 🎨
