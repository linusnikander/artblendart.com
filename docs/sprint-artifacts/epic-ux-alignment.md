# Epic 3: Purchase Flow UX Alignment

**Epic ID:** `ux-alignment`
**Status:** Draft
**Story Points:** 13 (estimated)
**Stories:** 5

---

## Epic Summary

Align the purchase flow UI/UX with the reference design at `https://pdf-shepherd.lovable.app`. This epic maximizes visual consistency using what IS customizable on standard Shopify plans, plus creative workarounds for checkout limitations.

**Reference Screenshots:** `.playwright-mcp/reference-*.png`
**Current Screenshots:** `.playwright-mcp/workflow-*.png`

---

## Strategy: Maximize Impact Within Constraints

Since Shopify Plus is not an option, our strategy focuses on:

1. **Make pre-checkout exceptional** - Product page and cart are fully customizable
2. **Brand the checkout** - Apply all available branding options
3. **Enhance post-checkout** - Custom order confirmation emails and thank-you page scripts
4. **Smooth transitions** - Consistent colors/fonts create perceived continuity

---

## Control Matrix

| Component | Control | Strategy |
|-----------|---------|----------|
| Product Page | **FULL** | Complete redesign with reference styling |
| Cart Drawer | **FULL** | Rich drawer with "What's included" |
| Checkout Form | **Partial** | Brand colors, logo, background image |
| Order Confirmation Email | **FULL** | Custom HTML email template |
| Thank You Page | **Partial** | Additional scripts section |
| YCBM Booking | **Partial** | Logo, color, text customization |

---

## Stories

### Story 3.1: Redesign Coaching Product Page Template
**Points:** 5 | **Priority:** High | **Control:** Full

**User Story:**
As a customer browsing coaching products, I want an engaging product page that clearly shows what's included and highlights the wellness benefit eligibility.

**Reference:** `.playwright-mcp/reference-08-product-page.png`

