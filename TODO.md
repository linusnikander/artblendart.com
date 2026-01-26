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

### ✅ Completed - Design System
- [x] Create comprehensive style guide (`docs/style-guide.md`)
  - Complete color palette with hex codes and usage
  - Typography system (Sora + Manrope, golden ratio scale)
  - Spacing, shadows, and elevation tokens
  - Button, card, badge component patterns
  - Animation keyframes and utilities
  - Shopify checkout customization guidance

### 📝 Future Improvements
- [ ] Add proper menu management (replace hardcoded "Coaching" link)
- [ ] Upload Therese's photo for coaching-about page
- [ ] Set up email notifications for contact form submissions
- [ ] Review content for any needed adjustments
- [ ] Add Google Analytics tracking (if needed)

---

## Epics

### Epic: Coaching Product Purchase Flow (`coaching-purchase`)
**Status:** ✅ DONE | **Points:** 13 | **Stories:** 5

Enable customers to purchase coaching packages via Shopify checkout with YCBM booking integration.

**Key Decisions:**
- Shopify products (3 packages) for native checkout & future gift cards
- Products unlisted (URL-only access from coaching page)
- Full upfront payment + Klarna for installment option
- YouCanBook.me (free tier) for Swedish-language booking
- Email-based handoff (order confirmation → YCBM link)
- Free 15-min intro consultation separate from packages (optional, via YCBM)

**Stories:**
- [x] 2.1: Create Shopify Products (2 pts)
- [x] 2.2: Update Product Cards with Purchase Links (2 pts)
- [x] 2.3: Configure Checkout & Order Emails (3 pts)
- [x] 2.4: Set Up YCBM Booking Page (3 pts)
- [x] 2.5: End-to-End Testing & Documentation (3 pts)

**Epic File:** `docs/sprint-artifacts/epic-coaching-purchase-flow.md`
**Workflow Review:** `workflow-review.html` (13 screenshots documenting full purchase flow)

---

### Epic: Purchase Flow UX Alignment (`ux-alignment`)
**Status:** In Progress | **Points:** 14 | **Stories:** 6

Align purchase flow UI/UX with reference design. Strategy: maximize pre-checkout and post-checkout (where we have full control) to compensate for checkout limitations.

**Stories (priority order):**
- [x] 3.1: Redesign Coaching Product Page (5 pts) - **FULL** control ✅
- [ ] 3.4: Custom Order Confirmation Email (3 pts) - **FULL** control (big win!)
- [ ] 3.2: Enhance Cart Drawer (3 pts) - **FULL** control
- [ ] 3.3: Apply Checkout Branding (1 pt) - partial (colors/logo only)
- [ ] 3.5: Thank You Page Enhancement (1 pt) - partial (additional scripts)
- [ ] 3.6: YCBM Booking Branding (1 pt) - partial (free tier settings)

**Key Insight:** Can't customize checkout layout, but CAN fully customize the order confirmation email - this is where we add the "wow" factor with branded product card, "What's included" checklist, and prominent "Boka ditt samtal" CTA.

**Epic File:** `docs/sprint-artifacts/epic-ux-alignment.md`
**Reference Screenshots:** `.playwright-mcp/reference-*.png`

---

### Epic: Order Flow Updates (`order-flow-updates`)
**Status:** In Progress | **Points:** 18 | **Stories:** 5

Based on stakeholder review of `order-flow-documentation.pdf`. Updates to coaching page, product pages, cart, checkout, and booking.

**Stories (priority order):**
- [ ] 4.1: Main Coaching Page Updates (5 pts) - Priority 1 **IN PROGRESS** (12/14 tasks done)
- [ ] 4.2: Product Page & Cart Updates (5 pts) - Priority 2
- [ ] 4.3: Checkout & Branding (2 pts) - Priority 3
- [ ] 4.4: Investigation & Discovery (3 pts) - Priority 4 (after 4.1-4.3)
- [ ] 4.5: YCBM Booking Setup (3 pts) - Priority 5

**Separate Tracks:**
- Therese Content Tasks (7 items) - see `docs/sprint-artifacts/therese-content-tasks.md`
- General/Admin Backlog (5 items) - see `docs/sprint-artifacts/backlog-general-tasks.md`

**Epic Files:** `docs/sprint-artifacts/story-4.*.md`
**Reference:** `order-flow-documentation.pdf`, `docs/order-flow-update.md`

---

### Epic: Form Handling & Appointment Booking (`forms-booking`)
**Status:** Draft | **Points:** 11 | **Stories:** 4

Contact forms and free consultation booking (separate from paid purchase flow).

**Stories:**
- [ ] 1.1: Form Handling Research & Selection (2 pts)
- [ ] 1.2: Contact Form Implementation (3 pts)
- [ ] 1.3: Booking Calendar Research & Selection (2 pts)
- [ ] 1.4: Booking Calendar Implementation (4 pts)

**Epic File:** `docs/epics.md`

## 📚 Documentation

- **README.md** - Project overview and quick start
- **SHOPIFY_DEVELOPMENT.md** - Shopify CLI reference
- **SHOPIFY_INTEGRATION.md** - Integration guide
- **DEVELOPMENT_WORKFLOW.md** - ⭐ Complete workflow for creating new pages
- **CLAUDE.md** - Project guidance for Claude Code
- **docs/style-guide.md** - ⭐ Complete design system & style guide (colors, typography, components)
