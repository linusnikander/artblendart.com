# Technical Specification: Form Handling & Appointment Booking for Coaching Pages

**Project:** artblendart.com
**Date:** 2025-11-16
**Track:** Quick Flow (Brownfield)
**Stories:** 4

---

## 1. Context

### Documents Available
- ✅ CLAUDE.md (project overview and workflow guidance)
- ○ No product brief
- ○ No research documents
- ○ No brownfield documentation (document-project not run yet)

### Project Stack Summary

**Framework & Core:**
- **Framework:** Next.js 15.0.0 (App Router)
- **React:** 18.3.1
- **Language:** TypeScript 5.x (strict mode enabled)
- **Styling:** Tailwind CSS 3.4.1
- **Build Tools:** PostCSS 8.x, Autoprefixer 10.x
- **Linting:** ESLint 8.x with Next.js config

**Shopify Integration:**
- **Store:** 82e997-6e.myshopify.com
- **Live Theme ID:** 149756051720
- **Custom Domain:** artblendart.com

### Existing Structure Summary

**Brownfield - Active Codebase:**

**Next.js App Structure:**
- `app/` directory with App Router pattern
- **Existing Pages:**
  - Homepage (`app/page.tsx`)
  - Coaching main (`app/coaching/page.tsx`)
  - Coaching about (`app/coaching/about/page.tsx`)
  - Coaching contact (`app/coaching/contact/page.tsx`)
  - Coaching who (`app/coaching/who/page.tsx`)
- Root layout with metadata configuration (`app/layout.tsx`)

**Shopify Theme:**
- `shopify-theme/sections/` with 20+ Liquid sections
- **Coaching-specific sections:**
  - `coaching-hero.liquid`
  - `coaching-about.liquid`
  - `coaching-contact.liquid`
  - `coaching-who.liquid`
  - `coaching-process.liquid`

**Code Conventions:**
- TypeScript with strict mode
- No semicolons (Next.js default)
- Single quotes in imports
- Functional React components
- Path aliases: `@/*` maps to project root
- Tailwind utility-first CSS approach

---

## 2. The Change

### Problem Statement

The ArtBlendArt coaching pages currently lack two critical interactive features:

1. **Form Handling Infrastructure**: No system to collect, store, and process contact inquiries from potential coaching clients. Currently missing ability to save submissions and automatically notify the business owner.

2. **Appointment Booking System**: No way for interested clients to view available time slots and book initial coaching consultations directly through the website. This creates friction in the client acquisition process.

Without these features, potential clients must use external communication channels, increasing drop-off rates and manual administrative overhead.

### Solution Overview

Implement two integrated but separate solutions:

**Feature 1: Shopify-Native Form Handling**
- Integrate a Shopify form builder app that stores submissions natively in Shopify
- Use Shopify's native metaobjects for form submission storage (no separate database required)
- Configure automatic email notifications to recipient list
- Implement customizable contact form on coaching pages matching existing design system
- Ensure forms work on both Next.js mockups and Shopify theme

**Feature 2: Shopify Appointment Booking**
- Integrate a Shopify-native booking app (Calendly-alternative)
- Owner can manage availability through Shopify admin
- Clients can view available slots and book initial consultations
- Automated confirmation emails and calendar integration
- Coaching section only (not site-wide)

### Change Type
**Enhancement** - Adding new interactive functionality to existing coaching pages

---

## 3. Scope

### In Scope

**Form Handling (Priority 1):**
- Research and select best Shopify form builder app for 2025
- Install and configure chosen form app in Shopify admin
- Set up form submission storage using Shopify metaobjects
- Configure email notifications to owner/recipients
- Create contact/inquiry form for coaching section
- Style form to match existing Tailwind design system
- Implement form on Shopify theme (`coaching-contact.liquid`)
- Create corresponding mockup in Next.js (`app/coaching/contact/page.tsx`)
- Test form submission, storage, and email delivery

**Appointment Booking (Priority 2):**
- Research and select best Shopify appointment booking app for 2025
- Install and configure chosen booking app in Shopify admin
- Set up owner availability management
- Configure booking form with custom questions for coaching intake
- Implement booking calendar on coaching page
- Style booking interface to match existing design
- Test booking flow end-to-end
- Configure automated confirmation emails

### Out of Scope

- Multi-language form support (English/Swedish - future enhancement)
- Payment collection at booking time (initial consultations are discovery calls)
- CRM integration beyond email notifications
- Advanced form analytics and reporting
- Recurring appointment scheduling
- Multiple service types (only initial coaching consultation for now)
- Integration with forms/booking on non-coaching pages
- Custom-built form or booking solution (using established Shopify apps only)

