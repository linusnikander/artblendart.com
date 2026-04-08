# Coaching2 Page — UX / UI / Workflow Review

**Date:** 2026-04-07
**URL:** https://artblendart.com/pages/coaching2
**Reviewed by:** Claude (UX review agent)

---

## Summary

The coaching2 landing page has strong visual design and compelling copy, but suffers from several **critical workflow issues** that would prevent conversions. Product pages are broken (wrong content), modals have placeholder images, navigation links to the old page, and the only CTA for free consultation is a raw mailto link with no booking system.

---

## Critical Issues (Blocking / Conversion-Killing)

### 1. All Three Product Pages Show Identical Wrong Content
**Severity:** CRITICAL
**Location:** `/products/din-kreativa-plats`, `/products/ide-till-verklighet`, `/products/kickstart-coaching`

All three product pages display the **Kickstart/Friskvårdsbidrag** description text ("En kickstart för din kreativitet — Friskvårdsbidrag godkänd!") regardless of which package was selected. The descriptions, included items, and positioning are identical across all three pages.

- "Din kreativa plats" (€5,250) — shows Kickstart content (1 coaching session, not 3)
- "Idé till verklighet" (€5,250) — shows Kickstart content (1 coaching session, not 3)
- "Kickstart" (€2,500) — shows Kickstart content (correct, but by accident)

**Impact:** A customer clicking "Välj Din kreativa plats" sees a description for a completely different, cheaper product. This destroys trust and causes confusion.

**Fix:** Update each Shopify product's description in the admin to match the modal content already written for each package (the modal copy is correct and detailed).

---

### 2. Currency Mismatch: SEK on Landing Page vs EUR on Product Pages
**Severity:** CRITICAL
**Location:** coaching2 page vs product pages

The coaching2 page shows prices in **SEK** (kr):
- "1 750 kr/mån" / "5 250 kr totalt"
- "2 500 kr"

But the Shopify product pages show prices in **EUR**:
- "€5.250,00 EUR"
- "€2.500,00 EUR"

**Impact:** Customers see one price on the landing page and a wildly different-looking number on the product page. This is confusing and may feel dishonest.

**Fix:** Either configure Shopify products with SEK prices, or update the coaching2 landing page to show EUR amounts. Prices must be consistent across the entire flow.

---

### 3. No Product Images on Any Product Page
**Severity:** HIGH
**Location:** All three product pages

The product pages have **no images whatsoever** — just text, price, and the add-to-cart button on the left half of the screen, with the right half completely empty.

**Impact:** Looks incomplete/broken. A coaching service can still have lifestyle images, illustrations, or branded graphics.

**Fix:** Add product images in Shopify admin — can reuse the hero image, coach photo, or create branded package graphics.

---

### 4. Navigation "Coaching" Link Points to Old Page
**Severity:** HIGH
**Location:** Main navigation bar → "Coaching" link

The nav link goes to `/pages/coaching` (the old coaching page) instead of `/pages/coaching2`. The old page is still live with completely different content, design, and pricing structure.

**Impact:** Users who navigate away and try to return via the nav bar end up on a different, outdated coaching page. Confusing and undermines the professional feel.

**Fix:** Update the Shopify navigation menu to point "Coaching" to `/pages/coaching2`. Consider whether to unpublish or redirect the old `/pages/coaching` page.

---

