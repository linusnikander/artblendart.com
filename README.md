# ArtBlendArt Shopify Mockups

This repository contains Next.js mockups for new pages on the ArtBlendArt Shopify store.

## Project Structure

```
├── app/
│   ├── coaching/              # Coaching service pages
│   │   ├── page.tsx          # Main landing page
│   │   ├── about/page.tsx    # About Therese & Process
│   │   ├── who/page.tsx      # Client personas & Topics
│   │   └── contact/page.tsx  # Contact/Booking form
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/               # Reusable components (add as needed)
├── public/                   # Static assets
└── shopify-theme/           # (Create this) Local Shopify theme files

```

## Quick Start

### View Mockups Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000 to see the mockups:
- `/coaching` - Main coaching landing page
- `/coaching/about` - About & How It Works
- `/coaching/who` - Who It's For & Services
- `/coaching/contact` - Contact/Booking

### Shopify Theme Development

See [SHOPIFY_DEVELOPMENT.md](./SHOPIFY_DEVELOPMENT.md) for complete instructions on:
- Setting up local Shopify development
- Converting mockups to Shopify themes
- Pushing changes to production

## Coaching Pages Overview

The PDF content has been split into 4 pages:

1. **Main Landing** (`/coaching`)
   - Hero with main value proposition
   - What to expect description
   - Call-to-action to book consultation

2. **About & Process** (`/coaching/about`)
   - Therese's bio and credentials
   - Coaching approach and philosophy
   - Detailed process explanation (15-min consult, sessions, homework)

3. **Who & Topics** (`/coaching/who`)
   - 4 client personas (Eva, Leo, Erik, Sofia)
   - List of coaching themes/topics
   - Flexible approach messaging

4. **Contact** (`/coaching/contact`)
   - Booking form for 15-min consultation
   - Process steps explanation
   - Contact information

## Design Notes

The mockups match the existing ArtBlendArt site style:
- Clean, minimal design
- Light color palette
- Simple typography
- Focus on content and readability
- Responsive layout (mobile-friendly)

## Next Steps

1. ✅ Review mockups locally
2. ⏳ Provide feedback on design/content
3. ⏳ Set up Shopify theme development
4. ⏳ Convert mockups to Shopify Liquid
5. ⏳ Add to main navigation
6. ⏳ Deploy to production

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Lint code
```

## Integration with Shopify

To add these pages to your Shopify store:

1. Add "Coaching" to main navigation menu
2. Create corresponding pages in Shopify admin
3. Convert HTML/CSS to Shopify Liquid templates
4. Use Shopify CLI for local development and deployment

See [SHOPIFY_DEVELOPMENT.md](./SHOPIFY_DEVELOPMENT.md) for detailed instructions.
