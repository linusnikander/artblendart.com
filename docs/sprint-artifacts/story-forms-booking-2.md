# User Story 1.2: Contact Form Implementation

**Story ID:** 1.2
**Epic:** Form Handling & Appointment Booking (`forms-booking`)
**Status:** Draft
**Story Points:** 3
**Estimated Time:** 3-4 hours

---

## User Story

**As a** potential coaching client
**I want** to submit an inquiry form on the coaching contact page
**So that** I can express my interest and receive a response from the coaching service

---

## Acceptance Criteria

**AC #1:** Form live on coaching contact page (Shopify theme)
- Form integrated into `shopify-theme/sections/coaching-contact.liquid`
- Form visible and functional on https://artblendart.com

**AC #2:** All required fields present and validated
- Name (text, required, max 100 chars)
- Email (email, required, validation)
- Phone (tel, optional)
- Inquiry Type (select dropdown, required, 3 options: "Initial Consultation", "General Question", "Workshop Interest")
- Message (textarea, required, max 1000 chars, 6 rows)
- Client-side HTML5 validation working
- Server-side validation via form app

**AC #3:** Email notifications working
- Owner receives email for every form submission
- Email includes all form field data
- Email subject: "New Coaching Inquiry from {name}"
- Email delivery: 100% success rate (test with 5+ submissions)

**AC #4:** Form data stored in Shopify admin
- Submissions viewable in Shopify Admin → Content → Metaobjects (or app dashboard)
- All field data captured correctly
- Timestamp recorded for each submission

**AC #5:** Form matches existing design
- Color scheme: white background, gray-700 text, gray-50 accents
- Font: Light weight headings, consistent with coaching pages
- Max width: 4xl container, centered
- Padding: px-6 py-16 sections
- Responsive: Single column on mobile, appropriate spacing on desktop

**AC #6:** Responsive on mobile, tablet, desktop
- Tested on iPhone (Safari Mobile)
- Tested on Android (Chrome Mobile)
- Tested on iPad (Safari tablet)
- Tested on desktop (Chrome, Firefox, Safari)
- Form inputs properly sized for touch

**AC #7:** reCAPTCHA spam protection active
- reCAPTCHA v2 or v3 enabled
- Spam submissions blocked (test with rapid consecutive submissions)
- Challenge presented when spam detected

**AC #8:** Next.js mockup updated to match
- `app/coaching/contact/page.tsx` updated with form mockup
- Visual match to Shopify implementation
- Tailwind classes applied for styling

---

## Tasks/Subtasks

