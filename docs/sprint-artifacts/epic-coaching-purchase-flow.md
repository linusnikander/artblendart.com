# Epic: Coaching Product Purchase Flow

**Project:** artblendart.com
**Date:** 2026-01-11
**Epic Slug:** `coaching-purchase`
**Status:** Draft
**Story Count:** 5
**Total Points:** 13

---

## Epic Goal

Enable customers to purchase coaching packages directly through the Shopify storefront, with automated post-purchase booking flow via YouCanBook.me (YCBM). This creates a seamless journey from package selection to session scheduling.

**Value:** Convert website visitors to paying customers with minimal friction. Leverage native Shopify checkout (payment processing, order management, future gift cards) while using YCBM for Swedish-language booking experience.

---

## Customer Journey (Target State)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        COACHING PURCHASE FLOW                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  1. SELECT PACKAGE          Customer clicks "Köp [Paket] nu"           │
│         ↓                   on coaching2-products section               │
│                                                                         │
│  2. SHOPIFY CHECKOUT        Standard Shopify checkout                   │
│         ↓                   - Contact info                              │
│                             - Payment (Klarna available for splitting)  │
│                                                                         │
│  3. ORDER CONFIRMATION      Shopify order confirmation email            │
│         ↓                   + Custom "Next Steps" with YCBM link        │
│                                                                         │
│  4. BOOK SESSION           Customer clicks YCBM link                    │
│         ↓                   - Selects available time                    │
│                             - Booking confirmation email                │
│                                                                         │
│  5. SESSION                 Video session via Teams                     │
│         ↓                                                               │
│                                                                         │
│  6. POST-SESSION            Manual: Summary + tasks sent via email      │
│         ↓                   Manual: Next session booking link           │
│                                                                         │
│  7. REPEAT or END           If more sessions → back to step 4           │
│                             If last session → feedback request          │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

Optional pre-step: Visitors can book a free 15-minute intro consultation via YCBM before purchasing; it is separate and voluntary.

---

## Key Decisions (From Discovery)

| Decision | Choice | Rationale |
|----------|--------|-----------|
| **Product Catalog** | Create 3 Shopify products | Enable native checkout, order management, future gift cards |
| **Product Visibility** | Unlisted (URL-only access) | Products not in navigation/search; only accessible from coaching page links |
| **Payment** | Full upfront + Klarna | No extra apps needed; Klarna handles installments |
| **Booking System** | YouCanBook.me (YCBM) | Swedish language support, free tier, already evaluated |
| **Integration** | Email-based handoff | Simple, reliable; post-purchase email includes YCBM link |
| **Session Tracking** | Manual (v1) | Coach tracks via spreadsheet/notes; automation is v2 |
| **Intro Consultation** | Separate free product (optional) | Not bundled with packages; booked separately |

---

## Epic Scope

### In Scope

**Shopify Products:**
- Create 3 coaching products in Shopify admin
- Configure as digital/service products (no shipping)
- Set pricing: 5,250 kr (3-month packages), 2,500 kr (Kickstart)
- Product descriptions matching current card content

**Storefront Integration:**
- Update coaching2-products.liquid CTA buttons to link to actual products
- Ensure smooth add-to-cart → checkout flow
- Mobile-optimized purchase experience

**Checkout Configuration:**
- Enable/verify Klarna for payment splitting
- Configure order confirmation email template
- Add "Book Your Session" CTA with YCBM link in confirmation

**YCBM Setup:**
- Create booking page for coaching sessions
- Add optional free 15-minute intro consultation appointment type (separate from packages)
- Configure availability calendar
- Set up Swedish language interface
- Teams integration for video sessions
- Confirmation/reminder emails

**Post-Purchase Flow:**
- Document manual workflow for coach (session tracking, follow-ups)
- Email templates for summaries and next-session booking

### Out of Scope (v2)

- Gift card redemption flow
- Subscription/recurring billing
- Automated session tracking in Shopify
- CRM integration
- Multi-coach support
- Advanced analytics

---

## Epic Success Criteria

**Purchase Flow:**
- [ ] All 3 coaching products purchasable via Shopify checkout
- [ ] Klarna payment option available at checkout
- [ ] Order confirmation email includes clear "Book Your Session" instructions
- [ ] YCBM booking link works from email

**Booking Flow:**
- [ ] YCBM booking page accessible and functional
- [ ] Swedish language displayed correctly
- [ ] Available times reflect coach's calendar
- [ ] Booking confirmation sent to both customer and coach
- [ ] Optional 15-minute intro consultation booking available (free, separate from packages)

**Integration:**
- [ ] End-to-end test: Purchase → Email → Book → Confirmation
- [ ] Mobile experience tested on iOS and Android
- [ ] No manual steps required between purchase and booking ability

