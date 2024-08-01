import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'portfolio',
          metaDescription: 'portfolio',
        },
      },
    }),
    [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['icon.png'],
        manifest: {
          name: 'portfolio',
          short_name: 'portfolio',
          icons: [
            {
              src: 'icon.png',
              sizes: '64x64 32x32 24x24 16x16 192x192 512x512',
              type: 'image/png',
            },
          ],
        },
      }),
    ],
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      external: ['react', 'embla-carousel-react', '@radix-ui/react-label'],
    },
  },
});
