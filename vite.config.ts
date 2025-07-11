import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  server: { host: '::', port: 8080 },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Beyond Career',
        short_name: 'BeyondCareer',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          { src: '/pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    }),
    mode === 'development' && visualizer({ open: true })
  ].filter(Boolean),
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          radix: ['@radix-ui/react-alert-dialog', '@radix-ui/react-popover' /* etc */],
          charts: ['recharts'],
        }
      }
    }
  }
}));
