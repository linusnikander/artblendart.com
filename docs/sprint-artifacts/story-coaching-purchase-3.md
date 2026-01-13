# User Story 2.3: Configure Checkout & Order Emails

**Story ID:** 2.3
**Epic:** Coaching Product Purchase Flow (`coaching-purchase`)
**Status:** Draft
**Story Points:** 3
**Estimated Time:** 2-3 hours

---

## User Story

**As a** customer who purchased a coaching package
**I want** to receive clear instructions on how to book my first session
**So that** I know exactly what to do next after paying

---

## Acceptance Criteria

**AC #1:** Klarna payment option available at checkout
- Klarna appears as payment option
- Swedish customers can use Klarna for installments
- Merchant receives full payment upfront (Klarna handles customer installments)

**AC #2:** Order confirmation email contains booking instructions
- Clear "Book Your Session" heading
- YCBM booking link prominently displayed
- Instructions specific to package purchased (number of sessions)
- Contact email for questions

**AC #3:** Email styling matches brand
- Professional appearance
- ArtBlendArt branding/logo
- Easy to read on mobile

**AC #4:** Test purchase triggers correct email
- Complete test purchase
- Verify email received within 5 minutes
- Verify YCBM link is clickable and works

---

## Tasks/Subtasks

- [ ] Verify Klarna prerequisites (AC: #1)
  - [ ] Confirm Shopify Payments is enabled as payment gateway
  - [ ] Confirm store base currency is SEK
  - [ ] Navigate to Settings → Checkout and verify:
    - [ ] Customer contact method = "Email" (required for Klarna)
    - [ ] Full name = "Require first and last name"
    - [ ] Shipping address phone number = "Required"

- [ ] Enable Klarna in Shopify Payments (AC: #1)
  - [ ] Navigate to Settings → Payments → Shopify Payments → Manage
  - [ ] In "Payment methods" section, find Klarna
  - [ ] Toggle Klarna ON (if not already active)
  - [ ] Accept Klarna terms and conditions if prompted
  - [ ] Note: If Klarna not showing, business may need Klarna review (usually automatic)
  - [ ] Fallback: If Klarna unavailable, document why and proceed without

- [ ] Create YCBM booking page first (coordinate with Story 2.4)
  - [ ] Get the YCBM booking URL for use in email

- [ ] Customize Order Confirmation Email (AC: #2, #3)
  - [ ] Navigate to Settings → Notifications → Order confirmation
  - [ ] Add custom section after order details:
    ```
    ## Nästa steg: Boka din första session

    Tack för ditt köp! Nu är det dags att boka din första coachingsession.

    👉 [Boka din session här](YCBM_LINK)

    Ditt paket inkluderar:
    - {{ line_item.title }} (se detaljer nedan)

    Har du frågor? Kontakta oss på coaching@artblendart.com
    ```
  - [ ] Use Liquid conditionals if different packages need different text
  - [ ] Preview email in Shopify admin
  - [ ] Send test email to verify appearance

- [ ] Test Complete Purchase Flow (AC: #4)
  - [ ] Create test order (use Shopify's test payment gateway or Bogus Gateway)
  - [ ] Verify order confirmation email received
  - [ ] Click YCBM link and verify it works
  - [ ] Check email on mobile device

- [ ] Document email template changes
  - [ ] Note what was changed for future reference
  - [ ] Save backup of original template

---

## Technical Summary

**Klarna Integration Requirements (Sweden):**

| Requirement | Details |
|-------------|---------|
| Shopify Payments | Must be enabled as primary gateway |
| Store currency | SEK (base currency) |
| Checkout: Contact | Email only (not phone) |
| Checkout: Name | Require first and last name |
| Checkout: Phone | Required for shipping address |
| Business verification | Klarna may review business (usually automatic) |

**If Klarna not available:**
- Verify all checkout settings above
- Check if Klarna is reviewing business (wait 1-2 days)
- Alternative: Shop Pay Installments or proceed without installment option

**Email Template Location:**
- Shopify Admin → Settings → Notifications → Customer notifications → Order confirmation
- Uses Liquid templating language
- Can access order data: `{{ order.name }}`, `{{ line_item.title }}`, etc.

**YCBM Link Placeholder:**
Will be replaced with actual URL from Story 2.4. Example format:
`https://artblendart.youcanbook.me/`

**Package-Specific Content:**
Use Liquid conditionals to show different content based on product:
```liquid
{% for line_item in order.line_items %}
  {% if line_item.title contains 'Kickstart' %}
    Ditt Kickstart-paket inkluderar 1 coachingsession...
  {% elsif line_item.title contains 'Idé till verklighet' %}
    Ditt paket inkluderar 3 coachingsessioner...
  {% endif %}
{% endfor %}
```

---

## Dependencies

- **Story 2.1:** Products must exist to test order emails
- **Story 2.4:** YCBM booking link needed for email content
- Shopify Payments access
- Email notification editing permissions

---

## Key Code References

**Shopify Admin Locations:**
- Settings → Payments → Shopify Payments (for Klarna)
- Settings → Notifications → Order confirmation (for email)

**Liquid Variables Available:**
- `{{ order.name }}` - Order number
- `{{ order.email }}` - Customer email
- `{{ line_item.title }}` - Product name
- `{{ line_item.price | money }}` - Price

---

**END OF STORY 2.3**
