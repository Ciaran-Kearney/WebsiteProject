import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages settings
  //site: 'https://ciaran-kearney.github.io',
  //base: '/WebsiteProject',

  // Local development settings
  site: 'http://localhost:4321',
  base: '/',

  // Live development settings
  site: 'https://ciarangotskill.com',
  base: '/',
  
  // Other Astro configuration options
  outDir: './dist',
  build: {
    assets: 'assets'
  },
  // Enable TypeScript for better developer experience
  typescript: {
    strict: true
  },

  // Use static output
  output: 'static'
});
