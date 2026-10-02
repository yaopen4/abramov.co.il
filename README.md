# Abramov Gefen Ltd - Landing Page

A modern, static landing page for Abramov Gefen Ltd, showcasing the company and it's  services.

## Project Overview

This is a single-page landing page built with modern web technologies, optimized for performance, SEO, and accessibility. The site showcases Abramov Gefen Ltd's services in connecting global brands with Israel's construction market.

## Features

- **Modern Build Setup**: Vite-based build system for fast development and optimized production builds
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Card support
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Performance**: Minified production builds, optimized assets, and lazy loading
- **Form Handling**: Contact form ready for Netlify Forms or custom backend integration

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **JavaScript (ES6+)**: Vanilla JavaScript (no frameworks)
- **Vite**: Build tool and development server
- **Netlify/Vercel**: Deployment-ready configuration

## Project Structure

```
abramov-co-il/
├── src/                    # Source files
│   ├── index.html         # Main HTML file
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── main.js        # Main JavaScript
│   └── images/            # Image assets
├── dist/                  # Build output (generated)
├── package.json           # npm configuration
├── vite.config.js         # Vite configuration
├── netlify.toml          # Netlify deployment config
├── vercel.json           # Vercel deployment config
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Key Features

- High performance: 90+ Lighthouse scores backed by responsive images, lazy loading, and minified production assets.
- SEO ready: semantic HTML5, complete meta tags, Open Graph/Twitter cards, structured data, and consistent heading hierarchy.
- Accessible by default: ships with the NagishLi v2.3 widget (`public/nagishli`); configure `window.nl_*` globals before importing `/nagishli/nagishli.js` to localize (English defaults in `src/index.html`, Hebrew in `src/he/index.html`).
- Flexible theming: primary palette lives in `src/css/styles.css` (`--blue-deep`, `--gray_black`, `--blue-smoke`, `--bg-blue`, `--white`) for quick brand adjustments.

