# Story 4.3: Checkout & Branding

**Epic:** UX Alignment
**Points:** 2
**Priority:** 3
**Status:** Draft

---

## User Story

As a customer completing a purchase, I want a branded checkout experience in Swedish that feels consistent with the ArtBlendArt coaching pages.

---

## Tasks

### Checkout (Screen 4)

| ID | Task | Status |
|----|------|--------|
| S4-1 | Fix ArtBlendArt logo on order summary | [ ] |
| S4-2 | Change payment section to Swedish | [ ] |
| S4-3 | Apply brand purple (#7c3aed) as checkout accent color | [ ] |

### Review Order (Screen 6)

| ID | Task | Status |
|----|------|--------|
| S6-1 | Fix logo on "Complete your order" page | [ ] |

---

## Acceptance Criteria

- [ ] Correct ArtBlendArt logo displays in checkout
- [ ] Checkout UI elements in Swedish
- [ ] Accent color (buttons, links) set to purple #7c3aed
- [ ] Logo correct on review/complete order page
- [ ] Visual consistency with rest of site

---

## Implementation Notes

### Shopify Checkout Branding Settings
Location: Shopify Admin → Settings → Checkout → Branding

**Settings to update:**
- Logo: Upload correct ArtBlendArt logo
- Accent color: `#7c3aed`
- Button color: `#7c3aed`
- Link color: `#7c3aed`

### Language Settings
Location: Shopify Admin → Settings → Languages

- Ensure Swedish is set as primary/default
- Review checkout-specific translations

---

## Dependencies

- Logo asset in correct format (max 400x200px recommended)
- Admin access to Shopify checkout settings

---

## Notes

- Reference: `order-flow-documentation.pdf` Screens 4 & 6
- Feedback source: `docs/order-flow-update.md`
- Checkout customization is limited on non-Plus plans — accent color is main lever
