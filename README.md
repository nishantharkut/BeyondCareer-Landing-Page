
# Beyond Career - Landing Page

A portfolio-grade landing page for Beyond Career, an IIT Kharagpur-founded startup offering career guidance, internships, mentorship & community for students.

## Setup & Run Instructions

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Light/Dark Mode Color Customization

### CSS Variables (Primary Method)
Edit `src/index.css` lines 9-45 for color customization:

**Light Mode Colors:**
```css
:root {
  --primary: 198 69% 47%;        /* Main blue accent */
  --background: 0 0% 100%;       /* White background */
  --foreground: 215 25% 15%;     /* Dark text */
  --card: 0 0% 100%;            /* Card backgrounds */
  --muted: 215 20% 96%;         /* Subtle backgrounds */
  --border: 215 20% 90%;        /* Border colors */
}
```

**Dark Mode Colors:**
```css
.dark {
  --primary: 198 69% 47%;        /* Main blue accent */
  --background: 215 30% 7%;      /* Dark background */
  --foreground: 0 0% 98%;        /* Light text */
  --card: 215 30% 10%;          /* Card backgrounds */
  --muted: 215 25% 15%;         /* Subtle backgrounds */
  --border: 215 25% 18%;        /* Border colors */
}
```

### Tailwind Custom Colors
Edit `tailwind.config.ts` lines 31-42 for component-specific colors:

```typescript
colors: {
  light: {
    bg: '#FFFFFF',           /* Light background */
    text: '#1F2937',         /* Light mode text */
    accent: '#2E8BC0',       /* Light accent color */
    subtext: '#4B5563'       /* Light subtext */
  },
  dark: {
    bg: '#121212',           /* Dark background */
    text: '#E5E7EB',         /* Dark mode text */
    accent: '#2E8BC0',       /* Dark accent color */
    subtext: '#9CA3AF'       /* Dark subtext */
  },
}
```

### Quick Color Changes
1. **Primary Accent**: Change `--primary` values in both light/dark modes
2. **Backgrounds**: Modify `--background` and `--card` values
3. **Text Colors**: Update `--foreground` and `--muted-foreground`
4. **Component Colors**: Edit `light.*` and `dark.*` values in Tailwind config

## Technical Documentation

Modern React application with TypeScript, Tailwind CSS, next-themes dark mode, advanced animations, SEO optimization, PWA features, and responsive design for optimal performance.

## Color Palette & Design Decisions

Ultra-modern professional design with precise WCAG AA contrast ratios. Custom color tokens ensure 4.5:1 minimum contrast in both modes. Advanced animations, glassmorphism effects, and micro-interactions create premium UX. Three-layer parallax, typed text effects, and interactive timelines establish visual sophistication while maintaining accessibility standards.

## Deployment Guide

One-click deployment to Vercel using `vercel.json` configuration. Simply connect your GitHub repository to Vercel for automatic deployments.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Light/Dark Mode**: System preference detection with manual toggle
- **Advanced Animations**: Smooth scroll animations and micro-interactions
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, sitemap.xml
- **PWA Ready**: Service worker for offline support
- **Accessibility**: WCAG 2.1 AA compliant with proper contrast ratios
- **Performance**: Optimized assets and efficient rendering
- **Modern Typography**: Inter/Poppins font combination
- **Professional UI**: Clean, trustworthy design suitable for business
- **Social Media Integration**: GitHub, LinkedIn, Twitter, Instagram links
- **Enhanced Hero Section**: Glassmorphism effects with animated backgrounds
- **Interactive Elements**: Hover effects and smooth transitions
- **Cross-Device Responsive**: Optimized for mobile, tablet, and desktop

## Live URL

Will be available after deployment: [https://beyond-career.vercel.app](https://beyond-career.vercel.app)

## Built With

- React + TypeScript
- Tailwind CSS
- Vite
- next-themes
- Lucide React Icons
- shadcn/ui Components

## Dependencies Added

- `next-themes`: Theme management and dark mode functionality
