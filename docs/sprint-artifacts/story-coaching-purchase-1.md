# User Story 2.1: Create Shopify Products

**Story ID:** 2.1
**Epic:** Coaching Product Purchase Flow (`coaching-purchase`)
**Status:** Draft
**Story Points:** 2
**Estimated Time:** 1-2 hours

---

## User Story

**As a** store owner
**I want** the 3 coaching packages created as products in Shopify
**So that** customers can purchase them through the standard Shopify checkout

---

## Acceptance Criteria

**AC #1:** All 3 coaching products exist in Shopify admin
- "Din kreativa plats" - 5,250 kr
- "Idé till verklighet" - 5,250 kr
- "Kickstart" - 2,500 kr

**AC #2:** Products configured as digital/service products
- "This is a physical product" = unchecked
- No shipping required
- No inventory tracking (unlimited availability)

**AC #3:** Product descriptions match coaching2-products content
- Title, tagline, price, description
- Feature list (what's included)
- Consistent with current card content

**AC #4:** Products are "unlisted" (accessible by URL only)
- Status = Active
- Sales channel = Online Store enabled
- **NOT** added to any collection
- **NOT** visible in site search (exclude from search)
- Only accessible via direct URL from coaching page

**AC #5:** Product handles are URL-friendly
- din-kreativa-plats
- ide-till-verklighet
- kickstart-coaching (or similar)

---

## Tasks/Subtasks

- [ ] Navigate to Shopify Admin → Products (AC: #1)
- [ ] Create product: "Din kreativa plats" (AC: #1, #2, #3)
  - [ ] Set title: "Din kreativa plats - Kreativ Coaching"
  - [ ] Set price: 5250.00 SEK
  - [ ] Add description from coaching2-products content
  - [ ] Add feature list in description
  - [ ] Uncheck "This is a physical product"
  - [ ] Set status to Active
  - [ ] Verify handle is clean
- [ ] Create product: "Idé till verklighet" (AC: #1, #2, #3)
  - [ ] Set title: "Idé till verklighet - Kreativ Coaching"
  - [ ] Set price: 5250.00 SEK
  - [ ] Add description (most popular package)
  - [ ] Add feature list
  - [ ] Configure as digital product
  - [ ] Set status to Active
- [ ] Create product: "Kickstart" (AC: #1, #2, #3)
  - [ ] Set title: "Kickstart - Kreativ Coaching"
  - [ ] Set price: 2500.00 SEK
  - [ ] Add description (friskvårdsbidrag eligible)
  - [ ] Add feature list
  - [ ] Configure as digital product
  - [ ] Set status to Active
- [ ] Configure products as "unlisted" (AC: #4)
  - [ ] Do NOT add to any collection
  - [ ] In product settings, set "Search engine listing" → uncheck "Include in search"
  - [ ] Verify products don't appear in site search
  - [ ] Verify products don't appear in "All Products" or any collection page
- [ ] Verify product handles are correct (AC: #5)
- [ ] Test: Access each product via direct URL
- [ ] Test: Add each product to cart and view checkout

---

## Technical Summary

This story creates the foundation for the purchase flow. Products are created manually in Shopify admin (no code changes).

**Key Configuration:**
- Product type: Not physical (digital/service)
- Inventory: Not tracked (services are unlimited)
- Tax: Standard Swedish VAT (25%)
- Pricing: SEK currency

**Product Content Source:**
Reference `shopify-theme/sections/coaching2-products.liquid` and `shopify-theme/templates/page.coaching2.json` for exact descriptions and features.

---

## Dependencies

- Shopify admin access (82e997-6e.myshopify.com)
- No code changes required
- No other stories required

---

## Key Code References

**Content Source:**
- `shopify-theme/sections/coaching2-products.liquid` - Card structure and styling
- `shopify-theme/templates/page.coaching2.json` - Current product content (lines 284-345)

---

**END OF STORY 2.1**
