# MSI AI Hub Landing Page

A modern, TypeScript-based landing page for the AI-Powered International System Integration Hub featuring smooth animations, responsive design, and a tech-forward aesthetic.

## Features

- 🎨 **Modern Design**: Dark theme with teal/cyan gradient accents
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🎭 **Smooth Animations**: Engaging scroll animations and hover effects
- 🔧 **TypeScript**: Full type safety throughout the codebase
- 🎯 **Tailwind CSS**: Utility-first styling for rapid development

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

## Sections

1. **Hero Section** - Eye-catching headline with AI-themed visuals
2. **Features** - Three key capabilities (Intelligent Planning, Predictive Analytics, Smart Collaboration)
3. **Tools** - GENAI @MSI tool integrations
4. **Training** - NEW TO AI ESSENTIALS course information
5. **CTA** - Call-to-action for getting started
6. **Footer** - Site navigation and company links

## Customization

### Colors

The color scheme uses Tailwind's teal and cyan colors. To customize:

- Edit `tailwind.config.js` to extend the theme
- Modify gradient colors in component classes

### Content

- Update text content in `src/App.tsx`
- Modify features, tools, and other data arrays
- Adjust animation timings in the component styles

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## License

All rights reserved.
