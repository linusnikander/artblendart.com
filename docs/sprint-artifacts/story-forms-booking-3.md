# User Story 1.3: Booking Calendar Research & Selection

**Story ID:** 1.3
**Epic:** Form Handling & Appointment Booking (`forms-booking`)
**Status:** Draft
**Story Points:** 2
**Estimated Time:** 1-2 hours

---

## User Story

**As a** developer
**I want** to research and select the best appointment booking solution for Shopify
**So that** coaching clients can view available time slots and book initial consultations directly through the website

---

## Acceptance Criteria

**AC #1:** At least 3 booking solutions evaluated
- Calendly (with Shopify integration apps: F2 Calendly or CalPal)
- Cowlendar (Shopify-native)
- Easy Appointment Booking (Shopify-native)
- BookThatApp (alternative)

**AC #2:** Evaluation covers required features
- Owner availability management (set weekly schedule)
- Google Calendar integration (two-way sync)
- Custom intake questions for booking form
- Email confirmations (customer and owner)
- Timezone handling
- Buffer time between bookings
- Mobile booking experience
- Pricing (free tier or affordable subscription)

**AC #3:** Selection documented with rationale
- Document pros/cons of each solution
- Compare Calendly vs Shopify-native apps
- Clear recommendation with justification
- Decision noted in tech-spec.md

**AC #4:** Selected solution installed and configured in Shopify
- Calendly account created (if selected) OR Shopify app installed
- Shopify integration app installed (F2 Calendly or CalPal if using Calendly)
- Basic configuration complete
- Test service/event type created

**AC #5:** Test booking flow successful
- Set up sample availability schedule
- Book test appointment through widget/form
- Verify confirmation emails sent (customer and owner)
- Verify calendar sync (if Google Calendar integration)
- Test mobile booking experience

---

## Tasks/Subtasks

