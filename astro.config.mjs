import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages settings (uncomment when deploying):
  // site: 'https://ciaran-kearney.github.io',
  // base: '/WebsiteProjectDesktop',
  
  // Local development settings:
  site: 'http://localhost:4321',
  base: '/WebsiteProjectDesktop',
  
  // Other Astro configuration options
  outDir: './dist',
  build: {
    assets: 'assets'
  },
  // Enable TypeScript for better developer experience
  typescript: {
    strict: true
  }
});
