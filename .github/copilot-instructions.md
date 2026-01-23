# Copilot Instructions for Sellavi WordPress Customizations

## Project Overview
This is a WordPress theme customization project for the Sellavi website, focusing on Bulgarian localization and responsive UI fixes. The codebase consists of three main files: `banner.js`, `fixes.js`, and `style.css`.

## Key Components
- **banner.js**: Fixes Owl Carousel image responsiveness using MutationObserver for dynamic content updates
- **fixes.js**: Provides Bulgarian translations for blog elements (headers, metadata, read more links)
- **style.css**: Defines responsive tutorial demo layouts with flexbox and mobile-first design

## Architecture Patterns
- **Responsive Design**: Use flexbox with `aspect-ratio` for video containers, media queries at 900px breakpoint
- **Dynamic Content Handling**: Employ MutationObserver for carousel re-renders and lazy-loaded images
- **Localization**: Hardcode Bulgarian translations in JavaScript DOM manipulation
- **CSS Structure**: Follow BEM-like naming with `.tutorialdemo` as main component class

## Development Conventions
- **Language**: Bulgarian comments and user-facing text translations
- **Styling**: Max-width 1200px containers, 60px margins, subtle shadows and borders
- **JavaScript**: IIFE pattern for banner fixes, DOMContentLoaded event for translations
- **Responsive Breakpoints**: Mobile-first approach with column stacking below 900px

## Integration Points
- **WordPress**: Assumes standard WP classes like `.page-header`, `.widget-title`, `.blog-meta`
- **Owl Carousel**: Targets `.owl-wrapper-outer img` and `.owl-item img` selectors
- **Video Embeds**: Supports iframe embeds with 16:9 aspect ratio

## Common Patterns
- Image fixes: `img.style.width = '100%'; img.style.height = 'auto'; img.style.objectFit = 'contain';`
- Translation replacement: `el.textContent.replace("English", "Български")`
- Responsive flex: `flex: 1 1 60%` for video, `flex: 1 1 40%` for text on desktop

## File References
- [banner.js](banner.js): Owl Carousel image fixes
- [fixes.js](fixes.js): Bulgarian blog translations
- [style.css](style.css): Tutorial demo responsive styles