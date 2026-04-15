# Story 4.4: Investigation & Discovery

**Epic:** UX Alignment
**Points:** 3
**Priority:** 4 (After stories 4.1, 4.2, 4.3)
**Status:** Draft

---

## User Story

As the product owner, I want to understand how various Shopify features work so I can make informed decisions about keeping, modifying, or removing them.

---

## Investigation Tasks

| ID | Task | Status | Findings |
|----|------|--------|----------|
| INV-1 | Investigate "Follow on Shop" functionality | [x] | See findings below |
| INV-2 | Investigate newsletter signup | [x] | See findings below |
| INV-3 | Verify payment options | [x] | See findings below |
| INV-4 | Verify "More payment options" link | [x] | See findings below |
| INV-5 | Review policy pages | [x] | See findings below |

---

## Acceptance Criteria

- [ ] Each investigation item documented with findings
- [ ] Recommendations provided for each item (keep/modify/remove)
- [ ] Action items created for any follow-up work
- [ ] Playwright test confirms "More payment options" behavior

---

## Investigation Details

### INV-1: Follow on Shop
**Questions to answer:**
- What is the Shop app?
- What happens when customers follow?
- Where does this button appear? (footer, product pages, etc.)
- Is it beneficial for our business?

### INV-2: Newsletter Signup
**Questions to answer:**
- Where do signups go? (Shopify Email? Third-party?)
- Is email marketing set up?
- Are confirmation emails sent?
- GDPR compliance?

### INV-3: Payment Options
**Questions to answer:**
- Which methods are enabled in Shopify Payments?
- Are all displayed methods actually functional?
- Any fees differences between methods?
- Swish availability? (from GEN-2)

### INV-4: More Payment Options Link
**Questions to answer:**
- What should happen when clicked?
- Use Playwright to test actual behavior
- If broken, can it be fixed or should it be removed?

### INV-5: Policy Pages
**Questions to answer:**
- What content exists on each policy page?
- What content is required legally?
- What needs to be written/updated?

---

## Dependencies

- Complete stories 4.1, 4.2, 4.3 first
- Shopify admin access for settings review

---

## Notes

- Reference: `order-flow-documentation.pdf` various screens
- Feedback source: `docs/order-flow-update.md`
- Findings will inform backlog prioritization

---

## Findings (2026-04-15)

### INV-1: Follow on Shop
**What it is:** Shopify's Shop app lets customers "follow" stores to get updates, track orders, and discover products. The `<shop-follow-button>` web component renders in the footer.
**Where it appears:** Main store footer only (hidden on coaching pages via our conditional footer logic).
**Recommendation:** **Keep for main store, already hidden on coaching pages.** Low friction, free marketing channel. No action needed.

### INV-2: Newsletter Signup
**How it works:** Footer form posts to Shopify's built-in `/contact` endpoint. Email addresses are stored in Shopify Admin → Customers as "email subscribers."
**Where signups go:** Shopify's customer list. Can be used with Shopify Email (built-in) or exported to third-party tools (Mailchimp, etc.).
**GDPR:** The cookie consent banner is active. The "Email me with news and offers" checkbox at checkout is opt-in. Footer signup is explicit action.
**Recommendation:** **Keep.** Verify in Admin → Customers that subscriber emails are accumulating. Consider setting up Shopify Email for basic campaigns. **Action item:** Check if any welcome email is configured in Notifications settings.

### INV-3: Payment Options
**Active methods:**
- **Shopify Payments** — Active, accepting payments. Card rates 1.6% + 1.85 kr. Payout to SEB account in SEK.
  - Accepts: Visa, Mastercard, Amex, Apple Pay, Google Pay, Shop Pay, iDEAL, Bancontact, Maestro, Union Pay
- **Klarna** — Active (2% transaction fee + Klarna fees)
- **PayPal** — ⚠️ **Setup incomplete!** Listed but not configured. Customers may see PayPal as an option but can't complete payment.
**Swish:** Not available through Shopify Payments natively. Would need a third-party payment app.
**Recommendation:** **Fix PayPal** — either complete the setup or remove it to avoid confusing customers. **Action item:** Complete PayPal setup at Admin → Settings → Payments → PayPal, or deactivate it.

### INV-4: More Payment Options Link
**Finding:** The "More payment options" link on coaching product pages (`<a href="#" class="pcc-btn-link">`) is a **dead link** — it points to `#` and does nothing. The Shopify dynamic checkout button (`{{ form | payment_button }}`) which normally renders "Buy it now with Shop Pay" is not rendering on the coaching product template.
**Root cause:** The `product-coaching-custom.liquid` section has `{{ form | payment_button }}` outside the form tag, so Shopify can't render the dynamic payment button. The "More payment options" text link was added as a placeholder.
**Recommendation:** **Remove the dead link.** Either fix the dynamic payment button placement inside the form, or remove both the button output and the "More payment options" text. **Action item:** Remove `.pcc-btn-link` element from coaching product section.

### INV-5: Policy Pages
| Policy | Language | Content Status |
|--------|----------|----------------|
| Refund (Återbetalningspolicy) | **English** body, Swedish title | Generic Shopify template — mentions 30-day returns, physical items. **Needs rewrite for coaching/digital services.** |
| Privacy (Integritetspolicy) | **Swedish** | Recently updated (April 2026). Looks complete. |
| Terms (Användarvillkor) | **English** body, Swedish title | Generic Shopify "OVERVIEW" boilerplate. **Needs rewrite.** |
| Contact (Kontaktinformation) | — | Standard Shopify contact info page |
| Cookie preferences | — | Consent banner, functional |

**Recommendation:** 
- Privacy policy: **OK** — already in Swedish and updated
- Refund policy: **Rewrite needed** — current text is for physical goods, doesn't apply to coaching services (no "returns" for coaching sessions)
- Terms of service: **Rewrite needed** — generic English boilerplate, needs Swedish version tailored to coaching services
- **Action item:** Have Therese or a legal advisor draft Swedish refund + terms policies for coaching/digital services
