# Development Workflow for Shopify Pages

This document explains how to develop new pages for the ArtBlendArt Shopify store.

## Overview

Shopify page development involves **two separate components**:

1. **Theme files** (templates & sections) - Stored in theme, developed locally
2. **Page content** - Stored in Shopify database, created via admin

Both are required for a page to work.

---

## Step-by-Step Workflow

### Step 1: Create Mockups (Optional but Recommended)

Create Next.js mockups first to prototype quickly:

```bash
# In project root
npm run dev
# Visit http://localhost:3001
```

- Develop pages in `app/` directory
- Test layout and content
- Iterate quickly without Shopify complexity

### Step 2: Convert to Shopify Liquid

Create Shopify sections and templates in `shopify-theme/`:

**Directory structure:**
```
shopify-theme/
├── sections/
│   └── your-section.liquid    # Liquid section with schema
└── templates/
    └── page.your-page.json    # JSON template referencing section
```

**Section example:**
```liquid
<div class="page-width">
  <h1>{{ section.settings.heading }}</h1>
  {{ section.settings.content }}
</div>

{% schema %}
{
  "name": "Your Section",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading"
    }
  ]
}
{% endschema %}
```

**Template example:**
```json
{
  "sections": {
    "main": {
      "type": "your-section",
      "settings": {
        "heading": "Default Heading"
      }
    }
  },
  "order": ["main"]
}
```

### Step 3: Push Theme Files to Shopify

Push your new sections and templates to the live theme:

```bash
cd shopify-theme

# Push specific files to live theme (safer)
shopify theme push --theme=149756051720 \
  --only='templates/page.your-page.json' \
  --only='sections/your-section.liquid' \
  --allow-live

# Or push all changes (use with caution on live theme)
shopify theme push --theme=149756051720 --allow-live
```

**⚠️ Important:** Templates must be pushed to the **live theme** (ID: 149756051720) for them to appear in the Shopify admin page creation form.

### Step 4: Create Pages in Shopify Admin

Now create the actual pages that use your templates:

1. Go to: https://admin.shopify.com/store/82e997-6e/pages
2. Click **"Add page"**
3. Fill in the form:
   - **Title**: Your page title
   - **Content**: Leave empty (template handles content)
   - **Visibility**: Select **"Visible"**
   - **Template**: Select your custom template
4. Expand **"Search engine listing"** → Click **"Edit website SEO"**
5. Set **URL handle**: `your-page-handle`
6. Click **"Save"**

**⚠️ Critical:** Set visibility to **"Visible"**, NOT "Hidden"
- "Hidden" pages are completely inaccessible via URL
- "Visible" pages can be accessed via direct URL
- They won't appear in search results unless added to sitemap/navigation

### Step 5: Test Your Pages

Access your pages at:
- **Live site**: https://artblendart.com/pages/your-page-handle
- **Local dev**: http://127.0.0.1:9292/pages/your-page-handle (if dev server running)

```bash
# Start local dev server (in shopify-theme/)
shopify theme dev --store=82e997-6e.myshopify.com
```

---

## Key Concepts

### Theme Files vs Page Content

| Component | Location | How to Edit |
|-----------|----------|-------------|
| Templates (`.json`) | Theme files | Edit locally, push to Shopify |
| Sections (`.liquid`) | Theme files | Edit locally, push to Shopify |
| Page settings | Shopify database | Edit in Shopify admin |
| Page existence | Shopify database | Create in Shopify admin |

### Page Visibility Settings

- **Visible**: Page accessible via direct URL, can be found if linked
- **Hidden**: Page completely inaccessible, returns 404 even with direct URL
- **Use case**: Set to "Visible" for testing, only accessible via direct URL or custom navigation

### URL Handles

- URL handle determines the page URL: `/pages/your-handle`
- Must be unique across all pages
- Cannot contain spaces or special characters
- Recommended format: `feature-name` (lowercase, hyphen-separated)

---

## Common Issues & Solutions

### Issue: "Template not showing in dropdown"

**Cause:** Template not in the live theme yet

**Solution:**
```bash
shopify theme push --theme=149756051720 \
  --only='templates/page.your-template.json' \
  --allow-live
```

### Issue: "Page returns 404"

**Causes:**
1. Page set to "Hidden" visibility
2. Wrong URL handle
3. Page not created in admin

**Solution:**
1. Check visibility is "Visible"
2. Verify URL handle matches your URL
3. Confirm page exists in admin

### Issue: "Changes not showing"

**Causes:**
1. Template not pushed to theme
2. Page using wrong template
3. Browser cache

**Solution:**
1. Push template to live theme
2. Check page's template setting in admin
3. Hard refresh (Cmd+Shift+R / Ctrl+F5)

---

## Development Checklist

When creating new pages:

- [ ] Create Next.js mockup (optional)
- [ ] Create Shopify section with schema
- [ ] Create JSON template referencing section
- [ ] Push template and section to live theme
- [ ] Create page in Shopify admin
- [ ] Set visibility to "Visible"
- [ ] Set correct URL handle
- [ ] Verify template is selected
- [ ] Test page at live URL
- [ ] Update navigation if needed

---

## File Naming Conventions

**Sections:** `feature-name.liquid`
- Example: `coaching-hero.liquid`

**Templates:** `page.page-handle.json`
- Example: `page.coaching.json`
- The filename determines the template name shown in admin

**URL Handles:** `feature-name`
- Example: `coaching-contact`
- Matches the template name (without `page.` prefix)

---

## Useful Commands

```bash
# List all themes
shopify theme list

# Start local dev server
shopify theme dev --store=82e997-6e.myshopify.com

# Push all changes to live theme
shopify theme push --theme=149756051720 --allow-live

# Push specific files only
shopify theme push --theme=149756051720 \
  --only='templates/page.*.json' \
  --only='sections/coaching-*.liquid' \
  --allow-live

# Pull theme from Shopify
shopify theme pull --theme=149756051720

# Check Shopify CLI version
shopify version
```

---

## Links

- **Shopify Admin**: https://admin.shopify.com/store/82e997-6e
- **Pages**: https://admin.shopify.com/store/82e997-6e/pages
- **Themes**: https://admin.shopify.com/store/82e997-6e/themes
- **Live Site**: https://artblendart.com
- **Dev Store**: 82e997-6e.myshopify.com