**Implementation:**
- [ ] Create custom product hero section with:
  - Purple gradient background (#1a1a2e to #2d2d4a)
  - Centered sparkle icon (SVG or emoji)
  - "Kreativ Coaching" label
- [ ] Add "FRISKVARDSBIDRAG" badge (gold #fbbf24 on purple)
- [ ] Style "Add to cart" button: purple gradient (#7c3aed → #6d28d9), white text, arrow icon
- [ ] Create styled feature list with purple checkmarks
- [ ] Add trust badges row: "Friskvardsbidrag godkand", "Ingen bindning", "Flexibla tider"
- [ ] Apply Sora/Manrope typography from style guide

**Files:**
- `templates/product.coaching.json` (new)
- `sections/product-coaching-hero.liquid` (new)
- `sections/product-coaching-info.liquid` (new)

---

### Story 3.2: Enhance Cart Drawer with Product Details
**Points:** 3 | **Priority:** High | **Control:** Full

**User Story:**
As a customer adding a coaching package to cart, I want to see product details and what's included before proceeding to checkout.

**Reference:** `.playwright-mcp/reference-09-cart-dialog.png`

**Implementation:**
- [ ] Convert to slide-out drawer (right side, 400px width)
- [ ] Add header: checkmark icon + "Item added to your cart"
- [ ] Show product card with:
  - Sparkle icon thumbnail
  - Product name + price in purple
  - "Tax included" note
  - Quantity selector
- [ ] Add "What's included" section with checkmark list
- [ ] Style buttons:
  - "Check out" - purple gradient, full width
  - "Continue shopping" - outline/text style
- [ ] Add backdrop overlay when open

**Files:**
- `snippets/cart-drawer.liquid` (modify or replace)
- `assets/cart-drawer.css` (new)
- `assets/cart-drawer.js` (new)

---

### Story 3.3: Apply Shopify Checkout Branding
**Points:** 1 | **Priority:** Medium | **Control:** Partial

**User Story:**
As a customer in checkout, I want the experience to feel consistent with ArtBlendArt branding.

**Available Settings (Shopify Admin → Settings → Checkout):**

**Logo & Header:**
- [ ] Upload ArtBlendArt logo (recommend: text logo or palette icon, max 400x200px)
- [ ] Position: Left aligned
- [ ] Header background: `#ffffff`

**Colors:**
- [ ] Accent color: `#7c3aed`
- [ ] Button color: `#7c3aed`
- [ ] Error color: `#ef4444`
- [ ] Link color: `#7c3aed`

**Form Fields:**
- [ ] Border color: `#e5e5e5`
- [ ] Background: `#ffffff`

**Background:**
- [ ] Main area: `#ffffff`
- [ ] Order summary: `#f8f5ff` (light purple tint)

**Typography:**
- [ ] Headings: System sans-serif (closest to Sora)
- [ ] Body: System sans-serif (closest to Manrope)

**Document settings for reproducibility in deployment guide.**

---

### Story 3.4: Custom Order Confirmation Email
**Points:** 3 | **Priority:** High | **Control:** Full

**User Story:**
As a customer who just purchased, I want a beautifully branded confirmation email that reinforces my decision and clearly guides me to book my session.

**This is where we can add the "wow" factor that checkout lacks!**

**Implementation:**
- [ ] Design HTML email template matching brand:
  - Purple header with ArtBlendArt logo
  - "Tack for din bestallning!" heading (Sora-style)
  - Order confirmation number prominently displayed
  - Product card showing what was purchased
  - "What's included" checklist with checkmarks
  - **Prominent CTA button**: "Boka ditt samtal nu" → YCBM link
  - Trust badges at bottom
  - Footer with contact info

- [ ] Configure in Shopify Admin → Settings → Notifications → Order confirmation
- [ ] Test with real order

**Email Structure:**
```
┌─────────────────────────────────────┐
│  [Logo]              ArtBlendArt    │  <- Purple header
├─────────────────────────────────────┤
│                                     │
│   ✓ Tack for din bestallning!      │
│   Order #12345                      │
│                                     │
│   ┌─────────────────────────────┐   │
│   │ ✨ Kickstart Coaching       │   │
│   │    €2,500.00                │   │
│   │                             │   │
│   │ Paketet inkluderar:         │   │
│   │ ✓ 1× coaching 60 min        │   │
│   │ ✓ Skriftlig sammanfattning  │   │
│   │ ✓ Rekommendation nasta steg │   │
│   └─────────────────────────────┘   │
│                                     │
│   ┌─────────────────────────────┐   │
│   │   BOKA DITT SAMTAL NU  →    │   │  <- Purple button
│   └─────────────────────────────┘   │
│                                     │
│   Nasta steg:                       │
│   1. Klicka pa knappen ovan         │
│   2. Valj en tid som passar dig     │
│   3. Vi ses pa video!               │
│                                     │
├─────────────────────────────────────┤
│  Questions? hello@artblendart.com   │
└─────────────────────────────────────┘
```

---

### Story 3.5: Thank You Page Enhancement
**Points:** 1 | **Priority:** Medium | **Control:** Partial

**User Story:**
As a customer on the thank you page, I want clear next steps and a direct link to book my session.

**Implementation Options:**

**Option A: Additional Scripts (Available on all plans)**
- [ ] Add custom HTML/CSS via Settings → Checkout → Order status page → Additional scripts
- [ ] Insert styled "Next Steps" box with booking CTA
- [ ] Add confetti/celebration animation (optional)

```liquid
{% if first_time_accessed %}
<style>
  .custom-next-steps {
    background: linear-gradient(135deg, #f8f5ff 0%, #fff 100%);
    border: 2px solid #7c3aed;
    border-radius: 1rem;
    padding: 1.5rem;
    margin: 1.5rem 0;
    text-align: center;
  }
  .custom-next-steps h3 {
    color: #1a1a2e;
    margin-bottom: 1rem;
  }
  .custom-next-steps .btn {
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: white;
    padding: 1rem 2rem;
    border-radius: 9999px;
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
  }
</style>
<div class="custom-next-steps">
  <h3>🎉 Nasta steg: Boka ditt samtal!</h3>
  <p>Klicka nedan for att valja en tid som passar dig.</p>
  <a href="https://74929.youcanbook.me/" class="btn">Boka nu →</a>
</div>
{% endif %}
```

**Option B: Thank You Page App (if more control needed)**
- Consider apps like "ReConvert" or "Thank You Page Customizer"
- Most have free tiers with basic customization

---

### Story 3.6: YCBM Booking Page Branding
**Points:** 1 | **Priority:** Low | **Control:** Partial

**User Story:**
As a customer booking my session, I want the booking page to feel connected to ArtBlendArt.

**Free Tier Customizations:**
- [ ] Upload logo: ArtBlendArt palette icon or text
- [ ] Set primary color: `#7c3aed` (or closest)
- [ ] Booking page title: "Boka ditt samtal"
- [ ] Description: "Valj en tid som passar dig for ditt coachingsamtal med Therese."
- [ ] Duration display: "1 timme"
- [ ] Timezone: Europe/Stockholm (Swedish display)

**Configuration Path:** YCBM Dashboard → Booking Page → Appearance

---

## Priority Order

1. **Story 3.1** - Product Page (highest visual impact, full control)
2. **Story 3.4** - Order Email (full control, reinforces brand post-purchase)
3. **Story 3.2** - Cart Drawer (full control, improves conversion)
4. **Story 3.3** - Checkout Branding (quick win, apply settings)
5. **Story 3.5** - Thank You Page (nice enhancement)
6. **Story 3.6** - YCBM (lowest priority, limited impact)

---

## Success Criteria

1. Product page matches reference with hero, badges, and styled features
2. Cart drawer shows "What's included" with branded styling
3. Checkout displays ArtBlendArt colors and logo
4. Order confirmation email is beautifully branded with booking CTA
5. Thank you page has custom "next steps" section
6. YCBM has logo and brand color applied
7. Entire flow feels cohesive despite platform constraints

---

**Epic File:** `docs/sprint-artifacts/epic-ux-alignment.md`