- [ ] Configure selected form app in Shopify admin (AC: #2, #3, #4)
  - [ ] Create new form: "Coaching Inquiry Form"
  - [ ] Add field: Name (text, required, max 100)
  - [ ] Add field: Email (email, required)
  - [ ] Add field: Phone (tel, optional)
  - [ ] Add field: Inquiry Type (select with 3 options)
  - [ ] Add field: Message (textarea, required, max 1000, rows 6)
  - [ ] Enable reCAPTCHA spam protection (AC: #7)
  - [ ] Configure email notifications to owner email
  - [ ] Customize email template (subject + body with all fields)
  - [ ] Test submission flow end-to-end

- [ ] Integrate form into Shopify theme (AC: #1, #5)
  - [ ] Pull latest theme: `shopify theme pull --store 82e997-6e.myshopify.com --theme 149756051720`
  - [ ] Edit `shopify-theme/sections/coaching-contact.liquid`
  - [ ] Add form app block or embed code
  - [ ] Wrap form in container: `max-w-4xl mx-auto px-6 py-16`
  - [ ] Style form with Tailwind-equivalent classes or custom CSS
  - [ ] Match color scheme: white bg, gray-700 text, gray-50 for form container
  - [ ] Ensure font-light for headings
  - [ ] Add intro text above form: "Get in touch about coaching"

- [ ] Style form inputs and controls (AC: #5)
  - [ ] Input fields: Neutral border (gray-300), rounded corners
  - [ ] Labels: Above inputs, gray-700, font-light
  - [ ] Focus states: Subtle color change (blue or gray-400)
  - [ ] Required indicators: Asterisk (*) or "(required)" text
  - [ ] Error messages: Red text below fields (if validation fails)
  - [ ] Submit button: Prominent but minimal (matches existing design)
  - [ ] Success message styling: green bg-gray-50 with confirmation text

- [ ] Test form responsiveness (AC: #6)
  - [ ] Test on iPhone (Safari Mobile): single column, touch-friendly inputs
  - [ ] Test on Android (Chrome Mobile): proper sizing and validation
  - [ ] Test on iPad: appropriate spacing, two-column optional for short fields
  - [ ] Test on desktop (Chrome): full width form with proper alignment
  - [ ] Test on desktop (Firefox): cross-browser compatibility
  - [ ] Test on desktop (Safari): WebKit rendering check

- [ ] Test form functionality (AC: #3, #4, #7)
  - [ ] Submit valid form with all fields filled
  - [ ] Verify email received at owner email address
  - [ ] Check email contains all field data
  - [ ] Check submission appears in Shopify admin (metaobjects or app dashboard)
  - [ ] Submit with missing required field (verify error message)
  - [ ] Submit with invalid email (verify validation error)
  - [ ] Submit with special characters in name/message (verify handling)
  - [ ] Submit 3+ forms rapidly (verify reCAPTCHA challenge)
  - [ ] Complete reCAPTCHA and submit (verify success)

- [ ] Create Next.js mockup (AC: #8)
  - [ ] Update `app/coaching/contact/page.tsx`
  - [ ] Add form HTML structure matching Shopify version
  - [ ] Apply Tailwind classes for styling
  - [ ] Match field layout and spacing
  - [ ] Include all 5 form fields
  - [ ] Optional: Create `components/ContactForm.tsx` reusable component
  - [ ] Test mockup locally: `npm run dev` → http://localhost:3000/coaching/contact

- [ ] Deploy to Shopify (AC: #1)
  - [ ] Create feature branch: `git checkout -b feature/contact-form`
  - [ ] Commit changes: `git add . && git commit -m "Add coaching inquiry contact form"`
  - [ ] Push to live theme:
    ```bash
    shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 --only='sections/coaching-contact.liquid' --allow-live
    ```
  - [ ] Verify form appears on live site: https://artblendart.com/pages/coaching-contact (or contact page)
  - [ ] Submit test inquiry on live site
  - [ ] Verify email received
  - [ ] Verify data in Shopify admin

---

## Technical Summary

This story implements the contact/inquiry form on the coaching pages using the form solution selected in Story 1.1.

**Key Technical Decisions:**
- Form builder app: [Selected in Story 1.1]
- Storage: Shopify metaobjects (no separate database)
- Email service: Shopify's built-in email or app's email service
- Spam protection: Google reCAPTCHA v2/v3
- Styling: Tailwind-equivalent classes, match existing coaching page design

**Implementation Approach:**
1. Configure form in Shopify app admin (fields, validation, emails)
2. Integrate form into Liquid template (`coaching-contact.liquid`)
3. Style form container and inputs to match existing design
4. Test thoroughly across devices and browsers
5. Create Next.js mockup for design reference
6. Deploy to live Shopify theme

**Form Fields:**
1. **Name** - Text input, required, max 100 chars
2. **Email** - Email input, required, HTML5 validation
3. **Phone** - Tel input, optional, accepts various formats
4. **Inquiry Type** - Dropdown select, required, 3 options
5. **Message** - Textarea, required, max 1000 chars, 6 rows

**Email Template:**
```
Subject: New Coaching Inquiry from {name}

Name: {name}
Email: {email}
Phone: {phone}

Inquiry Type: {inquiry_type}

Message:
{message}

Submitted: {timestamp}
View in Admin: {admin_link}
```

---

## Project Structure Notes

**Files to Modify:**
- `/shopify-theme/sections/coaching-contact.liquid` - Add form integration
- `/app/coaching/contact/page.tsx` - Update mockup with form
- `/components/ContactForm.tsx` - Optional reusable form component
- `/SHOPIFY_INTEGRATION.md` - Document form app setup

**Test Locations:**
- Local Next.js mockup: http://localhost:3000/coaching/contact
- Shopify theme preview: Use theme editor preview
- Live site: https://artblendart.com/pages/coaching-contact

**Story Points:** 3
- 1 point: Form app configuration
- 1 point: Shopify theme integration and styling
- 0.5 points: Next.js mockup
- 0.5 points: Testing and deployment

**Time Estimate:** 3-4 hours

**Dependencies:**
- Story 1.1 complete (form app selected and installed)
- Shopify CLI authenticated
- Shopify store access
- Owner email configured for notifications

---

## Key Code Locations

**Existing Files to Reference:**
- `app/coaching/page.tsx:4-12` - Hero section pattern (headings, spacing)
- `app/coaching/page.tsx:15-46` - Content section pattern (max-w-4xl, px-6, py-16)
- `app/layout.tsx:9-19` - Root layout pattern
- `shopify-theme/sections/coaching-hero.liquid` - Shopify section pattern

**New/Modified Files:**
- `shopify-theme/sections/coaching-contact.liquid` - Form integration (MODIFY)
- `app/coaching/contact/page.tsx` - Form mockup (MODIFY)
- `components/ContactForm.tsx` - Reusable form component (CREATE - optional)

**Shopify Admin:**
- Apps → [Selected form app] → Forms → Coaching Inquiry Form
- Content → Metaobjects → Form Submissions (to view submissions)
- Settings → Notifications → Customize email templates (if needed)

---

## Context References

**Primary Context:**
- Tech-spec: `/docs/tech-spec.md`
  - Section 4: Implementation Details → Source Tree Changes (files #1, #4, #6)
  - Section 4: Implementation Details → Technical Approach (form solution decision)
  - Section 8: Technical Details → Form Handling Architecture
  - Section 10: Implementation Guide → Story 2 (detailed steps)
  - Section 12: UX/UI Considerations → Form styling patterns

**Existing Patterns:**
- Tech-spec Section 4: Existing Patterns to Follow
  - React/TypeScript patterns (functional components)
  - Tailwind styling patterns (utility-first, responsive)
  - Color scheme (white, gray-700, gray-50)

---

## Dev Agent Record

**Agent Model Used:** (To be filled during execution)

**Debug Log References:** (To be filled during execution)

**Completion Notes:** (To be filled during execution)

**Files Modified:** (To be filled during execution)
- Expected:
  - shopify-theme/sections/coaching-contact.liquid
  - app/coaching/contact/page.tsx
  - components/ContactForm.tsx (if created)
  - SHOPIFY_INTEGRATION.md (documentation update)

**Test Results:** (To be filled during execution)
- Form submission tests (valid, invalid, missing fields)
- Email delivery tests
- reCAPTCHA tests
- Responsive design tests (mobile, tablet, desktop)
- Cross-browser tests (Chrome, Firefox, Safari)

---

## Review Notes

(To be filled during code review)

**Code Quality Checks:**
- [ ] Form inputs have proper labels (for/id association)
- [ ] Required fields indicated clearly
- [ ] Error messages are accessible (aria-describedby)
- [ ] Form has aria-label
- [ ] Submit button has descriptive text
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works (tab order logical)

---

**END OF STORY 1.2**