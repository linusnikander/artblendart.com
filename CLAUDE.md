# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository is for creating mockups of Shopify pages for the ArtBlendArt store (artblendart.com). The mockups are built using Next.js and Tailwind CSS, allowing for rapid prototyping of page designs that can then be implemented in Shopify.

## Development Commands

- **Start development server**: `npm run dev` (runs on http://localhost:3000)
- **Build for production**: `npm run build`
- **Run production build**: `npm start`
- **Lint code**: `npm run lint`

## Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **React**: 18.3.1

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `page.tsx` - Homepage mockup
  - `layout.tsx` - Root layout with metadata
  - `globals.css` - Global styles and Tailwind imports
- `components/` - Reusable React components for page sections
- `public/` - Static assets (images, fonts, etc.)

## Workflow

### Creating New Page Mockups
1. Create new routes in `app/` directory (e.g., `app/products/page.tsx`)
2. Build components in `components/` for reusable sections
3. Use Tailwind CSS for styling to match Shopify's responsive capabilities
4. Preview locally with `npm run dev`

### Converting Designs to Shopify
- Mockups are HTML/CSS prototypes that demonstrate layout and styling
- Copy HTML structure and adapt to Shopify's Liquid template syntax
- Extract CSS classes for use in Shopify theme customization
- Images and assets should be uploaded to Shopify separately

## Key Considerations

- Design with Shopify's constraints in mind (e.g., section-based layouts)
- Keep components modular to match Shopify's section system
- Use semantic HTML for better Shopify integration
- Ensure responsive design works across mobile, tablet, and desktop
