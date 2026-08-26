# Deployment Guide

This website is configured for deployment on GitHub Pages. Follow these steps to deploy your site:

## GitHub Pages Setup

1. Create a new repository on GitHub
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

3. In your repository settings on GitHub:
   - Go to "Pages"
   - Set "Source" to "GitHub Actions"

## Configuration

The site is already configured for GitHub Pages in `astro.config.mjs`:
```javascript
site: 'https://your-username.github.io',
base: '/your-repo-name',
```

Update these values with your GitHub username and repository name.

## GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

## Manual Deployment

If you prefer to deploy manually:

1. Build the site:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service of choice.

## Troubleshooting

- If images are not loading, check the `base` path in `astro.config.mjs`
- For 404 errors, ensure all asset paths use the `import.meta.env.BASE_URL` prefix
- For build errors, check the console output and GitHub Actions logs
