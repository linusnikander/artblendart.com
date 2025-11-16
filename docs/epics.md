# Epic: Form Handling & Appointment Booking

**Project:** artblendart.com
**Date:** 2025-11-16
**Epic Slug:** `forms-booking`
**Story Count:** 4
**Total Points:** 11

---

## Epic Goal

Enable coaching inquiry and consultation booking directly through the website by integrating Shopify-native form and appointment booking solutions. This eliminates friction in the client acquisition process by allowing potential clients to submit inquiries and book initial consultations without external communication channels.

**Value:** Streamlined client onboarding, reduced manual admin overhead, automated email notifications, and improved conversion rates for coaching services.

---

## Epic Scope

### In Scope

**Form Handling:**
- Research and select best Shopify form solution (native or app-based)
- Implement contact/inquiry form for coaching section
- Store form submissions in Shopify (metaobjects, no separate database)
- Automated email notifications to owner/recipients
- Customizable styling matching existing design system
- Spam protection (reCAPTCHA)
- Responsive design (mobile, tablet, desktop)

**Appointment Booking:**
- Research and select best Shopify booking app (Calendly-alternative)
- Owner availability management through Shopify admin
- Client booking interface with available slot selection
- Custom intake questions for coaching context
- Google Calendar integration (two-way sync)
- Automated confirmation emails (customer and owner)
- Timezone handling
- Buffer time enforcement between bookings

**Implementation:**
- Shopify theme integration (`coaching-contact.liquid`, `coaching-booking.liquid`)
- Next.js mockup updates for design validation
- Testing across devices and browsers
- Documentation updates

### Out of Scope

- Multi-language support (future enhancement)
- Payment collection at booking time
- CRM integration beyond email
- Advanced analytics/reporting
- Recurring appointment scheduling
- Multiple service types
- Forms/booking on non-coaching pages
- Custom-built solutions (using established Shopify apps only)

---

## Epic Success Criteria

**Form Handling Success:**
- ✅ Form live on coaching contact page (Shopify theme)
- ✅ All required fields (name, email, phone, inquiry type, message) present and validated
- ✅ Email notifications working (100% delivery rate to owner)
- ✅ Form data stored in Shopify admin (accessible via metaobjects)
- ✅ Form styling matches existing design (white, gray-700, gray-50 color scheme)
- ✅ Responsive on mobile, tablet, desktop
- ✅ reCAPTCHA spam protection active and functioning

**Booking Success:**
- ✅ Booking calendar live on coaching page (Shopify theme)
- ✅ Owner availability schedule configurable and visible to clients
- ✅ Google Calendar two-way sync working (100% accuracy)
- ✅ Custom intake questions included in booking form
- ✅ Confirmation emails sent to customer and owner (100% delivery)
- ✅ Booking interface matches existing design
- ✅ Timezone handling correct for all users
- ✅ 15-minute buffer time enforced between bookings
- ✅ Mobile booking experience optimized

**Overall Success:**
- ✅ Form submission rate: Target 1-5 per week initially
- ✅ Booking conversion: 50%+ of form submitters book consultation
- ✅ Zero deployment rollbacks required
- ✅ Documentation updated and accurate

---

## Dependencies

**External:**
- Shopify store access (82e997-6e.myshopify.com)
- Shopify app marketplace access
- Google Calendar account for calendar integration
- Owner email account for notifications

**Technical:**
- Shopify CLI authenticated
- Git repository access
- Next.js development environment working
- Node.js 20.x installed

**Prerequisites:**
- None (stories are sequential and self-contained)

---

## Story Map

```
Epic: Form Handling & Appointment Booking (11 points)

├── Story 1.1: Form Handling Research & Selection (2 points)
│   Dependencies: None
│   Duration: 1-2 hours
│   Deliverable: Selected form app installed and configured
│
├── Story 1.2: Contact Form Implementation (3 points)
│   Dependencies: Story 1.1 (form app selected)
│   Duration: 3-4 hours
│   Deliverable: Working contact form on coaching page
│
├── Story 1.3: Booking Calendar Research & Selection (2 points)
│   Dependencies: None (can run parallel to 1.1-1.2)
│   Duration: 1-2 hours
│   Deliverable: Selected booking app installed and configured
│
└── Story 1.4: Booking Calendar Implementation (4 points)
    Dependencies: Story 1.3 (booking app selected)
    Duration: 4-5 hours
    Deliverable: Working booking calendar on coaching page
```

---

## Story Summaries

### Story 1.1: Form Handling Research & Selection (2 points)
Research top Shopify form solutions (Shopify Forms native, Powerful Contact Form Builder, Custom Form Builder by Websyms). Evaluate each based on features, storage options, email capabilities, customization, and pricing. Select best solution, install app, create test form, and verify functionality.

### Story 1.2: Contact Form Implementation (3 points)
Configure selected form app with coaching inquiry fields (name, email, phone, inquiry type, message). Integrate form into `coaching-contact.liquid` section with styling matching existing design. Create Next.js mockup. Test form submission, email delivery, and data storage. Deploy to Shopify live theme.

### Story 1.3: Booking Calendar Research & Selection (2 points)
Research top Shopify booking solutions (Cowlendar, Easy Appointment Booking, BookThatApp). Evaluate based on calendar integration, customization, mobile UX, and pricing. Select best solution, install app, create test service, and verify booking flow.

### Story 1.4: Booking Calendar Implementation (4 points)
Configure selected booking app for "Initial Coaching Consultation" service. Set up owner availability, custom intake questions, Google Calendar sync, and email templates. Create `coaching-booking.liquid` section and integrate widget. Update coaching main page with booking CTA. Test end-to-end booking flow. Deploy to Shopify live theme.

---

## Implementation Sequence

**Recommended Order:**

1. **Story 1.1** → Research and select form solution
   - Can start immediately
   - No dependencies

2. **Story 1.2** → Implement contact form
   - Requires Story 1.1 complete (form app selected)
   - Cannot proceed without app selection

3. **Story 1.3** → Research and select booking solution
   - Can run in parallel with Stories 1.1-1.2 if desired
   - No dependencies

4. **Story 1.4** → Implement booking calendar
   - Requires Story 1.3 complete (booking app selected)
   - Independent of form implementation (Stories 1.1-1.2)

**Alternative Sequence (Parallel):**
- Stories 1.1 and 1.3 can be done concurrently (both research stories)
- Stories 1.2 and 1.4 can be done concurrently after their respective research stories complete

**Total Estimated Timeline:** 2-3 days (assuming sequential execution, single developer)

---

## Total Points & Timeline

**Total Story Points:** 11 points

**Estimated Timeline:**
- Sequential execution: 2-3 days (assuming ~5-6 points per day)
- Parallel execution: 1.5-2 days (form and booking tracks simultaneously)

**Breakdown:**
- Research: 4 points (1 day)
- Implementation: 7 points (1.5-2 days)

---

**END OF EPIC**