# Deployment Instructions

This project is configured for automated deployment to GitHub Pages using GitHub Actions.

## Prerequisites
- A GitHub repository for the project.
- GitHub Pages enabled in the repository settings.
- A `favicon.ico` file in `assets/images/`.
- A valid Formspree form ID in `src/index.html`.

## Automated Deployment
1. Push changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
2. The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically deploys the contents of the `src/` directory to the `gh-pages` branch.
3. Verify deployment in the GitHub repository's "Actions" tab.
4. Access the live site at `https://karim4353.github.io/portfolio-website/`.

## Manual Deployment (Optional)
1. Install the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add a deployment script to `package.json`:
   ```json
   "deploy": "gh-pages -d src"
   ```
3. Deploy manually:
   ```bash
   npm run deploy
   ```

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start a local server:
   ```bash
   npm start
   ```
3. Open `http://localhost:3000` in your browser.

## Notes
- Ensure all asset paths in `src/index.html` are relative (e.g., `../assets/css/styles.css`).
- Test accessibility using Lighthouse (Chrome DevTools).
- Optimize images (if added) using tools like [Squoosh](https://squoosh.app/).
- Update the Formspree form ID in `src/index.html` to enable the contact form.
