# Shopify Local Development Guide

This guide explains how to develop your Shopify theme locally and push changes to production.

## Prerequisites

✅ Shopify CLI is now installed
✅ Next.js mockups are ready in `/app/coaching/`

## Setup Steps

### 1. Create a Shopify Theme Directory

```bash
mkdir shopify-theme
cd shopify-theme
```

### 2. Authenticate with Shopify

```bash
shopify auth login
```

This will open a browser window to log in to your Shopify store.

### 3. Pull Your Current Theme

```bash
shopify theme pull --store=artblendart.myshopify.com
```

This downloads your current live theme for local editing.

### 4. Start Local Development Server

```bash
shopify theme dev --store=artblendart.myshopify.com
```

This starts a local development server with:
- Hot reload (changes appear immediately)
- Live preview URL
- Access to your store data

## Workflow

### Preview Mockups
1. Start Next.js dev server: `npm run dev` (from root directory)
2. View mockups at:
   - http://localhost:3000/coaching - Main landing page
   - http://localhost:3000/coaching/about - About & Process
   - http://localhost:3000/coaching/who - Client personas & Topics
   - http://localhost:3000/coaching/contact - Contact form

### Convert to Shopify

Once you approve a mockup design:

1. **Create a new page template** in `shopify-theme/templates/`
2. **Copy HTML structure** from Next.js mockup
3. **Convert to Liquid** (Shopify's template language)
4. **Extract sections** for reusability

Example structure:
```
shopify-theme/
├── sections/
│   ├── coaching-hero.liquid
│   ├── coaching-about.liquid
│   ├── coaching-clients.liquid
│   └── coaching-cta.liquid
├── templates/
│   └── page.coaching.liquid
```

### Push Changes to Production

```bash
# Push to live theme (BE CAREFUL!)
shopify theme push --store=artblendart.myshopify.com

# Or create a new theme version first (safer)
shopify theme push --unpublished --store=artblendart.myshopify.com
```

## Adding "Coaching" to Navigation

In Shopify Admin:
1. Go to **Online Store > Navigation**
2. Edit **Main menu**
3. Add menu item:
   - **Label**: "Coaching"
   - **Link**: /pages/coaching
4. Position it between "Products" and "Contact Us"

## Creating Pages in Shopify

In Shopify Admin:
1. Go to **Online Store > Pages**
2. Click **Add page**
3. Create:
   - `/pages/coaching` - Main landing
   - `/pages/coaching-about` - About & How it works
   - `/pages/coaching-who` - For whom & Topics
   - `/pages/coaching-contact` - Contact form

## Next Steps

1. Review the Next.js mockups
2. Decide on any design changes
3. I can help convert the HTML to Shopify Liquid
4. Test locally with `shopify theme dev`
5. Push to production when ready

## Useful Commands

```bash
# List all themes
shopify theme list --store=artblendart.myshopify.com

# Share preview with others
shopify theme share --store=artblendart.myshopify.com

# Check for theme issues
shopify theme check

# Package theme for backup
shopify theme package
```

## Resources

- [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)
- [Liquid Template Language](https://shopify.dev/docs/api/liquid)
- [Theme Development Best Practices](https://shopify.dev/docs/themes/best-practices)