- [ ] Review Calendly with Shopify integration (AC: #1, #2)
  - [ ] Research Calendly features and pricing (free tier available)
  - [ ] Review Calendly Shopify integration methods (inline, popup, widget)
  - [ ] Check F2 Calendly Book Appointment app in Shopify app store
  - [ ] Check CalPal: Calendly Integration app in Shopify app store
  - [ ] Evaluate customization options (colors, branding)
  - [ ] Test Calendly free account (create account, set up event type)
  - [ ] Note limitations of free tier vs paid plans

- [ ] Review Cowlendar (Shopify-native) (AC: #1, #2)
  - [ ] Install Cowlendar app from Shopify app store (trial or subscription)
  - [ ] Review features: calendar integration, custom questions, Zoom links
  - [ ] Create test service: "Initial Coaching Consultation"
  - [ ] Set up availability schedule
  - [ ] Test booking flow
  - [ ] Check pricing: $9.99/month+ (verify current pricing)
  - [ ] Review ratings: 4.9 stars, 1,766 reviews
  - [ ] Uninstall if not selected

- [ ] Review Easy Appointment Booking (AC: #1, #2)
  - [ ] Install app from Shopify app store (trial)
  - [ ] Test calendar integration (Google Calendar, Klaviyo)
  - [ ] Create test booking
  - [ ] Verify bookings sync as Shopify orders
  - [ ] Check automated reminder feature
  - [ ] Review pricing: $14.99/month+ (verify current pricing)
  - [ ] Uninstall if not selected

- [ ] Review BookThatApp (alternative if needed) (AC: #1, #2)
  - [ ] Install app (trial)
  - [ ] Test custom booking questions
  - [ ] Check email/SMS reminders
  - [ ] Verify Google Calendar/Outlook/Zoom integration
  - [ ] Review consulting/coaching features
  - [ ] Check pricing: $9.99/month+ (verify current pricing)
  - [ ] Uninstall if not selected

- [ ] Document evaluation findings (AC: #3)
  - [ ] Create comparison table:
    - Features (availability, calendar sync, custom questions, emails)
    - Pricing (free tier, monthly subscription)
    - Ease of use (setup complexity, user experience)
    - Mobile experience (booking on mobile devices)
    - Integration depth (Shopify-native vs external)
  - [ ] Note pros/cons for each solution
  - [ ] Decide: Calendly (free, proven) vs Shopify-native (tighter integration)
  - [ ] Make recommendation based on requirements and budget
  - [ ] Update tech-spec.md with decision

- [ ] Install selected booking solution (AC: #4)
  - [ ] If Calendly:
    - [ ] Create Calendly account (free tier)
    - [ ] Install F2 Calendly or CalPal app in Shopify
    - [ ] Connect Calendly account to Shopify app
  - [ ] If Shopify-native app (Cowlendar/Easy/BookThatApp):
    - [ ] Install app from Shopify app store
    - [ ] Complete initial setup wizard
    - [ ] Subscribe to plan (if required)

- [ ] Create and test "Initial Coaching Consultation" service (AC: #5)
  - [ ] Create event type/service: "Initial Coaching Consultation"
  - [ ] Set duration: 30 minutes
  - [ ] Set buffer time: 15 minutes between bookings
  - [ ] Configure availability: Sample weekly schedule (e.g., Mon-Fri 10am-4pm)
  - [ ] Add custom intake questions:
    - "What area of creative work are you exploring?" (text)
    - "What's your main goal for coaching?" (textarea)
  - [ ] Connect Google Calendar (if available)
  - [ ] Customize confirmation email template
  - [ ] Set notification emails for owner

- [ ] Test booking flow end-to-end (AC: #5)
  - [ ] Access booking widget/page as a customer
  - [ ] View available time slots
  - [ ] Select a time slot
  - [ ] Fill in custom questions
  - [ ] Complete booking
  - [ ] Verify customer confirmation email received
  - [ ] Verify owner notification email received
  - [ ] Check Google Calendar for appointment (if integrated)
  - [ ] Test booking on mobile device (iPhone or Android)
  - [ ] Verify timezone is displayed correctly
  - [ ] Test cancellation/rescheduling (if available)

---

## Technical Summary

This story focuses on **research and selection** of an appointment booking solution. The goal is to identify the best option that meets coaching business requirements:

1. **Owner availability management** - Easy to set recurring schedule
2. **Google Calendar sync** - Two-way integration to prevent double-booking
3. **Custom intake questions** - Gather coaching context before consultation
4. **Email confirmations** - Automated to customer and owner
5. **Timezone handling** - Automatic detection and display
6. **Buffer time** - Enforce 15 minutes between bookings
7. **Mobile-friendly** - Optimized booking experience on phones
8. **Cost-effective** - Free tier (Calendly) or reasonable subscription ($9.99-$14.99/month)

**Key Comparison: Calendly vs Shopify-Native Apps**

**Calendly Pros:**
- FREE tier available (sufficient for basic coaching)
- Well-known, proven platform
- Three integration methods (inline, popup, widget)
- Easy Shopify integration via F2 or CalPal apps
- Excellent mobile UX

**Calendly Cons:**
- External platform (not Shopify-native)
- Bookings don't sync as Shopify orders
- Brand consistency (Calendly branding in emails)

**Shopify-Native Apps (Cowlendar, Easy, BookThatApp) Pros:**
- Tight Shopify integration
- Bookings sync as Shopify orders (better customer tracking)
- Brand-consistent emails
- Shopify admin management

**Shopify-Native Apps Cons:**
- Monthly subscription required ($9.99-$14.99+)
- Less proven than Calendly
- May have learning curve

**Evaluation Approach:**
- Hands-on testing of each solution
- Create test service/event in each platform
- Book test appointment and verify flow
- Evaluate mobile booking experience
- Compare pricing and features
- Document findings in comparison table

---

## Project Structure Notes

**Files to Modify:**
- `/docs/tech-spec.md` - Update with final decision and rationale (section 4: Technical Approach, updated with research findings)

**Documentation:**
- Document comparison table
- Note selected solution credentials/settings
- If Calendly: Store Calendly account login and event link
- If Shopify app: Note app subscription details

**Story Points:** 2
- 1 point: Evaluation and testing of 3-4 solutions
- 1 point: Documentation, selection, and test setup

**Time Estimate:** 1-2 hours

**Dependencies:**
- Shopify store access (82e997-6e.myshopify.com)
- Shopify admin permissions to install apps
- Google Calendar account (for integration testing)
- Test email address for notifications
- Mobile device for mobile UX testing

---

## Key Code References

**No code changes in this story** - Research and selection only

**Relevant Documentation:**
- `CLAUDE.md` - Shopify store configuration
- `docs/tech-spec.md` - Technical specification
  - Section 4: Implementation Details → Technical Approach (booking solution decision)
  - Section 8: Technical Details → Booking System Architecture

**Shopify Admin Locations:**
- Apps → Search for booking apps (Calendly, Cowlendar, Easy Appointment Booking, BookThatApp)
- If Calendly: Apps → F2 Calendly or CalPal → Connect Calendly account

**External Platforms:**
- Calendly: https://calendly.com (create free account if testing)

---

## Context References

**Primary Context:**
- Tech-spec: `/docs/tech-spec.md`
  - Section 2: The Change → Problem Statement (booking system need)
  - Section 4: Implementation Details → Technical Approach (booking solutions research)
  - Section 8: Technical Details → Booking System Architecture
  - Section 10: Implementation Guide → Story 3 (research steps)

**Supporting Context:**
- Web research results on Shopify booking apps 2025
- Calendly Shopify integration documentation
- User requirement: "Calendly.com is one example and I think Google might even have extended their Gmail calendar with the same. This is a kind of a separate feature from the form selection but investigate what is available there. Calendly is my backup since we can always integrate with that."

---

## Dev Agent Record

**Agent Model Used:** (To be filled during execution)

**Debug Log References:** (To be filled during execution)

**Completion Notes:** (To be filled during execution)

**Files Modified:** (To be filled during execution)
- Expected: `/docs/tech-spec.md` (update with decision)

**Test Results:** (To be filled during execution)
- Booking flow tests for each solution
- Mobile booking UX evaluation
- Email confirmation tests
- Calendar sync tests (if Google Calendar)

---

## Review Notes

(To be filled during code review - N/A for research story)

**Decision Rationale:**
(Document the final decision here after research is complete)

**Selected Solution:** [To be determined]

**Justification:** [Why this solution was chosen over alternatives]

---

**END OF STORY 1.3**