---

## 4. Implementation Details

### Source Tree Changes

**Shopify Theme Files:**

1. **`shopify-theme/sections/coaching-contact.liquid`** - MODIFY
   - Add form builder app section/block
   - Style form container to match page layout
   - Integrate form submission feedback UI

2. **`shopify-theme/sections/coaching-booking.liquid`** - CREATE
   - New section for appointment booking calendar
   - Embed booking app widget
   - Style booking interface container

3. **`shopify-theme/templates/page.coaching.json`** - MODIFY (if exists)
   - Add coaching-booking section to template
   - Configure section order and settings

**Next.js Mockup Files:**

4. **`app/coaching/contact/page.tsx`** - MODIFY
   - Add form mockup component
   - Match styling to Shopify form implementation
   - Include form fields: name, email, phone, message, inquiry type

5. **`app/coaching/booking/page.tsx`** - CREATE (optional)
   - Mockup of booking calendar interface
   - Visual representation of availability slots
   - Booking form mockup

6. **`components/ContactForm.tsx`** - CREATE (optional)
   - Reusable form component for mockup
   - TypeScript props interface
   - Tailwind styling matching Shopify version

7. **`components/BookingCalendar.tsx`** - CREATE (optional)
   - Reusable booking calendar mockup component
   - Visual calendar representation
   - Slot selection UI

**Configuration Files:**

8. **Shopify App Settings** - CONFIGURE
   - Form builder app: field types, validation rules, email templates
   - Booking app: availability rules, buffer times, booking duration

9. **Documentation** - UPDATE
   - `SHOPIFY_INTEGRATION.md` - Document form and booking app setup
   - Add app credentials and configuration notes

### Technical Approach

**Form Handling Solution:**

Based on 2025 research, **top recommended solutions:**

1. **Shopify Forms (Native)** - FREE
   - Built into Shopify (no app install needed)
   - Stores submissions in metaobjects automatically
   - Email notifications built-in
   - Limited customization but zero cost
   - **RECOMMENDED for MVP**

2. **Powerful Contact Form Builder** - FREE/PAID
   - Unlimited forms and submissions (free plan)
   - Zapier, Google Sheets integration
   - Email notifications to admin and respondents
   - Good customization options

3. **Custom Form Builder by Websyms** - PAID
   - Store submissions in app or email or both
   - Excel export capability
   - Mailchimp/Klaviyo integration
   - More advanced features

**Decision: Start with Shopify Forms (native), upgrade to Powerful Contact Form Builder if more features needed**

**Appointment Booking Solution:**

Based on 2025 research, **top recommended solutions:**

1. **Cowlendar** - $9.99/month+
   - Works like Calendly, integrated into Shopify
   - Calendar integration (Google Calendar, Outlook)
   - Automatic Zoom link generation
   - Custom booking questions
   - Multi-day support
   - 4.9 star rating, 1,766 reviews
   - **RECOMMENDED**

2. **Easy Appointment Booking** - $14.99/month+
   - Calendly alternative for Shopify
   - Klaviyo integration
   - Syncs bookings as Shopify orders
   - Google Calendar sync
   - Automated reminders

3. **BookThatApp (BTA)** - $9.99/month+
   - Custom booking form questions
   - Email/SMS reminders
   - Google Calendar, Outlook, Zoom integration
   - Designed for coaching/consulting services

**Calendly Shopify Integration Options:**

1. **Calendly Direct Embed** - RECOMMENDED
   - FREE tier available (sufficient for basic use)
   - Three embed methods: Inline, popup text, popup widget
   - Official Shopify apps available: F2 Calendly Book Appointment, CalPal
   - No-code integration via Online Store 2.0 blocks
   - Code-based option: Edit theme code, add snippet
   - Maintains branding consistency
   - Well-documented, proven solution

2. **Calendly Integration Apps:**
   - **F2 Calendly Book Appointment** - No code required, fast and responsive
   - **CalPal: Calendly Integration** - Simple button integration, no code

**Alternative Shopify-Native Options:**

3. **Cowlendar** - $9.99/month+
   - Calendly-like, but fully integrated into Shopify
   - 4.9 star rating, 1,766 reviews
   - Better Shopify order system integration

4. **Easy Appointment Booking** - $14.99/month+
   - Klaviyo integration
   - Syncs bookings as Shopify orders

**Decision: Start with Calendly (free tier) using F2 Calendly or CalPal app for no-code integration. Consider Cowlendar if tighter Shopify integration needed.**

### Existing Patterns to Follow

**From Existing Codebase:**

