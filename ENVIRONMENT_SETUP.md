# Environment Setup Documentation

## Prerequisites

Before setting up the Beyond Career landing page project, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn** (version 1.22 or higher)
- **Git** for version control

## Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/beyond-career.git
cd beyond-career
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Variables
Create a `.env` file in the root directory (if needed for future API integrations):
```bash
# Example environment variables
VITE_APP_TITLE=Beyond Career
VITE_API_URL=your-api-url-here
```

### 4. Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:8080`

### 5. Build for Production
```bash
npm run build
# or
yarn build
```

### 6. Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## IDE Setup Recommendations

### VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Hero
- Auto Rename Tag
- Bracket Pair Colorizer

### Settings
Configure your editor with:
- Tab size: 2 spaces
- Auto-save enabled
- Format on save enabled
- ESLint integration

## Troubleshooting

### Common Issues

1. **Port 8080 already in use**
   - Kill the process: `lsof -ti:8080 | xargs kill -9`
   - Or change port in `vite.config.ts`

2. **Module not found errors**
   - Clear node_modules: `rm -rf node_modules package-lock.json`
   - Reinstall: `npm install`

3. **TypeScript errors**
   - Check tsconfig.json configuration
   - Ensure all types are properly imported

4. **Build failures**
   - Check for unused imports
   - Verify all file paths are correct
   - Ensure all dependencies are installed

## Development Workflow

1. Create feature branches from main
2. Make changes in small, focused commits
3. Test thoroughly across devices
4. Submit pull requests for review
5. Deploy after approval

## Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run build test
npm run build
```
