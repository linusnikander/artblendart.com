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
- **Live Theme ID**: `189302341896` (ArtBlendArt Custom - formerly "Coaching Pages")

### MANDATORY: Safe Shopify Update Process

**⚠️ CRITICAL: Follow this exact process to avoid file deletion**

**STEP-BY-STEP PROCESS:**

```bash
# 1. Navigate to shopify-theme directory (REQUIRED)
cd shopify-theme

# 2. Verify you're in the correct directory
pwd
# Output should be: /path/to/artblendart.com/shopify-theme

# 3. Make your changes to section/template files locally
# Edit files in sections/ or templates/ directories

# 4. ALWAYS commit to git BEFORE pushing to Shopify
git add sections/coaching-*.liquid templates/page.coaching.json
git commit -m "Describe your changes"

# 5. Push template AND all dependent sections in ONE command
# Use multiple --only flags to specify all related files
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live

# 6. Verify the changes on live site
# Open https://artblendart.com/pages/coaching
# Check that all sections are displaying correctly

# 7. If something breaks, restore from git and try again
git checkout HEAD -- sections/coaching-*.liquid templates/page.coaching.json
```

**CRITICAL RULES:**

1. **NEVER push templates alone** - always include dependent sections
2. **NEVER push sections alone** - always include the template that uses them
3. **NEVER use `--path=` flag** - it deletes everything else
4. **ALWAYS use multiple `--only=` flags** - one for sections, one for template
5. **ALWAYS commit to git first** - enables easy recovery
6. **ALWAYS verify on live site** - catch issues immediately

**Example Commands:**

```bash
# ✅ CORRECT - Push template + sections together
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live

# ✅ CORRECT - Push single section + template
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-hero.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live

# ✅ CORRECT - Push image asset only
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='assets/coaching-hero-background.jpg' \
  --allow-live

# ❌ WRONG - Push template alone (triggers cleanup deletion)
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='templates/page.coaching.json' \
  --allow-live

# ❌ WRONG - Push sections alone (template may get deleted)
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-*.liquid' \
  --allow-live

# ❌ WRONG - Using --path deletes everything else
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --path=assets \
  --allow-live
```

**Pull Commands (Use with Extreme Caution):**

```bash
# ✅ CORRECT - Pull specific file only
shopify theme pull --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='templates/page.coaching.json'

# ❌ WRONG - Pull without --only (deletes all local files not on server)
shopify theme pull --store 82e997-6e.myshopify.com --theme 149756051720
```

**Preview Commands:**

```bash
# Preview theme locally (safe, doesn't modify anything)
shopify theme dev --store 82e997-6e.myshopify.com --theme 149756051720
```

### CRITICAL: Version Control & File Deletion Prevention

**⚠️ ROOT CAUSE: Shopify CLI's "cleaning" behavior deletes files unexpectedly**

The Shopify CLI has a "Cleaning your remote theme" phase that can delete files from the server. This happens because:
- When you push a template file, Shopify validates that all referenced sections exist
- If sections don't exist on the server (even if you just pushed them), the template push triggers a cleanup
- The cleanup can delete the template itself or sections it depends on
- This creates a cycle where files get deleted after being pushed

**⚠️ COMMON ISSUES THAT DELETE FILES:**

1. **`shopify theme pull` without `--only` DELETES local files that don't exist on server**
   - ALWAYS use `--only='path/to/file'` when pulling
   - Pull will remove local files if they're not on the remote server

2. **`shopify theme push --path=assets` DELETES all sections from server**
   - NEVER use `--path` flag - it uploads ONLY that directory and deletes everything else
   - Use `--only='assets/file.jpg'` for individual files instead

3. **Templates can be deleted during push operations due to missing section dependencies**
   - If a template references a section that doesn't exist, the template may be removed
   - Sections can be deleted if templates are pushed without sections being present
   - Always push both templates AND sections together in one command

4. **The "Cleaning your remote theme" phase can delete files**
   - Shopify CLI automatically "cleans" files it thinks are orphaned
   - This can happen even right after uploading files
   - Templates and sections must be pushed together to avoid cleanup deletion

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
4. **Push templates AND sections together** to prevent deletion:
   ```bash
   # For coaching page - push ALL related files in ONE command
   shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
     --only='sections/coaching-*.liquid' \
     --only='templates/page.coaching.json' \
     --allow-live
   ```
5. Verify on live site
6. If broken, restore from git and try again

**WHY PUSH TOGETHER:**
- Pushing template alone can trigger cleanup that deletes sections
- Pushing sections alone, then template can result in template deletion
- Using multiple `--only` flags in one command ensures atomicity
- All files are uploaded before the "cleaning" phase starts

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
