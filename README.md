# ArtBlendArt.com

Shopify store development for [artblendart.com](https://artblendart.com) — coaching and creative services by Therese.

## Project Structure

```
├── app/                     # Next.js mockups (prototyping)
│   ├── coaching/            # Original coaching page mockups
│   └── globals.css
├── shopify-theme/           # Live Shopify theme (Dawn-based)
│   ├── sections/            # Liquid sections (coaching2-*, page-*)
│   ├── templates/           # JSON page templates
│   ├── assets/              # Images, CSS
│   └── ...                  # Standard Dawn theme files
├── docs/                    # Project documentation
│   ├── sprint-artifacts/    # Epics and stories
│   ├── deployment-guide.md  # Shopify deployment process
│   ├── style-guide.md       # Design system reference
│   └── ...
├── CLAUDE.md                # AI assistant project config
├── TODO.md                  # Task tracking and epic status
└── DEVELOPMENT_WORKFLOW.md  # Shopify page creation workflow
```

## Development

```bash
npm install
npm run dev          # Next.js mockups at http://localhost:3000
```

## Shopify Theme

```bash
cd shopify-theme

# Local dev server
shopify theme dev --store=82e997-6e.myshopify.com

# Push to live theme
shopify theme push --store 82e997-6e.myshopify.com --theme 189302341896 \
  --only='sections/coaching2-*.liquid' \
  --only='templates/page.coaching2.json' \
  --allow-live
```

**Store:** `82e997-6e.myshopify.com`
**Live Theme ID:** `189302341896`

See [docs/deployment-guide.md](docs/deployment-guide.md) for the full deployment process.

## Live Pages

- **Main coaching page:** https://artblendart.com/pages/coaching2
- **Friskvardsbidrag:** https://artblendart.com/pages/friskvardsbidrag
- **Vetenskap:** https://artblendart.com/pages/vetenskap

## Documentation

| File | Purpose |
|---|---|
| [TODO.md](TODO.md) | Task tracking, epic status |
| [docs/deployment-guide.md](docs/deployment-guide.md) | Shopify CLI deployment process |
| [docs/theme-update-guide.md](docs/theme-update-guide.md) | Theme updates and maintenance |
| [docs/style-guide.md](docs/style-guide.md) | Design system (colors, typography, components) |
| [DEVELOPMENT_WORKFLOW.md](DEVELOPMENT_WORKFLOW.md) | Creating new Shopify pages |
| [docs/order-flow-update.md](docs/order-flow-update.md) | Order flow changes from stakeholder review |

## Tech Stack

- **Framework:** Next.js 15 (App Router) — for mockups
- **Theme:** Shopify Dawn (customized) — for production
- **Styling:** Tailwind CSS (mockups), inline CSS (Liquid sections)
- **Language:** TypeScript (mockups), Liquid (Shopify)
