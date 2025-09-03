# Skander's Portfolio Website

A personal portfolio website showcasing my projects and skills as an Embedded Systems Engineer, FPGA Developer, and Security Researcher.

## Features
- Responsive design with smooth animations
- Sections for projects, skills, and contact information
- Built with vanilla HTML, CSS, and JavaScript
- Optimized for SEO and accessibility
- Automated deployment to GitHub Pages via GitHub Actions
- Contact form powered by Formspree
- Easter egg with Konami code for interactivity

## Project Structure
```
portfolio-website/
├── assets/
│   ├── css/              # CSS styles
│   │   └── styles.css
│   ├── js/               # JavaScript files
│   │   └── main.js
│   ├── images/           # Image assets
│   │   └── favicon.ico
├── src/                  # Deployable website files
│   ├── index.html
│   ├── sitemap.xml       # SEO sitemap
│   └── robots.txt        # Search engine crawler instructions
├── .github/              # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml    # CI/CD pipeline for deployment
├── docs/                 # Additional documentation
│   └── deployment.md     # Deployment instructions
├── .gitignore            # Git ignore file
├── LICENSE               # MIT License
├── README.md             # Project documentation
└── package.json          # Node.js dependencies and scripts
```

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/karim4353/portfolio-website.git
   ```
2. Install dependencies (optional, for local development):
   ```bash
   npm install
   ```
3. Start a local server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser to view the website locally.

## Deployment
This project is set up for automated deployment to GitHub Pages using GitHub Actions. See `docs/deployment.md` for detailed instructions.

## Formspree Configuration
To enable the contact form:
1. Sign up at [Formspree.io](https://formspree.io/) and create a new form.
2. Replace `your-form-id` in `src/index.html` with your Formspree form ID.

## Favicon
Add a `favicon.ico` file to `assets/images/`. You can generate one using tools like [Favicon.io](https://favicon.io/).

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
Reach out via the contact form on the website or connect with me on:
- [GitHub](https://github.com/karim4353)
- [LinkedIn](https://linkedin.com/in/karim4353)
- [Twitter/X](https://twitter.com/karim_codes)
- [YouTube](https://youtube.com/@karimcodes)
