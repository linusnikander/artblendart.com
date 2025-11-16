# User Story 1.4: Booking Calendar Implementation

**Story ID:** 1.4
**Epic:** Form Handling & Appointment Booking (`forms-booking`)
**Status:** Draft
**Story Points:** 4
**Estimated Time:** 4-5 hours

---

## User Story

**As a** potential coaching client
**I want** to view available consultation time slots and book an initial appointment
**So that** I can schedule a coaching session at a time that works for me without email back-and-forth

---

## Acceptance Criteria

**AC #1:** Booking calendar live on coaching page (Shopify theme)
- Booking widget/calendar integrated into Shopify theme
- New section: `shopify-theme/sections/coaching-booking.liquid` created
- Booking interface visible and functional on https://artblendart.com

**AC #2:** Owner availability schedule configured
- Weekly recurring schedule set (e.g., Mon-Fri 10am-4pm)
- 30-minute consultation duration
- 15-minute buffer time between bookings
- Ability to block specific dates (holidays, vacations)
- Max advance booking: 30 days

**AC #3:** Google Calendar integration working (two-way sync)
- Bookings appear in owner's Google Calendar
- Calendar events blocked in booking widget
- Updates sync both ways (booking ↔ calendar)
- 100% sync accuracy (test with 5+ bookings)

**AC #4:** Custom intake questions included in booking form
- Question 1: "What area of creative work are you exploring?" (text field)
- Question 2: "What's your main goal for coaching?" (textarea)
- Questions appear during booking flow
- Answers saved and included in confirmation emails

**AC #5:** Confirmation emails sent to customer and owner
- Customer receives booking confirmation with date, time, timezone, details
- Owner receives notification of new booking with customer info and intake answers
- Emails sent within 1 minute of booking
- 100% email delivery (test with 5+ bookings)
- Reminder email sent 24 hours before appointment (if available)

**AC #6:** Booking interface matches existing design
- Container styled to match coaching pages (max-w-4xl, px-6, py-16)
- Colors: white background, gray-700 text, gray-50 accents
- Font: Light weight for headings
- Buttons/interactions match existing minimal aesthetic
- Intro text above calendar explaining the booking process

**AC #7:** Responsive on mobile, tablet, desktop
- Mobile (iPhone Safari, Android Chrome): Touch-optimized slot selection
- Tablet (iPad): Appropriate calendar sizing and spacing
- Desktop (Chrome, Firefox, Safari): Full-width calendar, easy navigation
- Date picker works on all devices
- Form inputs properly sized for touch

**AC #8:** Timezone handling correct
- User's timezone auto-detected
- Availability displayed in user's local timezone
- Confirmation email shows timezone (e.g., "2:00 PM PST")
- No timezone conversion errors

**AC #9:** Buffer time between bookings enforced
- 15-minute gaps automatically created between consecutive bookings
- System prevents booking slots within buffer period
- Tested: Book 2:00 PM slot → 2:15-2:30 PM becomes unavailable

**AC #10:** Documentation updated with app configuration
- `SHOPIFY_INTEGRATION.md` updated with booking setup instructions
- Availability management process documented
- Owner guide: How to set schedule, block dates, view bookings
- Credentials/settings noted securely

---

## Tasks/Subtasks

