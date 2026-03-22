# Story 4.1: Main Coaching Page Updates

**Epic:** UX Alignment
**Points:** 5
**Priority:** 1 (First)
**Status:** DONE

---

## User Story

As a potential coaching customer visiting the main coaching page, I want a clear, focused experience that guides me to the coaching packages without distractions.

---

## Tasks

| ID | Task | Status |
|----|------|--------|
| S1-1 | Remove "online coaching available" text | [x] |
| S1-2 | Move text down from eye level | [x] |
| S1-3 | Move "Do you recognize yourself?" section lower (was 2nd, now 7th) | [x] |
| S1-4 | Change booking button to link to packages | [x] |
| S1-5 | Remove "100 satisfied customers" | [x] |
| S1-6 | Fix Therese image resolution (photo by tree) | [x] |
| S1-7 | Add "book package" button near Therese section | [x] |
| S1-8 | Fix "Your creative journey" section — adjust image/text alignment, fix text on image | [x] |
| S1-9 | Move free consultation to bottom (final CTA only links to booking) | [x] |
| S1-10 | Align "How it works" section with package sales flow (CTAs → #paket) | [x] |
| S1-11 | Move "Don't know where to start" - simplified text in themes section | [x] |
| S1-12 | Final CTA section kept for booking, all other CTAs → packages | [x] |
| S1-13 | Change product buttons from "Köp" to "Välj" | [x] |
| S1-14 | Add consultation booking link in packages section header | [x] |

---

## Acceptance Criteria

- [x] All specified text elements removed (badge, 100+ stat)
- [x] Therese image displays at proper resolution
- [x] Booking buttons link to package section (all CTAs → #paket)
- [x] Free consultation is less prominent, at bottom (only final CTA)
- [x] Page flow guides users toward packages (products now 3rd section)
- [x] Visual review completed with stakeholder

---

## Dependencies

- Therese content tasks (T-1 to T-7) may affect final text — coordinate
- Image assets needed: high-res Therese photo

---

## Notes

- Reference: `order-flow-documentation.pdf` Screen 1
- Feedback source: `docs/order-flow-update.md`

### Progress Log

**2026-01-26:**
- S1-1: Removed badge text from hero section (was "Online coaching – tillgänglig var du än är")
- S1-4: Changed hero CTA from "Boka nu" to "Se våra paket" linking to #paket
- S1-5: Removed "100+ nöjda klienter" stat from hero (now only shows "10+ års erfarenhet" and "Online var du än är")
- S1-13: Changed all product card buttons from "Köp [name] nu" to "Välj [name]"
- S1-14: Added "Boka gratis konsultation →" link in products section header

**Major section reordering:**
- S1-3: Moved pain_points section from 2nd position to 7th (near bottom)
- S1-7: Changed about section CTA to "Se våra paket" → #paket
- S1-9: Only final CTA section links to booking now
- S1-10: Updated process CTA to "Välj ditt paket" → #paket
- S1-11: Updated themes CTA to "Se våra paket" → #paket
- S1-12: All section CTAs now guide to packages, final CTA handles booking

**New section order:**
1. Hero → #paket
2. About → #paket
3. Products (was 7th, now 3rd!)
4. Process → #paket
5. Themes → #paket
6. Personas → #paket
7. Pain points (was 2nd, now 7th) → #paket
8. CTA → booking (mailto)

Files modified:
- `shopify-theme/templates/page.coaching2.json` - section order + all CTAs
- `shopify-theme/sections/coaching2-products.liquid` - button text + consultation link
