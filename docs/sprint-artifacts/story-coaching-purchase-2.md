# User Story 2.2: Update Product Cards with Purchase Links

**Story ID:** 2.2
**Epic:** Coaching Product Purchase Flow (`coaching-purchase`)
**Status:** Draft
**Story Points:** 2
**Estimated Time:** 1-2 hours

---

## User Story

**As a** website visitor
**I want** the "Köp [paket] nu" buttons to take me to purchase the actual product
**So that** I can buy a coaching package directly from the coaching page

---

## Acceptance Criteria

**AC #1:** Each product card CTA links to its Shopify product
- "Köp Din kreativa plats nu" → /products/din-kreativa-plats
- "Köp Idé till verklighet nu" → /products/ide-till-verklighet
- "Köp Kickstart nu" → /products/kickstart-coaching

**AC #2:** Links work correctly when clicked
- Opens product page (or add to cart + redirect to checkout)
- No broken links or 404 errors

**AC #3:** Mobile experience maintained
- Buttons remain tappable on mobile
- No layout issues after link changes

**AC #4:** Updated section deployed to live theme
- Changes pushed via Shopify CLI
- Verified on production site

---

## Tasks/Subtasks

- [ ] Get product handles from Shopify admin (AC: #1)
  - [ ] Note exact handles for all 3 products
  - [ ] Construct full product URLs

- [ ] Update coaching2-products.liquid (AC: #1, #2)
  - [ ] Option A: Update `cta_link` settings in page.coaching2.json with product URLs
  - [ ] Option B: Modify section to use product object picker instead of URL field
  - [ ] Test links locally if possible

- [ ] Deploy changes to Shopify (AC: #4)
  - [ ] Push section changes: `shopify theme push --store 82e997-6e.myshopify.com --theme 189302341896 --only='sections/coaching2-products.liquid' --allow-live`
  - [ ] If JSON updated: include in push command

- [ ] Verify on live site (AC: #2, #3)
  - [ ] Test all 3 product links on desktop
  - [ ] Test all 3 product links on mobile
  - [ ] Verify checkout flow works end-to-end

---

## Technical Summary

**Current State:**
The coaching2-products section uses a `cta_link` setting (URL type) for each product block. Currently these point to `#boka` (anchor link).

**Implementation Options:**

**Option A: Simple URL Update (Recommended)**
Update the `cta_link` values in `page.coaching2.json` to point to product URLs:
```json
"cta_link": "/products/din-kreativa-plats"
```

**Option B: Product Picker**
Change the section schema to use a `product` type picker instead of `url`:
```liquid
{
  "type": "product",
  "id": "product",
  "label": "Linked Product"
}
```
Then use `{{ block.settings.product.url }}` in the template.

Option A is simpler and doesn't require schema changes.

---

## Dependencies

- **Story 2.1:** Products must exist in Shopify before links can be created
- Shopify CLI authenticated
- Live Theme ID: `189302341896` (from CLAUDE.md)

---

## Key Code References

**Files to Modify:**
- `shopify-theme/templates/page.coaching2.json` (lines 302, 322, 342 - `cta_link` values)
- Optionally: `shopify-theme/sections/coaching2-products.liquid` (line 337 - `{{ block.settings.cta_link }}`)

**Deployment:**
Follow deployment guide: `docs/deployment-guide.md`

---

**END OF STORY 2.2**
