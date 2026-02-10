# TODO

## Repository
https://github.com/linusnikander/artblendart.com

---

## Epics

### Epic: Order Flow Updates (`order-flow-updates`)
**Status:** In Progress | **Points:** 18 | **Stories:** 5

Based on stakeholder review of `order-flow-documentation.pdf`. Updates to coaching page, product pages, cart, checkout, and booking.

**Stories (priority order):**
- [ ] 4.1: Main Coaching Page Updates (5 pts) - **IN PROGRESS** (12/14 tasks done)
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

### Epic: Purchase Flow UX Alignment (`ux-alignment`)
**Status:** In Progress | **Points:** 14 | **Stories:** 6

Align purchase flow UI/UX with reference design.

**Stories (priority order):**
- [x] 3.1: Redesign Coaching Product Page (5 pts) - DONE
- [ ] 3.4: Custom Order Confirmation Email (3 pts)
- [ ] 3.2: Enhance Cart Drawer (3 pts)
- [ ] 3.3: Apply Checkout Branding (1 pt)
- [ ] 3.5: Thank You Page Enhancement (1 pt)
- [ ] 3.6: YCBM Booking Branding (1 pt)

**Epic File:** `docs/sprint-artifacts/epic-ux-alignment.md`

---

### Epic: Coaching Product Purchase Flow (`coaching-purchase`)
**Status:** DONE | **Points:** 13 | **Stories:** 5

**All stories completed.** Enable customers to purchase coaching packages via Shopify checkout with YCBM booking integration.

**Epic File:** `docs/sprint-artifacts/epic-coaching-purchase-flow.md`

---

### Epic: Form Handling & Appointment Booking (`forms-booking`)
**Status:** Draft | **Points:** 11 | **Stories:** 4

Contact forms and free consultation booking (separate from paid purchase flow). Not yet started.

**Epic File:** `docs/epics.md`

---

## Future Improvements
- [ ] Add proper menu management (replace hardcoded "Coaching" link)
- [ ] Set up email notifications for contact form submissions
- [ ] Add Google Analytics tracking (if needed)

---

## Reference

### Google Forms (Coaching Evaluation)
Created via Google Apps Script, owned by Therese's Google account:

- **Form 1 — Inför vårt första samtal:** `https://forms.gle/Sa7JsjhvcisP9b9XA`
- **Form 2 — Efter varje samtal:** `https://forms.gle/aSMYCe5qDnjWtGca6`
- **Form 3 — Slututvärdering:** `https://forms.gle/DuZfs1mSN8hAGmY57`

### Live Pages
- Main coaching: https://artblendart.com/pages/coaching2
- Friskvardsbidrag: https://artblendart.com/pages/friskvardsbidrag
- Vetenskap: https://artblendart.com/pages/vetenskap

### Shopify Config
- **Store (CLI):** `82e997-6e.myshopify.com`
- **Live Theme ID:** `189302341896`

## Documentation
- `docs/deployment-guide.md` — Shopify deployment process
- `docs/theme-update-guide.md` — Theme updates and maintenance
- `docs/style-guide.md` — Design system reference
- `DEVELOPMENT_WORKFLOW.md` — Creating new Shopify pages