**React/TypeScript Patterns:**
- Functional components with TypeScript type annotations
- Export default pattern for page components
- Props interface definition using TypeScript `type` or `interface`
- Example from `app/layout.tsx`:
  ```tsx
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  ```

**Tailwind Styling Patterns:**
- Utility-first approach with Tailwind classes
- Responsive modifiers (`md:`, `lg:`)
- Consistent spacing scale
- Example from `app/coaching/page.tsx`:
  ```tsx
  <section className="max-w-4xl mx-auto px-6 py-16">
    <h1 className="text-4xl md:text-5xl font-light text-center mb-8">
      Kreativt skapande
    </h1>
  </section>
  ```

**Liquid Template Patterns:**
- Section-based architecture in `shopify-theme/sections/`
- Schema blocks for admin customization
- Responsive class usage matching Tailwind approach

**Color Scheme (to match):**
- Background: white (`bg-white`)
- Text primary: gray-700 (`text-gray-700`)
- Headings: default black
- Accents: gray-50 for subtle backgrounds (`bg-gray-50`)
- Font: light weight preferred (`font-light`)

---

## 5. Integration Points

**Shopify Admin Integration:**
- Form builder app integrates with Shopify Forms or third-party app admin
- Booking app integrates with Shopify admin for availability management
- Both apps store data in Shopify's infrastructure (metaobjects, customer data)

**Email Service Integration:**
- Form submissions trigger email notifications via Shopify's email service
- Booking confirmations send via booking app's email system
- Emails should come from artblendart.com domain (configure in Shopify settings)

