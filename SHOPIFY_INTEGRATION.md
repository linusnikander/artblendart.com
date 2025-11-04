# Shopify Theme Integration Guide

## ✅ Setup Complete!

You now have:
1. **Next.js mockups** running on http://localhost:3001
2. **Shopify theme** (Dawn) downloaded to `/shopify-theme/`
3. **Shopify dev server** running on http://127.0.0.1:9292

## Current Setup

### Development Servers
- **Next.js mockups**: http://localhost:3001/coaching
- **Shopify local theme**: http://127.0.0.1:9292
- **Shopify admin preview**: https://82e997-6e.myshopify.com/?preview_theme_id=189300637960

### Theme Structure
```
shopify-theme/
├── assets/         # CSS, JS, images (106 files)
├── config/         # Theme settings
├── layout/         # Base layouts (theme.liquid, etc.)
├── locales/        # Translation files (54 files)
├── sections/       # Reusable page sections (57 files)
├── snippets/       # Small reusable components (76 files)
└── templates/      # Page templates (18 files)
```

## Adding Coaching Pages to Shopify

### Step 1: Create Page Templates

Shopify uses JSON templates that reference sections. Let's create templates for your coaching pages.

#### 1.1 Create coaching landing page template
Create: `shopify-theme/templates/page.coaching.json`

```json
{
  "sections": {
    "coaching_hero": {
      "type": "coaching-hero"
    },
    "coaching_content": {
      "type": "coaching-content"
    },
    "coaching_cta": {
      "type": "coaching-cta"
    }
  },
  "order": [
    "coaching_hero",
    "coaching_content",
    "coaching_cta"
  ]
}
```

#### 1.2 Create other coaching page templates
Similarly create:
- `page.coaching-about.json`
- `page.coaching-who.json`
- `page.coaching-contact.json`

### Step 2: Create Liquid Sections

Based on your Next.js mockups, create these sections:

#### 2.1 Hero Section
Create: `shopify-theme/sections/coaching-hero.liquid`

```liquid
<div class="page-width">
  <div class="coaching-hero">
    <h1>{{ section.settings.heading }}</h1>
    <p>{{ section.settings.subheading }}</p>
  </div>
</div>

{% schema %}
{
  "name": "Coaching Hero",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Kreativt skapande"
    },
    {
      "type": "textarea",
      "id": "subheading",
      "label": "Subheading",
      "default": "Coaching för dig som vill skapa och bjuda in mer kreativitet i ditt liv"
    }
  ]
}
{% endschema %}
```

#### 2.2 Content Section
Create: `shopify-theme/sections/coaching-content.liquid`

Copy HTML from your Next.js mockups and convert to Liquid.

#### 2.3 CTA Section
Create: `shopify-theme/sections/coaching-cta.liquid`

### Step 3: Add CSS Styles

Add your Tailwind-style CSS to: `shopify-theme/assets/coaching.css`

Then include it in your sections:
```liquid
{{ 'coaching.css' | asset_url | stylesheet_tag }}
```

### Step 4: Create Pages in Shopify Admin

1. Go to: https://82e997-6e.myshopify.com/admin/pages
2. Click "Add page"
3. Create pages:
   - `/pages/coaching` - Use template: `page.coaching`
   - `/pages/coaching-about` - Use template: `page.coaching-about`
   - `/pages/coaching-who` - Use template: `page.coaching-who`
   - `/pages/coaching-contact` - Use template: `page.coaching-contact`

### Step 5: Add to Navigation

1. Go to: https://82e997-6e.myshopify.com/admin/menus
2. Edit "Main menu"
3. Add menu item:
   - **Label**: "Coaching"
   - **Link**: /pages/coaching
4. Position it between "Products" and "Contact Us"

## Development Workflow

### Working Locally

1. **Edit mockups first** (Next.js at http://localhost:3001)
   - Iterate on design and content quickly
   - Get approval from stakeholders

2. **Convert approved mockups to Shopify**
   - Copy HTML structure to Liquid sections
   - Extract CSS to theme assets
   - Create JSON templates

3. **Test locally** (Shopify dev at http://127.0.0.1:9292)
   - See changes in real-time with hot reload
   - Test with actual Shopify data

4. **Push to production**
   ```bash
   cd shopify-theme
   shopify theme push --store=82e997-6e.myshopify.com
   ```

### Useful Commands

```bash
# Check Shopify dev server status
shopify theme check

# Push to unpublished theme (safer)
shopify theme push --unpublished --store=82e997-6e.myshopify.com

# Share preview with others
shopify theme share --store=82e997-6e.myshopify.com

# Package theme for backup
shopify theme package
```

## Quick Conversion Guide

### Converting Next.js to Liquid

**Next.js (JSX):**
```jsx
<h1 className="text-4xl">
  {title}
</h1>
```

**Shopify (Liquid):**
```liquid
<h1 class="text-4xl">
  {{ section.settings.title }}
</h1>
```

### Converting Tailwind to Shopify CSS

Your mockups use Tailwind classes. You have two options:

1. **Keep Tailwind classes** - Add Tailwind CSS to your theme
2. **Extract to custom CSS** - Convert classes to regular CSS in `coaching.css`

I recommend option 2 for simplicity in Shopify.

## Example: Converting Landing Page

From your Next.js mockup at `/coaching`:

**1. Extract HTML structure:**
```html
<main class="min-h-screen bg-white">
  <section class="max-w-4xl mx-auto px-6 py-16">
    <h1>Kreativt skapande</h1>
    <p>Coaching för dig som vill skapa...</p>
  </section>
</main>
```

**2. Convert to Liquid section:**
```liquid
<div class="page-width section-{{ section.id }}">
  <div class="coaching-hero">
    <h1>{{ section.settings.heading }}</h1>
    <p>{{ section.settings.subheading }}</p>
  </div>
</div>

<style>
.coaching-hero {
  max-width: 64rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  text-align: center;
}
.coaching-hero h1 {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 2rem;
}
</style>

{% schema %}
{
  "name": "Coaching Hero",
  "settings": [...]
}
{% endschema %}
```

**3. Create page template that uses this section**

**4. Create page in Shopify admin with this template**

## Next Steps

1. ✅ Review Next.js mockups at http://localhost:3001/coaching
2. ⏳ Get approval on content and design
3. ⏳ Create Liquid sections based on mockups
4. ⏳ Create JSON page templates
5. ⏳ Add CSS styles
6. ⏳ Create pages in Shopify admin
7. ⏳ Add to navigation menu
8. ⏳ Test locally at http://127.0.0.1:9292
9. ⏳ Push to production

## Resources

- **Shopify Liquid Docs**: https://shopify.dev/docs/api/liquid
- **Theme Development**: https://shopify.dev/docs/themes
- **Dawn Theme Reference**: https://github.com/Shopify/dawn
- **Your Shopify Admin**: https://82e997-6e.myshopify.com/admin
