# TODO

## Completed Tasks
- [x] Initialize git repository
- [x] Create initial commit with all project files
- [x] Create GitHub repository using gh CLI
- [x] Push code to GitHub

## Repository
https://github.com/linusnikander/artblendart.com

---

## Coaching Pages Project

### ✅ Completed - Local Development Setup
- [x] Set up Next.js project with TypeScript and Tailwind CSS
- [x] Analyze existing artblendart.com design and structure
- [x] Split PDF content into 4 logical page sections
- [x] Create coaching landing page mockup (`/coaching`)
- [x] Create About & Process page mockup (`/coaching/about`)
- [x] Create Who & Topics page mockup (`/coaching/who`)
- [x] Create Contact/Booking page mockup (`/coaching/contact`)
- [x] Install and configure Shopify CLI (v3.86.1)
- [x] Authenticate with Shopify and pull Dawn theme
- [x] Start both development servers (Next.js and Shopify)
- [x] Verify all mockup pages with Playwright
- [x] Create comprehensive documentation

### 🎉 Development Servers Running
- **Next.js mockups**: http://localhost:3001/coaching ✅
- **Shopify local theme**: http://127.0.0.1:9292 ✅

### ✅ Completed - Liquid Sections & Templates
- [x] Convert mockups to Liquid sections
- [x] Create JSON page templates
- [x] Add "Coaching" to main navigation (temporary hardcoded)
- [x] Push templates to live Dawn theme
- [x] Create 4 coaching pages in Shopify admin
- [x] Set URL handles and visibility
- [x] Test all pages with Shopify styling
- [x] Merge 4 separate pages into 1 unified page (following PDF order)
- [x] Add anchor links from CTA buttons to contact form
- [x] Set up URL redirect /coaching → /pages/coaching

### 🎉 Coaching Page Live!

**Live URL:**
- ✅ https://artblendart.com/pages/coaching (Single combined page with all content)
- ✅ Redirect: /coaching → /pages/coaching

**Page Structure:**
- Single unified coaching page with 4 sections (following PDF order):
  1. **Hero/Landing** - Main coaching introduction
  2. **About & Process** - About Therese and how coaching works
  3. **Who & Topics** - Client personas and themes explored
  4. **Contact/Booking** - Application form at the bottom
- All CTA buttons use `#contact` anchor links to scroll to form
- Smooth in-page navigation
- Contact form integrated with Shopify contact system

**Page Details:**
- Uses Shopify Dawn theme styling
- Set to "Visible" (accessible via direct URL)
- Access via "Coaching" link in main navigation
- All content from PDF integrated into single page

**Sections Created:**
1. `coaching-hero.liquid` - Landing page hero section
2. `coaching-about.liquid` - About Therese & process explanation
3. `coaching-who.liquid` - Client personas & coaching themes
4. `coaching-contact.liquid` - Contact form with 3-step process (has `id="contact"` anchor)

### 📝 Future Improvements
- [ ] Add proper menu management (replace hardcoded "Coaching" link)
- [ ] Upload Therese's photo for coaching-about page
- [ ] Consider adding pricing information
- [ ] Set up email notifications for contact form submissions
- [ ] Review content for any needed adjustments
- [ ] Add Google Analytics tracking (if needed)

## 📚 Documentation

- **README.md** - Project overview and quick start
- **SHOPIFY_DEVELOPMENT.md** - Shopify CLI reference
- **SHOPIFY_INTEGRATION.md** - Integration guide
- **DEVELOPMENT_WORKFLOW.md** - ⭐ Complete workflow for creating new pages
- **CLAUDE.md** - Project guidance for Claude Code
