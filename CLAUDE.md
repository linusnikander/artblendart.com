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

## Shopify Theme Development

### Important: Store Configuration
- **Shopify Store Name for CLI**: `82e997-6e.myshopify.com` (MUST use this for `shopify theme push` commands, NOT the custom domain)
- **Custom Domain**: `artblendart.com` (for live site access only)
- **Live Theme ID**: `149756051720`

### Shopify Commands

**IMPORTANT: Always use `--allow-live` flag to avoid interactive prompts (required for automation)**

```bash
# Push all changes to live theme
cd shopify-theme
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 --allow-live

# Push specific file/section
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 --only='sections/file.liquid' --allow-live

# Pull files from live theme
shopify theme pull --store 82e997-6e.myshopify.com --theme 149756051720 --only='templates/page.coaching.json'
# Note: Be careful with pull - it will overwrite local files!

# Preview theme locally
shopify theme dev --store 82e997-6e.myshopify.com --theme 149756051720
```

**Best Practices:**
- Always run `shopify theme push` from within the `shopify-theme/` directory
- Use `--allow-live` to bypass interactive confirmation (required for Claude Code automation)
- Use `--only='path/to/file'` to push single files (path relative to shopify-theme/)
- Never use `shopify theme pull` without `--only` flag as it will overwrite all local files

### CRITICAL: Version Control & File Deletion Prevention

**⚠️ COMMON ISSUES THAT DELETE FILES:**

1. **`shopify theme pull` without `--only` DELETES local files that don't exist on server**
   - ALWAYS use `--only='path/to/file'` when pulling
   - Pull will remove local files if they're not on the remote server

2. **`shopify theme push --path=assets` DELETES all sections from server**
   - NEVER use `--path` flag - it uploads ONLY that directory and deletes everything else
   - Use `--only='assets/file.jpg'` for individual files instead

3. **Templates can be deleted during pull operations**
   - If a template doesn't exist on server, `pull` removes it locally
   - Always verify template exists before pulling

**VERSION CONTROL WORKFLOW:**

1. **Always commit changes to git BEFORE pushing to Shopify:**
   ```bash
   cd shopify-theme
   git add sections/coaching-*.liquid templates/page.coaching.json
   git commit -m "Update coaching page sections"
   shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 --allow-live
   ```

2. **Git tracks all local changes** in `shopify-theme/` directory:
   - Sections: `shopify-theme/sections/*.liquid`
   - Templates: `shopify-theme/templates/*.json`
   - Assets: `shopify-theme/assets/*`

3. **Recovering deleted files from git:**
   ```bash
   # See what was deleted
   git status

   # Restore specific file
   git checkout HEAD -- templates/page.coaching.json

   # Restore all deleted files
   git checkout HEAD -- .
   ```

4. **After accidental deletion:**
   - Use `git checkout HEAD -- path/to/file` to restore from git
   - Re-push to Shopify after restoring locally
   - Verify on live site before making more changes

**SAFE WORKFLOW:**
1. Make changes locally in `shopify-theme/`
2. Test changes (if possible)
3. **Git commit** the changes
4. Push ONLY changed files: `shopify theme push --only='sections/file.liquid' --allow-live`
5. Verify on live site
6. If broken, restore from git and try again

### How to Add Background Color to Shopify Page Sections

**Example: Adding purple background (#e0d0f2) to coaching page**

1. **Edit each section file** in `shopify-theme/sections/`:
   ```liquid
   <!-- Add style="background-color: #e2c6f7;" to the outer page-width div -->
   <div class="page-width section-{{ section.id }}-padding" style="background-color: #e2c6f7;">
     <!-- section content -->
   </div>
   ```

2. **Files modified for coaching page:**
   - `sections/coaching-hero.liquid` - Added background to content area (not hero image)
   - `sections/coaching-about.liquid`
   - `sections/coaching-who.liquid`
   - `sections/coaching-process.liquid`
   - `sections/coaching-contact.liquid`

3. **Push changes to Shopify:**
   ```bash
   cd shopify-theme
   shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 --allow-live
   ```

4. **Important:** The background color is applied to the `.page-width` container div, NOT to individual content elements. This creates a consistent background across all sections while keeping the hero image unaffected.

## Key Considerations

- Design with Shopify's constraints in mind (e.g., section-based layouts)
- Keep components modular to match Shopify's section system
- Use semantic HTML for better Shopify integration
- Ensure responsive design works across mobile, tablet, and desktop
