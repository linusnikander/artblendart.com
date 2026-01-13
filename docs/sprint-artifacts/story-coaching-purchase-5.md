# User Story 2.5: End-to-End Testing & Documentation

**Story ID:** 2.5
**Epic:** Coaching Product Purchase Flow (`coaching-purchase`)
**Status:** Draft
**Story Points:** 3
**Estimated Time:** 2-3 hours

---

## User Story

**As a** store owner and coach
**I want** the complete purchase-to-booking flow tested and documented
**So that** I can confidently serve customers and have clear processes for manual tasks

---

## Acceptance Criteria

**AC #1:** End-to-end flow tested on desktop and mobile
- Complete purchase flow: Product page → Checkout → Payment → Confirmation
- Email received with booking link
- Booking flow: Click link → Select time → Confirm → Calendar event created
- All steps work on iOS, Android, and desktop browsers

**AC #2:** Manual workflow documented for coach
- How to track which sessions have been used per customer
- Email templates for post-session summaries
- Process for sending next-session booking reminders
- How to handle cancellations/reschedules

**AC #3:** Customer FAQ documented
- Common questions answered
- Shared with customer service / on website if needed

**AC #4:** All epic success criteria verified
- Checklist from epic document reviewed and confirmed
- Any issues documented and resolved

---

## Tasks/Subtasks

- [ ] End-to-End Testing (AC: #1)
  - [ ] Desktop test (Chrome)
    - [ ] Browse to coaching page
    - [ ] Click "Köp [Paket] nu" on each product
    - [ ] Complete checkout (use test payment if possible)
    - [ ] Receive order confirmation email
    - [ ] Click YCBM link in email
    - [ ] Book a test session
    - [ ] Verify calendar event and video link
  - [ ] Mobile test (iOS Safari)
    - [ ] Repeat above flow on iPhone
    - [ ] Note any UX issues
  - [ ] Mobile test (Android Chrome)
    - [ ] Repeat above flow on Android
    - [ ] Note any UX issues
  - [ ] Optional intro booking test (free, 15 min)
    - [ ] Use the "Boka gratis konsultation" CTA
    - [ ] Book a test intro slot
    - [ ] Verify confirmation email, calendar event, and video link
  - [ ] Document any bugs found

- [ ] Create Coach Workflow Documentation (AC: #2)
  - [ ] Create session tracking spreadsheet/template
    - Columns: Customer name, Email, Package, Sessions total, Sessions used, Next session date
  - [ ] Write post-session email template
    - Summary placeholder sections
    - Homework/tasks section
    - Next session booking link
  - [ ] Document cancellation handling
    - YCBM reschedule process
    - When to offer refunds
  - [ ] Document no-show policy

- [ ] Create Customer FAQ (AC: #3)
  - [ ] "How do I book my session?"
  - [ ] "How do I book a free 15-minute intro consultation?"
  - [ ] "What if I need to reschedule?"
  - [ ] "How does the video call work?"
  - [ ] "What should I prepare before my session?"
  - [ ] "How many sessions do I have?"
  - [ ] "Can I use friskvårdsbidrag?" (for Kickstart)

- [ ] Verify Epic Success Criteria (AC: #4)
  - [ ] All 3 products purchasable ✓
  - [ ] Klarna available at checkout ✓
  - [ ] Order email includes booking instructions ✓
  - [ ] YCBM booking page works ✓
  - [ ] Swedish language correct ✓
  - [ ] Calendar sync working ✓
  - [ ] Email confirmations sent ✓
  - [ ] Mobile experience acceptable ✓
  - [ ] Optional 15-minute intro booking available ✓

- [ ] Update TODO.md with completion status

---

## Technical Summary

**Testing Approach:**
- Use Shopify's test payment mode (Bogus Gateway) or place small real orders if needed
- For YCBM testing, book actual appointments (can cancel immediately after)
- Test on real devices when possible (not just browser emulation)

**Documentation Location:**
Create new file: `docs/coach-workflow.md`
Create new file: `docs/customer-faq.md` (optional - could be a Shopify page instead)

**Session Tracking Options:**
1. **Simple spreadsheet** (Google Sheets) - Recommended for v1
2. **Notion database** - If coach already uses Notion
3. **Shopify customer notes** - Add notes to customer profile in Shopify admin

---

## Dependencies

- **Story 2.1:** Products must exist
- **Story 2.2:** Product links must work
- **Story 2.3:** Order emails must be configured
- **Story 2.4:** YCBM must be set up

This story cannot start until all other stories are complete.

---

## Deliverables

1. Test results documented (any bugs filed)
2. `docs/coach-workflow.md` - Coach's manual processes
3. Customer FAQ (location TBD)
4. Epic marked as complete in TODO.md

---

## Post-Epic: Future Improvements

Document any enhancement ideas discovered during testing:
- Gift card integration (v2)
- Automated session tracking
- CRM integration
- Feedback collection automation

---

**END OF STORY 2.5**