- [ ] Configure selected booking solution (AC: #2, #3, #4, #5)
  - [ ] If Calendly selected:
    - [ ] Log into Calendly account (created in Story 1.3)
    - [ ] Create event type: "Initial Coaching Consultation"
    - [ ] Set duration: 30 minutes
    - [ ] Set location: Google Meet, Zoom, or Phone (as preferred)
    - [ ] Configure custom questions:
      - "What area of creative work are you exploring?" (short text)
      - "What's your main goal for coaching?" (long text / paragraph)
    - [ ] Set availability: Weekly schedule (e.g., Mon-Fri 10am-4pm in owner's timezone)
    - [ ] Configure buffer: 15 minutes before/after each booking
    - [ ] Set date range: Rolling 30 days
    - [ ] Connect Google Calendar for two-way sync
    - [ ] Customize confirmation email template
    - [ ] Set owner email notifications
    - [ ] Enable reminder emails (24 hours before, if available in free tier)
    - [ ] Customize booking page appearance (colors, branding if customizable)
    - [ ] Get shareable Calendly link and embed code
  - [ ] If Shopify-native app selected (Cowlendar/Easy/BookThatApp):
    - [ ] Access app from Shopify admin
    - [ ] Create service: "Initial Coaching Consultation"
    - [ ] Configure all settings as above (duration, buffer, questions, schedule)
    - [ ] Connect Google Calendar
    - [ ] Customize email templates
    - [ ] Get embed code or app block for theme integration

- [ ] Create new Shopify section for booking (AC: #1, #6)
  - [ ] Pull latest theme: `shopify theme pull --store 82e997-6e.myshopify.com --theme 149756051720`
  - [ ] Create `shopify-theme/sections/coaching-booking.liquid`
  - [ ] If Calendly:
    - [ ] Add Calendly embed code (inline, popup, or widget)
    - [ ] Follow official guide: https://help.calendly.com/hc/en-us/articles/4410653407127-How-to-add-Calendly-to-a-Shopify-site
    - [ ] Use F2 Calendly or CalPal app block (if installed) OR manual embed
  - [ ] If Shopify app:
    - [ ] Add app widget block to section
    - [ ] Configure block settings
  - [ ] Wrap calendar in styled container:
    - Container: `max-w-4xl mx-auto px-6 py-16`
    - Background: white or gray-50 for subtle distinction
  - [ ] Add intro heading: "Book Your Initial Consultation"
  - [ ] Add descriptive text:
    - "Schedule a 30-minute discovery call to discuss your creative goals."
    - "Select an available time below that works for you."
  - [ ] Style heading: `text-2xl font-light mb-4`
  - [ ] Style text: `text-gray-700 leading-relaxed mb-8`

- [ ] Update coaching main page with booking CTA (AC: #1)
  - [ ] Edit `app/coaching/page.tsx` (Next.js mockup)
  - [ ] Add booking call-to-action section
  - [ ] CTA text: "Ready to start your creative journey?"
  - [ ] Button/link: "Book a Free Consultation"
  - [ ] Link to coaching booking page or section
  - [ ] Style CTA section: `bg-gray-50 p-8 rounded-lg text-center`

- [ ] Create Next.js mockup (optional) (AC: #6)
  - [ ] Create `app/coaching/booking/page.tsx` (optional separate page)
  - [ ] OR add booking section to existing contact page
  - [ ] Build visual calendar mockup component
  - [ ] Show sample available time slots (visual representation)
  - [ ] Create `components/BookingCalendar.tsx` (optional)
  - [ ] Apply Tailwind styling matching Shopify version
  - [ ] Test mockup locally: `npm run dev`

- [ ] Test booking system end-to-end (AC: #3, #4, #5, #8, #9)
  - [ ] Book test appointment #1:
    - [ ] Select available time slot
    - [ ] Fill in name, email, phone
    - [ ] Answer custom intake questions
    - [ ] Complete booking
    - [ ] Verify customer confirmation email received
    - [ ] Verify owner notification email received
    - [ ] Check Google Calendar for appointment
    - [ ] Verify timezone displayed correctly in email
  - [ ] Book test appointment #2 (consecutive slot):
    - [ ] Verify previous slot + buffer time unavailable
    - [ ] Book slot after buffer (e.g., 2:45 PM if first was 2:00 PM)
    - [ ] Verify buffer enforcement (15 minutes)
  - [ ] Test double-booking prevention:
    - [ ] Create event directly in Google Calendar
    - [ ] Verify that time slot becomes unavailable in booking widget
    - [ ] Confirm two-way sync working
  - [ ] Test timezone handling:
    - [ ] Book from different timezone (use VPN or different device)
    - [ ] Verify times displayed in local timezone
    - [ ] Verify confirmation email shows correct timezone
  - [ ] Test cancellation/rescheduling (if available):
    - [ ] Cancel test booking
    - [ ] Verify cancellation email sent
    - [ ] Verify calendar event removed
    - [ ] Verify time slot becomes available again

- [ ] Test booking responsiveness (AC: #7)
  - [ ] Test on iPhone (Safari Mobile):
    - [ ] Calendar loads and displays correctly
    - [ ] Touch selection of date and time works
    - [ ] Form inputs sized appropriately
    - [ ] Booking completes successfully
  - [ ] Test on Android (Chrome Mobile):
    - [ ] Calendar responsive and touch-friendly
    - [ ] No layout issues
    - [ ] Booking flow smooth
  - [ ] Test on iPad (Safari tablet):
    - [ ] Calendar sized appropriately
    - [ ] Touch interactions work
  - [ ] Test on desktop (Chrome, Firefox, Safari):
    - [ ] Full calendar view
    - [ ] Easy navigation through dates
    - [ ] Booking completes successfully
    - [ ] Cross-browser compatibility verified

- [ ] Deploy to Shopify (AC: #1)
  - [ ] Create or use feature branch: `git checkout -b feature/booking-calendar`
  - [ ] Commit changes:
    ```bash
    git add shopify-theme/sections/coaching-booking.liquid
    git commit -m "Add coaching appointment booking calendar"
    ```
  - [ ] Push to live theme:
    ```bash
    shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 --allow-live
    ```
  - [ ] Verify booking section appears on live site
  - [ ] Book test appointment on live site
  - [ ] Verify emails and calendar sync on live deployment

- [ ] Update documentation (AC: #10)
  - [ ] Update `SHOPIFY_INTEGRATION.md`:
    - [ ] Add "Appointment Booking Setup" section
    - [ ] Document selected solution (Calendly or Shopify app)
    - [ ] If Calendly:
      - Calendly account email and login
      - Event type URL
      - Embed code location in theme
    - [ ] If Shopify app:
      - App name and subscription details
      - Service configuration
    - [ ] Availability management process:
      - How to update weekly schedule
      - How to block specific dates
      - How to view bookings
    - [ ] Email notification configuration
    - [ ] Google Calendar sync setup
  - [ ] Update `CLAUDE.md`:
    - [ ] Add note about booking calendar in project overview
    - [ ] Reference booking documentation in SHOPIFY_INTEGRATION.md
  - [ ] Create owner guide (optional separate doc):
    - [ ] "How to manage your coaching availability"
    - [ ] "How to view and manage bookings"
    - [ ] "How to cancel/reschedule appointments"

---

## Technical Summary

This story implements the appointment booking calendar on the coaching pages using the solution selected in Story 1.3.

**Recommended Solution (per user feedback):**
- **Calendly** with Shopify integration (F2 Calendly or CalPal app, or manual embed)
- Official integration guide: https://help.calendly.com/hc/en-us/articles/4410653407127-How-to-add-Calendly-to-a-Shopify-site

**Key Technical Decisions:**
- Booking platform: Calendly (free tier) OR Shopify-native app (decided in Story 1.3)
- Integration method (if Calendly): Inline embed, popup text, or popup widget
- Shopify app (if Calendly): F2 Calendly Book Appointment OR CalPal Calendly Integration
- Calendar sync: Google Calendar (two-way)
- Event type: "Initial Coaching Consultation" (30 min, 15 min buffer)
- Styling: Match existing coaching page design (white, gray-700, gray-50)

**Implementation Approach (Calendly):**
1. Configure Calendly event type with all settings (duration, buffer, questions, schedule)
2. Connect Google Calendar for two-way sync
3. Customize confirmation emails
4. Get Calendly embed code
5. Create `coaching-booking.liquid` section in Shopify theme
6. Add Calendly embed using F2/CalPal app block OR manual code
7. Style container to match existing design
8. Update coaching main page with CTA
9. Test booking flow thoroughly
10. Deploy to live theme
11. Document setup and management

**Booking Data Flow (Calendly):**
1. Client visits coaching booking page
2. Calendly widget displays available slots (synced with Google Calendar)
3. Client selects time, fills in details + intake questions
4. Booking created in Calendly
5. Event added to Google Calendar
6. Confirmation email sent to client (Calendly)
7. Notification email sent to owner (Calendly)
8. 24-hour reminder sent (if enabled)

**Calendly Embed Methods:**
- **Inline embed:** Calendar appears directly on page (recommended for dedicated booking page)
- **Popup text:** Link opens calendar in popup modal
- **Popup widget:** Floating button always visible, opens popup

**Custom Intake Questions:**
1. "What area of creative work are you exploring?" - Short text field
2. "What's your main goal for coaching?" - Long text / paragraph field

---

## Project Structure Notes

**Files to Modify:**
- `/shopify-theme/sections/coaching-booking.liquid` - CREATE (booking calendar section)
- `/app/coaching/page.tsx` - MODIFY (add booking CTA)
- `/app/coaching/booking/page.tsx` - CREATE (optional mockup)
- `/components/BookingCalendar.tsx` - CREATE (optional mockup component)
- `/SHOPIFY_INTEGRATION.md` - UPDATE (booking setup documentation)
- `/CLAUDE.md` - UPDATE (reference booking feature)

**Test Locations:**
- Calendly dashboard: https://calendly.com/event_types (to manage availability)
- Google Calendar: Verify booking sync
- Shopify theme: https://artblendart.com/pages/coaching-booking (or wherever integrated)
- Next.js mockup: http://localhost:3000/coaching/booking (if created)

**Story Points:** 4
- 1 point: Calendly/app configuration (availability, questions, calendar sync, emails)
- 1.5 points: Shopify theme integration and styling
- 1 point: Testing (booking flow, mobile, calendar sync, timezone, buffer)
- 0.5 points: Documentation and deployment

**Time Estimate:** 4-5 hours

**Dependencies:**
- Story 1.3 complete (booking solution selected)
- Calendly account created (if using Calendly)
- OR Shopify booking app installed and subscribed
- Google Calendar account with access
- Shopify CLI authenticated
- Shopify store access

---

## Key Code Locations

**Existing Files to Reference:**
- `app/coaching/page.tsx:4-12` - Hero section pattern
- `app/coaching/page.tsx:48-50` - CTA section pattern (if exists)
- `shopify-theme/sections/coaching-hero.liquid` - Shopify section structure
- `shopify-theme/sections/coaching-contact.liquid` - Contact section pattern (from Story 1.2)

**New/Modified Files:**
- `shopify-theme/sections/coaching-booking.liquid` - Booking section (CREATE)
- `app/coaching/page.tsx` - Add booking CTA (MODIFY)
- `app/coaching/booking/page.tsx` - Booking mockup page (CREATE - optional)
- `components/BookingCalendar.tsx` - Mockup component (CREATE - optional)
- `SHOPIFY_INTEGRATION.md` - Booking docs (UPDATE)

**External Platforms:**
- Calendly dashboard: https://calendly.com/app/scheduled_events
- Google Calendar: https://calendar.google.com

**Shopify Admin:**
- If using Calendly app: Apps → F2 Calendly or CalPal → Connect Calendly
- If using Shopify app: Apps → [Selected app] → Services/Events

---

## Context References

**Primary Context:**
- Tech-spec: `/docs/tech-spec.md`
  - Section 2: The Change → Solution Overview (booking system)
  - Section 4: Implementation Details → Source Tree Changes (files #2, #3, #5, #7)
  - Section 4: Implementation Details → Technical Approach (Calendly decision - UPDATED)
  - Section 8: Technical Details → Booking System Architecture
  - Section 10: Implementation Guide → Story 4 (detailed implementation steps)
  - Section 12: UX/UI Considerations → Calendar styling, accessibility

**Calendly Integration Guide:**
- Official Shopify integration: https://help.calendly.com/hc/en-us/articles/4410653407127-How-to-add-Calendly-to-a-Shopify-site

**Existing Patterns:**
- Tech-spec Section 4: Existing Patterns to Follow
  - Tailwind styling patterns (utility-first, max-w-4xl containers)
  - Color scheme (white, gray-700, gray-50, font-light)
  - Responsive design patterns

---

## Dev Agent Record

**Agent Model Used:** (To be filled during execution)

**Debug Log References:** (To be filled during execution)

**Completion Notes:** (To be filled during execution)

**Files Modified:** (To be filled during execution)
- Expected:
  - shopify-theme/sections/coaching-booking.liquid
  - app/coaching/page.tsx (CTA addition)
  - app/coaching/booking/page.tsx (if created)
  - components/BookingCalendar.tsx (if created)
  - SHOPIFY_INTEGRATION.md
  - CLAUDE.md

**Test Results:** (To be filled during execution)
- Booking flow tests (5+ test appointments)
- Google Calendar sync verification
- Email delivery tests (confirmation, notification, reminders)
- Mobile booking tests (iPhone, Android, iPad)
- Desktop tests (Chrome, Firefox, Safari)
- Timezone handling verification
- Buffer time enforcement tests
- Double-booking prevention tests

---

## Review Notes

(To be filled during code review)

**Code Quality Checks:**
- [ ] Calendar widget responsive on all devices
- [ ] Intro text clear and helpful
- [ ] Booking CTA prominent on main coaching page
- [ ] Color scheme matches existing pages
- [ ] Container width consistent (max-w-4xl)
- [ ] Accessibility: Keyboard navigation works
- [ ] Accessibility: Screen reader compatible
- [ ] Documentation complete and accurate

**Functional Checks:**
- [ ] Bookings appear in Google Calendar
- [ ] Confirmation emails sent to customer
- [ ] Notification emails sent to owner
- [ ] Timezone displayed correctly
- [ ] Buffer time enforced
- [ ] Custom questions captured
- [ ] Mobile booking works smoothly

---

**END OF STORY 1.4**