# Story 4.5: YCBM Booking Setup

**Epic:** UX Alignment
**Points:** 3
**Priority:** 5
**Status:** Draft

---

## User Story

As a customer who purchased a coaching package, I want a smooth booking experience that creates a Microsoft Teams meeting and provides clear information about my session.

---

## Tasks

| ID | Task | Status |
|----|------|--------|
| YCBM-1 | Remove "overlay your availability" option | [ ] |
| YCBM-2 | Adjust bookable time slots | [ ] |
| YCBM-3 | Add more info about what's being booked | [ ] |
| YCBM-4 | Add full name field | [ ] |
| YCBM-5 | Show email used for booking | [ ] |
| YCBM-6 | Rename "Book your call" to something else | [ ] |
| YCBM-7 | Switch from Google Meet to Microsoft Teams | [ ] |
| YCBM-8 | Set up email copy when bookings occur | [ ] |

---

## Acceptance Criteria

- [ ] Booking creates Microsoft Teams meeting (not Google Meet)
- [ ] Therese receives email notification for each booking
- [ ] Customer sees clear info about what they're booking
- [ ] Full name field required
- [ ] Booking confirmation shows email used
- [ ] "Overlay availability" option removed
- [ ] Time slots match Therese's availability
- [ ] Page title/heading updated from "Book your call"

---

## Implementation Notes

### YCBM Settings to Update
Location: YouCanBook.me Dashboard → Booking Page

**Calendar Integration:**
- Disconnect Google Calendar/Meet
- Connect Microsoft 365 / Teams
- Verify Teams meeting links are generated

**Form Fields:**
- Add: Full name (required)
- Verify: Email field visible in confirmation

**Availability:**
- Review and adjust available time slots
- Remove "overlay availability" feature

**Notifications:**
- Enable email to Therese on new booking
- Configure confirmation email to customer

**Branding:**
- Update page title (replace "Book your call")
- Add description of what's being booked

---

## Dependencies

- Microsoft 365 / Teams account access
- YCBM admin access
- Therese's availability schedule

---

## Notes

- Reference: `order-flow-documentation.pdf` (booking flow after checkout)
- Feedback source: `docs/order-flow-update.md`
- Current YCBM URL: https://74929.youcanbook.me/