### 5. "Boka gratis konsultation nu" Is Just a Mailto Link
**Severity:** HIGH
**Location:** Bottom CTA section (#boka)

The primary conversion CTA at the bottom opens the user's email client with `mailto:coaching@artblendart.com`. This is a dead end for many users — especially on mobile where email apps may not be configured, or desktop users who use webmail.

**Impact:** High-intent users ready to book have friction instead of a smooth booking experience.

**Fix suggestions:**
- Integrate a booking tool (Calendly, Cal.com, Tidycal, or Shopify Bookings app)
- At minimum, add a contact form as fallback
- If keeping mailto, add the email address as visible text so users can copy it

---

## Major Issues (L&F / Polish)

### 6. All Three Modal "Läs mer" Popups Have Placeholder "BILD" Image
**Severity:** MAJOR
**Location:** Package cards → "Läs mer →" button → modal image area

All three modals display a lavender gradient box with the text "BILD" (Swedish for "image") instead of an actual image. The modal content/copy is otherwise complete and well-written.

**Impact:** Looks unfinished. The modals are the main way users learn about packages before committing.

**Fix:** Replace "BILD" placeholders with actual images — coaching session photos, art supplies, creative process imagery, etc.

---

### 7. Page Title Shows "Coaching2" in Browser Tab
**Severity:** MAJOR
**Location:** `<title>` tag

The browser tab reads **"Coaching2 – ArtBlendArt"** — the "2" is an internal/dev artifact that should not be customer-facing.

**Impact:** Looks unprofessional. Also affects SEO and social sharing (Open Graph).

**Fix:** Update the Shopify page title to "Kreativ Coaching" or "Coaching" (without the "2").

---

### 8. Product Pages Have Quantity Selector
**Severity:** MODERATE
**Location:** All three product pages

Each product page has a quantity selector (- 1 +) which makes no sense for a coaching package. A customer should not be able to add 5x "Kickstart Coaching" to their cart.

**Impact:** Confusing for a service product. Could lead to accidental multiple purchases.

**Fix:** Set max quantity to 1 in Shopify product settings, or hide the quantity selector via theme customization.

---

### 9. Product Pages Have No Way Back to Coaching2
**Severity:** MODERATE
**Location:** All three product pages

After clicking "Välj [package]" and landing on the product page, there is no breadcrumb, "back to coaching" link, or contextual navigation. The only way back is the browser back button or the "Coaching" nav link (which goes to the wrong page — see issue #4).

**Impact:** Dead-end experience. Users who aren't ready to buy have no guided path back.

**Fix:** Add breadcrumbs or a "← Tillbaka till coaching" link on product pages.

---

### 10. Footer & Announcement Bar Language Mismatch
**Severity:** MODERATE
**Location:** Announcement bar, footer newsletter heading, footer labels

The coaching2 page is entirely in Swedish, but several site-wide elements are in English:
- Announcement bar: "Unique designs - Buy Original Works of Art and Printed media"
- Footer newsletter: "Subscribe to our newsletter!"
- Footer labels: "Country/region", "Payment methods"
- Policy links: "Refund policy", "Privacy policy", "Terms of service", etc.

**Impact:** Breaks the Swedish-language immersion. Feels like an English store with a Swedish page bolted on.

**Fix:** Translate the Shopify theme strings (announcement bar, footer, policies) to Swedish in the theme language settings.

---

### 11. Stray Checkmark Characters in Accessibility Tree
**Severity:** MODERATE
**Location:** Packages section, after the card grid

The accessibility snapshot reveals stray text nodes: `" " ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ " " ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓` appearing as direct text children of the packages section wrapper.

These appear to be checkmark characters from the hidden modal content leaking into the accessibility tree even when modals are `display: none`.

**Impact:** Screen readers will read these stray characters. Hurts accessibility compliance.

**Fix:** Ensure modal content is fully hidden from the accessibility tree when not visible (use `aria-hidden="true"` or render modals only when opened).

---

### 12. CTA Section Content Clipped on Mobile
**Severity:** MODERATE
**Location:** Bottom CTA section (#boka) on mobile viewport (375px)

The CTA section has `overflow: hidden` and its scrollHeight (532px) exceeds its clientHeight (355px) on desktop, suggesting content may be cut off. On mobile, this section's content could be significantly clipped.

**Impact:** The booking CTA — the most important conversion element — may be partially hidden on mobile devices.

**Fix:** Remove or adjust the `overflow: hidden` on the `.c2-cta` section, or increase its min-height to accommodate content at all breakpoints.

---

## Minor Issues (Polish / Nice-to-Have)

### 13. Old Coaching Page Still Live
**Severity:** LOW
**Location:** `/pages/coaching`

The original coaching page remains published with different content, different persona descriptions, different pricing model, and no package cards. Having two competing coaching pages live creates confusion if anyone finds the old URL via search or bookmarks.

**Fix:** Either redirect `/pages/coaching` to `/pages/coaching2`, or unpublish it once coaching2 is ready.

---

### 14. No Testimonial Source Diversity
**Severity:** LOW
**Location:** Quote section between "Känner du igen dig?" and "Om mig"

There is only one testimonial (from "Kim"). For a coaching service, multiple testimonials build more trust.

**Fix:** Add 2-3 more testimonials if available, or consider adding a rotating carousel.

---

### 15. "Idé till verklighet" Card Description Has Extra Quotation Marks
**Severity:** LOW
**Location:** Package cards section, middle card

The "Idé till verklighet" card description is wrapped in quotation marks in the accessibility tree rendering, which differs from the other two cards. While this may be intentional styling (the text starts with a question), it's inconsistent with the other cards.

**Fix:** Verify and ensure consistent formatting across all three card descriptions.

---

## Workflow Flow Analysis

### Happy Path: Landing → Package Selection → Purchase

| Step | Status | Notes |
|------|--------|-------|
| 1. Land on coaching2 page | OK | Page loads, hero is compelling |
| 2. Read about personas | OK | Good copy, relatable |
| 3. Read about coach | OK | Strong credibility section |
| 4. View packages | OK | Clear comparison layout |
| 5. Click "Läs mer" for details | PARTIAL | Modal opens but has placeholder image |
| 6. Click "Välj [package]" | BROKEN | Product page shows wrong content |
| 7. Review product & price | BROKEN | Currency mismatch, wrong description |
| 8. Add to cart | RISKY | Quantity selector inappropriate |
| 9. Cart page | OK-ISH | Shows product with image, but English-only, quantity still editable |
| 10. Checkout | OK | TESTFREE100 discount works, total €0.00, form functional |
| 11. Review order | OK | Shows email + order summary, but no billing address shown |
| 12. Thank you page | PARTIAL | Order confirmed, but no post-purchase guidance |
| 13. Return to coaching page | BROKEN | Nav links to old page, "Continue shopping" goes to store home |

### Alternative Path: Free Consultation Booking

| Step | Status | Notes |
|------|--------|-------|
| 1. Scroll to bottom CTA | OK | Clear messaging |
| 2. Click "Boka gratis konsultation" | POOR | Opens mailto — not a booking system |
| 3. Compose email | FRICTION | Requires configured email client |
| 4. Receive confirmation | UNKNOWN | No automated response system |

---

## Checkout & Post-Purchase Flow Issues (from live test order #XJJ7N5ZGT)

### 16. Entire Checkout Flow Is in English
**Severity:** MODERATE
**Location:** Cart page, checkout, review, thank-you page

Every label in the purchase flow is English: "Your cart", "Check out", "Contact", "Payment", "Billing address", "Review order", "Complete order", "Thank you, Test!", "Your order is confirmed", "Continue shopping".

The coaching2 landing page is entirely in Swedish, creating a jarring language switch at the moment of purchase.

**Fix:** Configure Shopify checkout language to Swedish in Settings > Languages.

### 17. Cart Page Title Is English
**Severity:** LOW
**Location:** Browser tab on cart page

"Your Shopping Cart – ArtBlendArt" — should be Swedish to match the coaching flow.

### 18. Thank-You Page Has No Post-Purchase Next Steps
**Severity:** MODERATE (downgraded — the email DOES have next steps, see #21)
**Location:** Thank-you page (web)

After purchasing, the customer sees a generic "Your order is confirmed" + "Continue shopping" button on the web page. No coaching-specific guidance. However, the **confirmation email** does include a custom Swedish CTA section (see #21).

**Fix:** Add a coaching-specific next-steps section to the web thank-you page as well, mirroring the email CTA.

### 19. "Continue Shopping" Button Goes to Store Home, Not Coaching
**Severity:** LOW
**Location:** Thank-you page

The "Continue shopping" button goes to the general store homepage, not back to the coaching page. For a coaching customer, this is irrelevant.

**Fix:** Consider replacing or supplementing with a coaching-specific CTA.

### 20. Shop Pay Verification Popup Interrupts Flow
**Severity:** MODERATE
**Location:** Checkout page, after entering email

When filling in the email, a Shop Pay "Confirm it's you" popup appeared requesting a phone verification code. This interrupts the checkout flow for users who have previously used Shop Pay.

**Impact:** May confuse users who don't understand Shop Pay or don't have access to the phone number on file.

**Note:** This is Shopify platform behavior, not fully controllable, but worth being aware of.

### 21. Order Confirmation Email — Mixed English/Swedish
**Severity:** MODERATE
**Location:** Order confirmation email (Order #1010)

The email is a **mix of English and Swedish**:

**English (Shopify default template):**
- "Thank you for your purchase!"
- "View your order" button
- "or Visit our store"
- "Order summary"
- "Customer information", "Billing address"
- Footer: "If you have any questions, reply to this email or contact us at contact@artblendart.com"

**Swedish (custom coaching section):**
- "Nästa steg: Boka ditt samtal"
- "Tack för ditt köp! Klicka på knappen nedan för att boka ditt första coachingsamtal."
- "Boka ditt samtal nu" button (purple)

**Other observations:**
- No ArtBlendArt logo — just plain text "ArtBlendArt" in the header
- The "Boka ditt samtal nu" CTA is good but should be verified to link to an actual booking page
- Sender address is `store+73263055112@t.shopifyemail.com` — not a branded sender
- "Powered by Shopify" visible at bottom
- Currency shows EUR (€0,00) — consistent with checkout but inconsistent with landing page (SEK)

**What works well:**
- The custom "Nästa steg: Boka ditt samtal" section is excellent — it gives the customer a clear next action
- Product image is included in the order summary
- Discount code and savings are clearly shown

**Fix suggestions:**
- Translate all English template strings to Swedish (Shopify Settings > Notifications > Order confirmation)
- Add ArtBlendArt logo to email header
- Consider using a branded sender domain (e.g., order@artblendart.com)
- Verify the "Boka ditt samtal nu" button actually links to a working booking page
- Remove or rebrand "Powered by Shopify" footer

---

## Prioritized Action Plan

### Phase 1 — Fix Broken Flows (Do First)
1. Fix all three product descriptions in Shopify admin
2. Resolve currency mismatch (SEK vs EUR)
3. Update nav "Coaching" link to point to coaching2
4. Update page title from "Coaching2" to "Kreativ Coaching"

### Phase 2 — Complete Unfinished Elements
5. Replace "BILD" placeholders in all three modals with real images
6. Add product images to all three Shopify product pages
7. Fix stray checkmark accessibility issue
8. Fix CTA section overflow on mobile

### Phase 3 — Improve UX & Post-Purchase
9. Add a real booking system for free consultations (bottom CTA)
10. Add "back to coaching" navigation on product pages
11. Remove/limit quantity selector on service products
12. Verify "Boka ditt samtal nu" email button links to a working booking page
13. Add post-purchase next-steps to the web thank-you page (mirror the email CTA)

### Phase 4 — Language & Branding Consistency
14. Translate checkout flow to Swedish (Shopify Settings > Languages)
15. Translate order confirmation email template strings to Swedish
16. Translate footer/announcement bar to Swedish
17. Add ArtBlendArt logo to order confirmation email
18. Consider branded sender domain for emails

### Phase 5 — Polish
19. Redirect or unpublish old `/pages/coaching`
20. Add more testimonials
21. Review and standardize card description formatting

---

*This review was conducted via Playwright browser automation on 2026-04-07, testing desktop (1280x800) and mobile (375x812) viewports. Full purchase flow tested with TESTFREE100 discount code — test order #XJJ7N5ZGT placed to linus.nikander@lnc.no.*
