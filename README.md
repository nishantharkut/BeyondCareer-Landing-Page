
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
## Documentation Package

### Essential Documents
- **[Environment Setup](./ENVIRONMENT_SETUP.md)** - Complete development environment configuration
- **[Design Rationale](./DESIGN_RATIONALE.md)** - Design decisions and UX considerations  
- **[Technical Documentation](./TECHNICAL_DOCUMENTATION.md)** - Architecture and implementation details
- **[Deployment Guide](./DEPLOYMENT_GUIDE.md)** - Production deployment instructions

---

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

---
## 🏗️ Project Structure

```bash
├── public/
├── src/
│   ├── components/            # Ui, About, Contact, Hero, Footer, etc.
│   ├── hooks/                 # use-mobile, use-toast, useScrollAnimation
│   ├── lib/                   # utils.ts
│   ├── pages/                 # Index.tsx, NotFound.tsx
│   ├── App.tsx, App.css, main.tsx, index.css
│   └── vite-env.d.ts
├── .gitignore, index.html, README.md
├── package.json, bun.lockb, tsconfig.*.json
├── tailwind.config.ts, vite.config.ts, postcss.config.js
└── vercel.json, eslint.config.js
```

## Design & Customization

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



## Live URL

[https://beyond-career-landing-page-eight.vercel.app/](https://beyond-career-landing-page-eight.vercel.app/)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel

## 🎯 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: All metrics in green
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Sub-second initial paint

## Dependencies Added

- `next-themes`: Theme management and dark mode functionality
