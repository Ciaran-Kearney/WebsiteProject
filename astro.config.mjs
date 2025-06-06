import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages settings (uncomment when deploying):
  // site: 'https://ciaran-kearney.github.io',
  // base: '/WebsiteProjectDesktop',
  
  // Local development settings:
  site: 'https://ciaran-kearney.github.io',
  base: '/WebsiteProject',
  
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
