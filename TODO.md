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

### 🎉 All Coaching Pages Live!

**Live Page URLs:**
- ✅ https://artblendart.com/pages/coaching (Landing page)
- ✅ https://artblendart.com/pages/coaching-about (About & Process)
- ✅ https://artblendart.com/pages/coaching-who (Who & Topics)
- ✅ https://artblendart.com/pages/coaching-contact (Contact/Booking)

**Page Details:**
- All pages use Shopify Dawn theme styling
- All pages set to "Visible" (accessible via direct URL)
- Pages won't appear in search results automatically
- Access via hardcoded "Coaching" link in navigation or direct URLs
- Contact form integrated with Shopify contact system

**Sections Created:**
1. `coaching-hero.liquid` - Landing page hero section
2. `coaching-about.liquid` - About Therese & process explanation
3. `coaching-who.liquid` - Client personas & coaching themes
4. `coaching-contact.liquid` - Contact form with 3-step process

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