**Calendar Integration:**
- Booking app syncs with Google Calendar (owner's calendar)
- Two-way sync: bookings update calendar, calendar blocks update availability
- iCal export for alternative calendar apps

**Frontend Integration:**
- Forms and booking widgets embed in Liquid sections via app blocks
- Next.js mockups simulate appearance for design validation
- Responsive behavior across mobile, tablet, desktop

---

## 6. Development Context

### Existing Code References

**Relevant Existing Files:**
- `app/coaching/contact/page.tsx` - Current contact page structure (will be enhanced with form)
- `app/coaching/page.tsx` - Main coaching page (will add booking CTA)
- `app/layout.tsx` - Root layout pattern for new components
- `shopify-theme/sections/coaching-contact.liquid` - Contact section to enhance
- `shopify-theme/sections/coaching-hero.liquid` - Hero section pattern reference

**Key Code Locations:**
- Coaching pages: `app/coaching/**/*.tsx`
- Shopify sections: `shopify-theme/sections/coaching-*.liquid`
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`

### Framework Dependencies

**Production Dependencies:**
- React 18.3.1 (UI library)
- React DOM 18.3.1 (React renderer)
- Next.js 15.0.0 (framework)

**Development Dependencies:**
- TypeScript 5.x (type safety)
- ESLint 8.x (linting)
- eslint-config-next 15.0.0 (Next.js ESLint rules)
- Tailwind CSS 3.4.1 (styling)
- PostCSS 8.x (CSS processing)
- Autoprefixer 10.0.1 (CSS vendor prefixes)
- @types/node 20.x (Node.js types)
- @types/react 18.x (React types)
- @types/react-dom 18.x (React DOM types)

**Shopify Dependencies (New):**
- Shopify Forms (native) OR Powerful Contact Form Builder app
- Cowlendar booking app

### Internal Dependencies

**Next.js Modules:**
- `next/font` (if custom fonts added)
- `next/image` (for optimized images in forms/booking)
- `next/metadata` (page metadata)

**Path Aliases:**
- `@/*` - Maps to project root for imports

### Configuration Changes

**Shopify Admin Configuration:**

1. **Install Shopify Forms or Form Builder App:**
   - Navigate to Apps in Shopify admin
   - Search for "Shopify Forms" (built-in) or "Powerful Contact Form Builder"
   - Install and authorize app

2. **Configure Form Settings:**
   - Create new form: "Coaching Inquiry Form"
   - Fields:
     - Name (text, required)
     - Email (email, required)
     - Phone (tel, optional)
     - Inquiry Type (select: "Initial Consultation", "General Question", "Workshop Interest")
     - Message (textarea, required)
   - Enable reCAPTCHA spam protection
   - Configure email notifications:
     - Recipient: owner email(s)
     - Subject: "New Coaching Inquiry from {name}"
     - Template: include all form fields

3. **Install Cowlendar Booking App:**
   - Navigate to Apps in Shopify admin
   - Search for "Cowlendar"
   - Install app (subscription: $9.99/month+)

4. **Configure Booking Settings:**
   - Service name: "Initial Coaching Consultation"
   - Duration: 30 minutes (configurable)
   - Buffer time: 15 minutes between bookings
   - Availability: Set weekly recurring schedule
   - Custom questions:
     - "What area of creative work are you exploring?" (text)
     - "What's your main goal for coaching?" (textarea)
   - Email confirmations: Enable for customer and owner
   - Calendar integration: Connect Google Calendar

**Next.js Configuration:**
- No changes required (forms are visual mockups only)

**Environment Variables (if needed):**
```bash
# .env.local (for local development if API integration added later)
SHOPIFY_STORE_DOMAIN=82e997-6e.myshopify.com
SHOPIFY_ACCESS_TOKEN=<token_if_needed>
```

### Code Style Conventions

**TypeScript:**
- Strict mode enabled
- Explicit return types on functions (preferred)
- Interface for props, type for unions
- No semicolons

**React:**
- Functional components only
- Named exports for components (default export for pages)
- Props destructuring in function signature
- Children as `React.ReactNode`

**Styling:**
- Tailwind utility classes only
- No custom CSS unless absolutely necessary
- Responsive-first approach
- Match existing color scheme (white, gray-700, gray-50)

**File Naming:**
- PascalCase for components: `ContactForm.tsx`
- kebab-case for pages/routes: `page.tsx` in `app/coaching/contact/`
- camelCase for utilities and hooks

---

## 7. Implementation Stack

**Runtime & Framework:**
- Node.js 20.x (recommended for Next.js 15)
- Next.js 15.0.0 (React framework with App Router)
- React 18.3.1 (UI library)

**Language & Type Safety:**
- TypeScript 5.x with strict mode

**Styling:**
- Tailwind CSS 3.4.1 (utility-first CSS framework)
- PostCSS 8.x (CSS transformations)
- Autoprefixer 10.0.1 (vendor prefixes)

**Code Quality:**
- ESLint 8.x with eslint-config-next 15.0.0

**Shopify:**
- Shopify Theme (Liquid templates)
- Shopify Forms (native) OR Powerful Contact Form Builder app
- Cowlendar booking app (Shopify app)

---

## 8. Technical Details

### Form Handling Architecture

**Data Flow:**
1. User fills out form on coaching contact page
2. Form submission → Shopify Forms app
3. Data stored in Shopify metaobject: `form_submissions`
4. Email notification triggered to owner email(s)
5. Owner can view submissions in Shopify Admin → Content → Metaobjects

**Form Validation:**
- Client-side: HTML5 validation (required, email format, phone format)
- Server-side: Shopify Forms app handles validation
- Spam protection: Google reCAPTCHA v2 or v3

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

**Form Field Specifications:**
- Name: `type="text"`, maxlength="100", required
- Email: `type="email"`, pattern validation, required
- Phone: `type="tel"`, optional, format: international or local
- Inquiry Type: `<select>` with 3 options, required
- Message: `<textarea>`, maxlength="1000", required, rows="6"

### Booking System Architecture

**Data Flow:**
1. Owner sets availability in Cowlendar admin (recurring schedule)
2. User visits coaching booking page
3. Cowlendar widget displays available slots
4. User selects slot, fills intake questions
5. Booking created in Cowlendar + synced to Google Calendar
6. Confirmation emails sent to user and owner
7. Booking stored in Shopify (if app supports) or Cowlendar database

**Availability Logic:**
- Weekly recurring schedule (e.g., Mon-Fri 10am-4pm)
- 30-minute consultation slots
- 15-minute buffer between bookings
- Block specific dates (holidays, vacations)
- Max advance booking: 30 days

**Booking Confirmation Email:**
```
Subject: Coaching Consultation Confirmed - {date} at {time}

Hi {customer_name},

Your initial coaching consultation with ArtBlendArt is confirmed!

Date: {date}
Time: {time} ({timezone})
Duration: 30 minutes

We'll send a reminder 24 hours before your appointment.

Questions we'll explore:
- {custom_question_1_answer}
- {custom_question_2_answer}

Looking forward to connecting!
```

### Security Considerations

**Form Security:**
- reCAPTCHA to prevent spam submissions
- HTTPS enforced on all form pages
- Email addresses not exposed in HTML
- Rate limiting on submission endpoint (app-provided)

**Data Privacy:**
- Form submissions stored in Shopify (GDPR-compliant infrastructure)
- Email addresses used only for communication, not shared
- Booking data retained per Shopify/Cowlendar privacy policy

### Edge Cases & Error Handling

**Form Submission:**
- Network failure → Show error message, preserve form data
- Invalid email → Client-side validation prevents submission
- Spam detected → reCAPTCHA challenge
- Email delivery failure → Logged in Shopify admin, retry mechanism

**Booking Calendar:**
- No availability → Message: "No slots currently available. Please check back soon."
- Double-booking → App prevents concurrent slot selection
- Past date selection → Disabled in UI
- Timezone handling → Cowlendar auto-detects user timezone, confirms in email

---

## 9. Development Setup

**Prerequisites:**
- Node.js 20.x installed
- Shopify CLI installed (`npm install -g @shopify/cli`)
- Shopify Partner account with store access
- Git repository cloned

**Local Development Setup:**

```bash
# 1. Navigate to project directory
cd /Users/linus/Workspace/artblendart.com

# 2. Install dependencies (if not already done)
npm install

# 3. Start Next.js development server (for mockups)
npm run dev
# Opens http://localhost:3000

# 4. Authenticate with Shopify (for theme development)
shopify auth login

# 5. Pull latest theme from live site
shopify theme pull --store 82e997-6e.myshopify.com --theme 149756051720

# 6. Start Shopify theme development server (optional, for live preview)
shopify theme dev --store 82e997-6e.myshopify.com
```

**Testing Form Locally:**
- Forms require Shopify app backend, cannot be fully tested locally
- Use Next.js mockup to test styling and layout
- Deploy to Shopify staging theme for functional testing

**Testing Booking Locally:**
- Booking requires Cowlendar app, cannot be tested locally
- Use Next.js mockup for UI/layout validation
- Configure Cowlendar in Shopify admin and test on staging theme

---

## 10. Implementation Guide

### Setup Steps

**Pre-Implementation Checklist:**

1. ✅ Verify Shopify store access (82e997-6e.myshopify.com)
2. ✅ Verify Shopify CLI authenticated
3. ✅ Create feature branch: `git checkout -b feature/forms-and-booking`
4. ✅ Pull latest theme files
5. ✅ Backup current live theme (export from Shopify admin)
6. ✅ Install Shopify Forms or Powerful Contact Form Builder app
7. ✅ Install Cowlendar booking app
8. ✅ Set up test email for notifications

### Implementation Steps

**Story 1: Form Handling Research & Selection (1-2 hours)**

1. Review top 3 form solutions:
   - Shopify Forms (native)
   - Powerful Contact Form Builder
   - Custom Form Builder by Websyms

2. Test each in Shopify admin:
   - Create sample form
   - Submit test data
   - Verify email delivery
   - Check customization options
   - Review pricing

3. Document decision in tech-spec
4. Uninstall non-selected apps

**Story 2: Implement Contact Form (3-4 hours)**

1. Configure selected form app in Shopify admin:
   - Create "Coaching Inquiry Form"
   - Add fields (name, email, phone, inquiry type, message)
   - Enable reCAPTCHA
   - Set up email notifications
   - Customize email template
   - Test submission flow

2. Integrate form into Shopify theme:
   - Edit `shopify-theme/sections/coaching-contact.liquid`
   - Add form app block/embed code
   - Style form container with Tailwind-equivalent classes
   - Ensure responsive layout

3. Create Next.js mockup:
   - Update `app/coaching/contact/page.tsx`
   - Add form HTML structure matching Shopify version
   - Apply Tailwind classes
   - Create `components/ContactForm.tsx` (optional)

4. Test form:
   - Submit test inquiry
   - Verify email receipt
   - Check data in Shopify admin metaobjects
   - Test on mobile, tablet, desktop

5. Deploy to Shopify:
   ```bash
   shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 --only='sections/coaching-contact.liquid' --allow-live
   ```

**Story 3: Booking Calendar Research & Selection (1-2 hours)**

1. Review top 3 booking solutions:
   - Cowlendar
   - Easy Appointment Booking
   - BookThatApp

2. Test each in Shopify admin:
   - Set up sample service
   - Configure availability
   - Test booking flow
   - Review calendar integration options
   - Check pricing and features
   - Test mobile booking experience

3. Document decision in tech-spec
4. Uninstall non-selected apps

**Story 4: Implement Booking Calendar (4-5 hours)**

1. Configure Cowlendar in Shopify admin:
   - Create service: "Initial Coaching Consultation"
   - Set duration: 30 minutes
   - Configure buffer: 15 minutes
   - Add custom intake questions
   - Set up weekly availability schedule
   - Connect Google Calendar
   - Customize confirmation email template
   - Test booking flow end-to-end

2. Create new Shopify section:
   - Create `shopify-theme/sections/coaching-booking.liquid`
   - Embed Cowlendar widget code
   - Add intro text and instructions
   - Style container to match page design
   - Add section to coaching template

3. Update coaching page:
   - Add booking CTA to main coaching page
   - Link to booking section
   - Consider adding to `app/coaching/page.tsx`

4. Create Next.js mockup (optional):
   - Create `app/coaching/booking/page.tsx`
   - Build visual calendar mockup component
   - Show sample available slots
   - Create `components/BookingCalendar.tsx`

5. Test booking system:
   - Book test appointment
   - Verify Google Calendar sync
   - Check confirmation emails (customer and owner)
   - Test timezone handling
   - Test mobile booking
   - Verify no-show/cancellation flow

6. Deploy to Shopify:
   ```bash
   shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 --allow-live
   ```

7. Update documentation:
   - Add app configuration notes to `SHOPIFY_INTEGRATION.md`
   - Document owner availability management process
   - Note any admin credentials

### Testing Strategy

**Unit Testing:**
- Next.js components: N/A (mockup only, no business logic)
- Form validation: Handled by Shopify Forms app
- Booking logic: Handled by Cowlendar app

**Integration Testing:**

**Form Testing:**
1. Submit valid form → Verify email received and data in admin
2. Submit with missing required field → Verify error message
3. Submit with invalid email → Verify validation error
4. Submit spam (multiple rapid submissions) → Verify reCAPTCHA challenge
5. Test on mobile device → Verify responsive layout and functionality

**Booking Testing:**
1. Book available slot → Verify confirmation email and calendar sync
2. Attempt to book past date → Verify disabled/blocked
3. Book when no availability → Verify appropriate message
4. Book consecutive slots → Verify buffer time enforced
5. Cancel booking → Verify cancellation email and calendar update
6. Test on mobile device → Verify mobile booking UX

**Cross-Browser Testing:**
- Chrome, Firefox, Safari (desktop)
- Safari Mobile (iOS), Chrome Mobile (Android)

**Accessibility Testing:**
- Form: Keyboard navigation, screen reader labels
- Booking: Keyboard navigation, ARIA labels for calendar

### Acceptance Criteria

**Story 1: Form Handling Research & Selection**
- ✅ At least 3 form solutions evaluated
- ✅ Decision documented with rationale
- ✅ Selected app installed and configured
- ✅ Test form created and working

**Story 2: Implement Contact Form**
- ✅ Form live on coaching contact page (Shopify)
- ✅ All required fields present and validated
- ✅ Email notifications working (owner receives submissions)
- ✅ Form data stored in Shopify admin
- ✅ Form matches existing design (colors, fonts, spacing)
- ✅ Responsive on mobile, tablet, desktop
- ✅ reCAPTCHA spam protection active
- ✅ Next.js mockup updated to match

**Story 3: Booking Calendar Research & Selection**
- ✅ At least 3 booking solutions evaluated
- ✅ Decision documented with rationale
- ✅ Selected app installed and configured
- ✅ Test service created and bookable

**Story 4: Implement Booking Calendar**
- ✅ Booking calendar live on coaching page (Shopify)
- ✅ Owner availability schedule configured
- ✅ Google Calendar integration working (two-way sync)
- ✅ Custom intake questions included in booking form
- ✅ Confirmation emails sent to customer and owner
- ✅ Booking interface matches existing design
- ✅ Responsive on mobile, tablet, desktop
- ✅ Timezone handling correct
- ✅ Buffer time between bookings enforced
- ✅ Documentation updated with app configuration

---

## 11. Developer Resources

### File Paths Reference

**Shopify Theme Files:**
- `/shopify-theme/sections/coaching-contact.liquid` (modify for form)
- `/shopify-theme/sections/coaching-booking.liquid` (create for booking)
- `/shopify-theme/templates/page.coaching.json` (modify if using template)

**Next.js Mockup Files:**
- `/app/coaching/contact/page.tsx` (modify for form mockup)
- `/app/coaching/page.tsx` (modify for booking CTA)
- `/app/coaching/booking/page.tsx` (create for booking mockup - optional)
- `/components/ContactForm.tsx` (create - optional)
- `/components/BookingCalendar.tsx` (create - optional)

**Configuration Files:**
- `/package.json` (dependencies)
- `/tsconfig.json` (TypeScript config)
- `/tailwind.config.ts` (Tailwind config)
- `/.env.local` (environment variables if needed)

**Documentation Files:**
- `/SHOPIFY_INTEGRATION.md` (update with app setup)
- `/CLAUDE.md` (project overview)
- `/docs/tech-spec.md` (this file)

### Key Code Locations

**Existing Components:**
- Root layout: `app/layout.tsx:9-19`
- Coaching hero example: `app/coaching/page.tsx:4-12`
- Coaching content example: `app/coaching/page.tsx:15-46`

**Shopify Sections:**
- Coaching hero: `shopify-theme/sections/coaching-hero.liquid`
- Coaching contact: `shopify-theme/sections/coaching-contact.liquid`

### Testing Locations

**Manual Testing:**
- Next.js mockups: http://localhost:3000 (local dev server)
- Shopify theme: https://artblendart.com (live site after deployment)
- Shopify preview: Use theme editor preview mode for staging

**No automated tests required** for this implementation (app-based functionality)

### Documentation to Update

1. **`SHOPIFY_INTEGRATION.md`** - Add sections:
   - Form app setup instructions
   - Booking app setup instructions
   - Email notification configuration
   - Availability management guide

2. **`CLAUDE.md`** - Update:
   - Add note about form and booking apps in project overview
   - Reference this tech-spec

3. **`README.md`** (if exists) - Update:
   - Mention coaching inquiry and booking features

---

## 12. UX/UI Considerations

**UI Components Affected:**

1. **Coaching Contact Page:**
   - MODIFY existing layout
   - ADD contact form component
   - STYLE form inputs, labels, submit button
   - ADD form submission success/error states

2. **Coaching Main Page:**
   - ADD booking CTA button/section
   - LINK to booking calendar

3. **Coaching Booking Section (new):**
   - CREATE booking calendar widget container
   - DESIGN slot selection interface
   - STYLE booking form (intake questions)
   - ADD booking confirmation UI

**UX Flow Changes:**

**Current Flow:**
- User reads coaching content → No direct action available

**New Flow (Forms):**
- User reads coaching content → Clicks "Contact" or navigates to contact page → Fills inquiry form → Submits → Receives confirmation → Owner receives email notification

**New Flow (Booking):**
- User reads coaching content → Clicks "Book Consultation" CTA → Views available slots → Selects slot → Fills intake questions → Confirms booking → Receives confirmation email → Booking added to calendars

**Visual/Interaction Patterns:**

**Follow Existing Design System:**
- Max width: `max-w-4xl` for content containers
- Padding: `px-6 py-16` for sections
- Headings: `text-4xl md:text-5xl font-light` (h1), `text-2xl font-light` (h2)
- Body text: `text-gray-700 leading-relaxed`
- Background accents: `bg-gray-50` for form/booking containers
- Buttons: Design to match existing link styles (currently minimal)

**New Patterns to Establish:**

**Form Styling:**
- Input fields: Neutral border, focus state with subtle color
- Labels: Above inputs, gray-700 text
- Required indicators: Asterisk or "(required)" text
- Error messages: Red text below invalid fields
- Submit button: Prominent but matching minimal aesthetic

**Calendar Styling:**
- Available slots: Clear visual distinction
- Selected slot: Highlighted state
- Unavailable slots: Grayed out or hidden
- Date picker: Clean, minimal design

**Responsive Design Considerations:**
- Forms: Single column on mobile, potentially two-column on desktop for shorter fields
- Calendar: Optimized for touch selection on mobile
- Booking confirmation: Clear display of date/time across screen sizes

**Accessibility:**

**Keyboard Navigation:**
- Tab through form fields in logical order
- Tab through calendar dates
- Enter to submit form
- Space/Enter to select calendar slot

**Screen Reader Compatibility:**
- Form labels associated with inputs (for/id attributes)
- Required fields announced
- Error messages linked to fields (aria-describedby)
- Calendar dates have aria-labels with full date
- Booking confirmation announced via aria-live region

**ARIA Labels:**
- Form: `<form aria-label="Coaching Inquiry Form">`
- Calendar: `<div role="dialog" aria-label="Select consultation date and time">`
- Submit button: Descriptive text, not just "Submit"

**Color Contrast:**
- Ensure all text meets WCAG AA standards (4.5:1 for normal text)
- Form inputs have visible borders in all states
- Error messages are not color-only (include icons or text)

**User Feedback:**

**Loading States:**
- Form submission: Button shows "Sending..." with spinner
- Calendar loading: Skeleton or spinner while fetching availability

**Error Messages:**
- Form validation: "Please enter a valid email address"
- Booking conflict: "This time slot is no longer available. Please select another."
- Network error: "Unable to submit. Please check your connection and try again."

**Success Confirmations:**
- Form submission: "Thank you! Your inquiry has been sent. We'll respond within 24 hours."
- Booking confirmation: "Consultation booked! Check your email for details."

**Progress Indicators:**
- Booking flow: Show current step if multi-step (1. Select time, 2. Enter details, 3. Confirm)

---

## 13. Testing Approach

**CONFORM TO EXISTING TEST STANDARDS:**
- No test framework currently detected in project
- Manual testing required for this implementation
- Future: Consider adding Jest + React Testing Library

**Test Strategy:**

**Manual Testing (Required):**

1. **Form Functionality Testing:**
   - Submit valid form with all fields
   - Submit with missing required fields
   - Submit with invalid email format
   - Submit with special characters in name/message
   - Trigger reCAPTCHA (rapid submissions)
   - Verify email delivery to owner
   - Check data appears in Shopify admin

2. **Booking Functionality Testing:**
   - View available slots for current week
   - Select and book a slot
   - Verify confirmation email sent
   - Check Google Calendar sync
   - Attempt to book unavailable slot
   - Test timezone display
   - Cancel booking and verify update

3. **Responsive Design Testing:**
   - Test forms on iPhone (Safari Mobile)
   - Test forms on Android (Chrome Mobile)
   - Test booking on tablet (iPad)
   - Test on desktop (Chrome, Firefox, Safari)

4. **Accessibility Testing:**
   - Navigate form using only keyboard (Tab, Enter)
   - Test with VoiceOver (Mac) or NVDA (Windows)
   - Verify color contrast with browser dev tools
   - Check focus indicators visible on all interactive elements

**Coverage:**
- All acceptance criteria must be tested and passing
- Critical user paths: Form submission, booking flow
- Edge cases: Invalid input, network errors, double-booking prevention

---

## 14. Deployment Strategy

**Deployment Steps:**

1. **Prepare for Deployment:**
   - Complete all stories and testing
   - Verify all acceptance criteria met
   - Back up current live theme (Shopify admin → Themes → Actions → Download)

2. **Deploy Next.js Mockups (if changed):**
   - No deployment needed (mockups are local development only)
   - Could deploy to Vercel for client preview if desired

3. **Deploy Shopify Theme:**
   ```bash
   # Push all coaching section files
   shopify theme push \
     --store 82e997-6e.myshopify.com \
     --theme 149756051720 \
     --allow-live

   # Or push specific files only:
   shopify theme push \
     --store 82e997-6e.myshopify.com \
     --theme 149756051720 \
     --only='sections/coaching-contact.liquid' \
     --only='sections/coaching-booking.liquid' \
     --allow-live
   ```

4. **Verify Deployment:**
   - Visit https://artblendart.com/pages/coaching (or contact page)
   - Test form submission on live site
   - Test booking on live site
   - Check email delivery from live site

5. **Final Configuration:**
   - Set owner email for form notifications (if not already)
   - Set owner availability in Cowlendar for next 30 days
   - Enable calendar sync to owner's Google Calendar

6. **Monitor Initial Usage:**
   - Check Shopify admin daily for first week
   - Verify form submissions appearing correctly
   - Verify bookings syncing to calendar
   - Respond to test or real inquiries promptly

**Rollback Plan:**

If critical issues discovered after deployment:

1. **Immediate Rollback:**
   ```bash
   # Restore previous theme version from backup
   # Upload backup .zip in Shopify admin → Themes → Add theme
   # Publish restored theme
   ```

2. **Or Selective Rollback:**
   - Revert specific section files using git:
   ```bash
   git checkout main -- shopify-theme/sections/coaching-contact.liquid
   git checkout main -- shopify-theme/sections/coaching-booking.liquid
   shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 --allow-live
   ```

3. **Disable Apps (if needed):**
   - Uninstall form app temporarily (submissions paused)
   - Disable Cowlendar service (bookings paused)

4. **Verify Rollback:**
   - Check live site loads without errors
   - Verify previous version of sections visible

**Monitoring:**

**What to Watch After Deployment:**

1. **Form Submissions:**
   - Monitor email inbox for submission notifications
   - Check Shopify Admin → Content → Metaobjects → Form Submissions
   - Track submission rate (expect 1-5 per week initially)

2. **Booking Activity:**
   - Monitor email for booking confirmations
   - Check Google Calendar for new appointments
   - Check Cowlendar admin for booking data
   - Track booking conversion rate

3. **Error Monitoring:**
   - Shopify theme errors: Check Shopify admin notifications
   - App errors: Check form/booking app admin dashboards
   - User reports: Monitor owner email for customer issues

4. **Performance:**
   - Page load time (coaching contact and booking pages)
   - Form submission speed
   - Calendar loading speed on mobile

5. **User Feedback:**
   - Note any confusion or friction in booking process
   - Gather feedback from first few coaching clients
   - Iterate on form fields or booking questions if needed

**Success Metrics:**
- Form submissions: Target 1-5 per week
- Booking rate: 50%+ of form submitters book consultation
- Email delivery: 100% success rate
- Calendar sync: 100% accuracy
- Mobile usage: 40-60% of submissions from mobile devices

---

**END OF TECH-SPEC**
