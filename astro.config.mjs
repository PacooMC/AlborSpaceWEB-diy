import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  },
  trailingSlash: 'never',
  server: {
    port: 4321,
    host: true
  },
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/react']
    }
  }
});