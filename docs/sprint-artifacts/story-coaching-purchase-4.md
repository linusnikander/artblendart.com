# User Story 2.4: Set Up YCBM Booking Page

**Story ID:** 2.4
**Epic:** Coaching Product Purchase Flow (`coaching-purchase`)
**Status:** Draft
**Story Points:** 3
**Estimated Time:** 2-3 hours

---

## User Story

**As a** customer or prospective client
**I want** to easily book a session in Swedish at a time that works for me
**So that** I can schedule a free intro or paid coaching session without language barriers

---

## Acceptance Criteria

**AC #1:** YCBM account created and booking page accessible
- Booking page URL is clean: `artblendart.youcanbook.me` or similar
- Page loads without errors
- YCBM branding acceptable (free tier has "Powered by YCBM")

**AC #2:** Swedish language throughout booking flow
- All interface text in Swedish
- Date/time format Swedish (24h, day-month-year)
- Timezone set to Europe/Stockholm

**AC #3:** Calendar availability synced
- Connected to coach's Google/Microsoft calendar
- Busy times automatically blocked
- Available slots reflect actual availability

**AC #4:** Appointment types configured
- 60-minute coaching session (main sessions)
- 15-minute intro consultation (free, optional, separate from packages)
- Buffer time between appointments (15 min)

**AC #5:** Confirmation and reminder emails working
- Customer receives booking confirmation
- Coach receives notification of new booking
- Reminder email sent 24h before session

**AC #6:** Video meeting integration
- Teams or Zoom link auto-generated for each booking
- Link included in confirmation email to customer
- Link accessible from coach's calendar event

---

## Tasks/Subtasks

- [ ] Create YouCanBook.me Account (AC: #1)
  - [ ] Go to youcanbook.me and sign up (free tier)
  - [ ] Complete account setup
  - [ ] Note booking page URL for Story 2.3

- [ ] Connect Calendar (AC: #3)
  - [ ] Choose calendar provider (Google/Microsoft)
  - [ ] Authorize YCBM access to calendar
  - [ ] Verify two-way sync working

- [ ] Configure Booking Page Settings (AC: #2)
  - [ ] Set language to Swedish
  - [ ] Set timezone to Europe/Stockholm
  - [ ] Set date format to DD/MM/YYYY
  - [ ] Set time format to 24-hour

- [ ] Set Up Appointment Types (AC: #4)
  - [ ] Create "Coachingsession" (60 min)
  - [ ] Create "Inledande konsultation" (15 min, free, optional, not part of packages)
  - [ ] Set buffer time: 15 minutes after each appointment
  - [ ] Configure available days/hours

- [ ] Configure Video Meeting Integration (AC: #6)
  - [ ] Enable Teams or Zoom integration
  - [ ] Test that meeting links are generated
  - [ ] Verify link appears in confirmation

- [ ] Set Up Email Notifications (AC: #5)
  - [ ] Customize confirmation email (Swedish)
  - [ ] Set up reminder email (24h before)
  - [ ] Add coach notification for new bookings
  - [ ] Test all email flows

- [ ] Customize Booking Page Appearance (AC: #1, #2)
  - [ ] Add ArtBlendArt branding (logo if possible on free tier)
  - [ ] Write Swedish welcome text
  - [ ] Add any intake questions (name, email, brief background)

- [ ] Test Booking Flow End-to-End
  - [ ] Make test booking as customer
  - [ ] Verify confirmation email received
  - [ ] Verify calendar event created
  - [ ] Verify video link works
  - [ ] Test cancellation/reschedule flow

---

## Technical Summary

**YCBM Free Tier Includes:**
- 1 calendar connection
- 1 booking page
- Unlimited bookings
- Basic customization
- Email notifications
- "Powered by YCBM" branding

**Video Integration Options:**
- Microsoft Teams (recommended if coach uses Microsoft 365)
- Zoom (if coach has Zoom account)
- Google Meet (if using Google Calendar)

**Swedish Language Settings:**
YCBM supports multiple languages. Set:
- Interface language: Swedish
- Email language: Swedish
- Timezone: Europe/Stockholm (CET/CEST)

**Booking Page URL:**
Free tier allows custom subdomain: `yourbusiness.youcanbook.me`
Aim for: `artblendart.youcanbook.me`

---

## Dependencies

- Google or Microsoft calendar access
- Microsoft Teams or Zoom account (for video links)
- No Shopify dependencies (can run parallel with Story 2.1)

---

## Key Deliverables

1. YCBM booking page URL → needed for Story 2.3 (order email)
2. Working booking flow in Swedish
3. Calendar sync verified
4. Email notifications configured

---

**END OF STORY 2.4**