---

## Dependencies

**External:**
- Shopify store access (82e997-6e.myshopify.com)
- YouCanBook.me account (free tier)
- Google/Microsoft calendar for availability sync
- Klarna enabled in Shopify Payments

**Technical:**
- Shopify CLI authenticated
- Access to email template customization
- YCBM admin access
- Live Theme ID: `189302341896` (ArtBlendArt Custom)

**Prerequisites:**
- None (independent of existing forms-booking epic)

---

## Story Map

```
Epic: Coaching Product Purchase Flow (13 points)

├── Story 2.1: Create Shopify Products (2 points)
│   Dependencies: None
│   Deliverable: 3 coaching products in Shopify catalog
│
├── Story 2.2: Update Product Cards with Purchase Links (2 points)
│   Dependencies: Story 2.1
│   Deliverable: CTA buttons link to product pages/checkout
│
├── Story 2.3: Configure Checkout & Order Emails (3 points)
│   Dependencies: Story 2.1
│   Deliverable: Klarna enabled, confirmation email with YCBM link
│
├── Story 2.4: Set Up YCBM Booking Page (3 points)
│   Dependencies: None (can run parallel)
│   Deliverable: Functional booking page in Swedish
│
└── Story 2.5: End-to-End Testing & Documentation (3 points)
    Dependencies: Stories 2.1-2.4
    Deliverable: Tested flow, documented manual processes
```

---

## Story Summaries

### Story 2.1: Create Shopify Products (2 points)
Create 3 coaching products in Shopify admin:
- "Din kreativa plats" (5,250 kr)
- "Idé till verklighet" (5,250 kr)
- "Kickstart" (2,500 kr)

Configure as digital products with detailed descriptions matching current card content. Set inventory to "Track quantity" disabled (service, not physical).

### Story 2.2: Update Product Cards with Purchase Links (2 points)
Modify coaching2-products.liquid section to:
- Link CTA buttons to actual Shopify product pages
- Use Shopify Liquid to dynamically fetch product URLs
- Ensure "Add to Cart" or direct checkout flow works smoothly

### Story 2.3: Configure Checkout & Order Emails (3 points)
- Verify/enable Klarna in Shopify Payments settings
- Customize order confirmation email template
- Add "Book Your First Session" section with YCBM booking link
- Include package-specific instructions (number of sessions, etc.)

### Story 2.4: Set Up YCBM Booking Page (3 points)
- Create YouCanBook.me account (free tier)
- Set up booking page with Swedish language
- Configure availability from connected calendar
- Set appointment duration (60 min for sessions; optional 15-min intro consultation is separate and not part of packages)
- Enable Teams/video meeting link generation
- Configure confirmation and reminder emails

### Story 2.5: End-to-End Testing & Documentation (3 points)
- Test complete purchase → book flow on desktop and mobile
- Document manual coach workflow (session tracking spreadsheet)
- Create email templates for post-session summaries
- Write customer-facing FAQ for common questions
- Verify all success criteria met

---

## Implementation Sequence

**Recommended Order:**

1. **Story 2.1** → Create products (foundation for everything)
2. **Story 2.4** → Set up YCBM (can run parallel with 2.1)
3. **Story 2.2** → Update product cards (requires 2.1)
4. **Story 2.3** → Configure emails (requires 2.1 + 2.4 for booking link)
5. **Story 2.5** → End-to-end testing (requires all above)

**Parallelization:**
- Stories 2.1 and 2.4 can run simultaneously
- Stories 2.2 and 2.3 can run simultaneously after 2.1 completes

---

## Total Points & Timeline

**Total Story Points:** 13 points

**Estimated Timeline:**
- Sequential: 2-3 days
- Parallel: 1.5-2 days

**Breakdown:**
- Setup (2.1, 2.4): 5 points
- Integration (2.2, 2.3): 5 points
- Testing & Docs (2.5): 3 points

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Klarna not enabled | Low | Medium | Check Shopify Payments settings early |
| YCBM free tier limitations | Low | Low | Paid tier is only $10/mo if needed |
| Email deliverability | Low | Medium | Use Shopify's native email system |
| Manual session tracking errors | Medium | Low | Create simple tracking template |

---

## Future Enhancements (v2)

- **Gift Cards:** Shopify native gift cards can be redeemed for coaching products
- **Subscription Billing:** Add subscription app for monthly payment option
- **Session Tracking App:** Integrate app to track remaining sessions per customer
- **Automated Follow-ups:** Klaviyo or similar for post-session email sequences
- **Feedback Collection:** Automated survey after final session

---

**END OF EPIC**
