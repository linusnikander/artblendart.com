# ArtBlendArt Design System & Style Guide

**Version:** 1.0
**Source:** `/pages/coaching2` sections
**Last Updated:** 2026-01-25

This style guide documents all visual patterns, tokens, and component styles used across the ArtBlendArt coaching pages. Use this as a reference for Shopify checkout customization, new page development, and maintaining visual consistency.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Shadows & Elevation](#shadows--elevation)
5. [Buttons](#buttons)
6. [Cards](#cards)
7. [Badges](#badges)
8. [Icons](#icons)
9. [Backgrounds & Gradients](#backgrounds--gradients)
10. [Animations](#animations)
11. [Responsive Breakpoints](#responsive-breakpoints)
12. [Component Patterns](#component-patterns)
13. [Shopify Checkout Application](#shopify-checkout-application)

---

## Color Palette

### Primary Colors (Purple)

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Primary** | `#7c3aed` | `124, 58, 237` | Main brand color, buttons, links, accents |
| **Primary Dark** | `#6d28d9` | `109, 40, 217` | Button gradients, hover states |
| **Primary Light** | `#8b5cf6` | `139, 92, 246` | Glows, subtle backgrounds, decorative elements |
| **Primary Muted** | `rgba(139, 92, 246, 0.1)` | - | Icon backgrounds, hover fills |
| **Primary Border** | `rgba(139, 92, 246, 0.2)` | - | Card borders, decorative lines |

### Background Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Dark Navy** | `#1a1a2e` | `26, 26, 46` | Hero backgrounds, dark sections |
| **Dark Navy Light** | `#2d2d4a` | `45, 45, 74` | Gradient endpoints, cards on dark |
| **Light Purple** | `#f8f5ff` | `248, 245, 255` | Light section backgrounds |
| **White** | `#ffffff` | `255, 255, 255` | Cards, content areas |

### Text Colors

| Name | Hex | Opacity | Usage |
|------|-----|---------|-------|
| **Heading Dark** | `#1a1a2e` | 100% | Section headings on light backgrounds |
| **Body Dark** | `#4a4a68` | 100% | Body text on light backgrounds |
| **Body Muted** | `#6b6b8a` | 100% | Secondary text, captions |
| **Text Light** | `#ffffff` | 100% | Text on dark backgrounds |
| **Text Light Muted** | `rgba(255, 255, 255, 0.8)` | 80% | Secondary text on dark |
| **Text Light Subtle** | `rgba(255, 255, 255, 0.7)` | 70% | Tertiary text on dark |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success Green** | `#059669` | Wellness badge, positive indicators |
| **Success Light** | `#d1fae5` | Success badge backgrounds |
| **Warning Red** | `#ef4444` | Urgency, alerts |
| **Warning Light** | `#fca5a5` | Urgency badge text |
| **Warning BG** | `rgba(239, 68, 68, 0.2)` | Urgency badge background |

### Border Colors

| Name | Value | Usage |
|------|-------|-------|
| **Light Border** | `#e5e5e5` | Card borders on light backgrounds |
| **Purple Border** | `rgba(139, 92, 246, 0.1)` | Subtle accent borders |
| **Featured Border** | `#7c3aed` | Featured/highlighted cards |

---

## Typography

### Font Families

```css
:root {
  --ff-display: "Sora", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --ff-body: "Manrope", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}
```

| Font | Usage | Weight Range |
|------|-------|--------------|
| **Sora** | Headlines, display text, CTAs | 400-700 |
| **Manrope** | Body text, UI elements, forms | 400-600 |

### Type Scale (Golden Ratio 1.618×)

```css
:root {
  /* Base sizes */
  --fs-base: 16px;

  /* Mobile-first responsive sizes */
  --fs-xs: 12px;
  --fs-sm: 14px;
  --fs-normal: 16px;
  --fs-focus: clamp(20px, 4vw, 26px);
  --fs-cta: clamp(28px, 6vw, 42px);
  --fs-hero: clamp(32px, 8vw, 56px);
}
```

### Typography Tokens

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| **Hero Title** | Sora | clamp(32px, 8vw, 56px) | 700 | 1.1 | -0.02em |
| **Section Title** | Sora | clamp(28px, 5vw, 48px) | 700 | 1.2 | -0.02em |
| **Card Title** | Sora | 24px-28px | 600 | 1.3 | normal |
| **Subtitle** | Manrope | 18px-22px | 400 | 1.5 | normal |
| **Body** | Manrope | 16px-18px | 400 | 1.6-1.7 | normal |
| **Body Large** | Manrope | clamp(16px, 2.5vw, 20px) | 400 | 1.6 | normal |
| **Caption** | Manrope | 14px | 400 | 1.5 | normal |
| **Label** | Manrope | 12px | 600 | 1.2 | 0.08em |
| **Button** | Manrope | 16px-18px | 600 | 1 | normal |
| **Price** | Sora | 2.5rem (40px) | 700 | 1.2 | normal |

### Text Transform

| Style | Usage |
|-------|-------|
| `text-transform: uppercase` | Section labels, badges, overlines |
| `letter-spacing: 0.08em` | Uppercase text for readability |

---

## Spacing System

### Base Scale (8px grid)

```css
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
  --space-4xl: 5rem;     /* 80px */
  --space-5xl: 6rem;     /* 96px */
}
```

### Section Padding

| Section Type | Padding |
|--------------|---------|
| **Hero** | `clamp(80px, 15vh, 120px) 0` |
| **Standard Section** | `clamp(60px, 10vh, 100px) 0` |
| **Compact Section** | `3rem 0` to `4rem 0` |

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 5vw, 2rem);
}
```

### Component Spacing

| Component | Internal Padding | Gap/Margin |
|-----------|-----------------|------------|
| **Card** | `2rem` (32px) | - |
| **Card Compact** | `1.5rem` (24px) | - |
| **Button Large** | `1rem 2.5rem` | - |
| **Button Standard** | `0.875rem 2rem` | - |
| **Badge** | `0.25rem 0.75rem` | - |
| **Card Grid** | - | `2rem` gap |
| **Section Content** | - | `1.5rem` between items |

---

## Shadows & Elevation

### Shadow Tokens

```css
:root {
  /* Subtle - cards at rest */
  --shadow-sm: 0 2px 15px rgba(0, 0, 0, 0.05);

  /* Medium - elevated cards */
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.08);

  /* Large - featured elements */
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.1);

  /* Purple glow - branded shadow */
  --shadow-purple: 0 4px 15px rgba(124, 58, 237, 0.3);
  --shadow-purple-lg: 0 10px 40px rgba(124, 58, 237, 0.15);

  /* Hover states */
  --shadow-hover: 0 5px 25px rgba(139, 92, 246, 0.15);
}
```

### Elevation Levels

| Level | Shadow | Usage |
|-------|--------|-------|
| **0** | none | Flat elements, sections |
| **1** | `--shadow-sm` | Cards at rest |
| **2** | `--shadow-md` | Elevated cards, dropdowns |
| **3** | `--shadow-lg` | Modals, popovers |
| **Branded** | `--shadow-purple` | Primary buttons |
| **Featured** | `--shadow-purple-lg` | Featured cards |

---

## Buttons

### Primary Button (Gradient)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;

  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  color: #ffffff;

  font-family: var(--ff-body);
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;

  border: none;
  border-radius: 9999px; /* Full pill shape */

  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);

  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
}
```

### Secondary Button (Outline on Dark)

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;

  background: transparent;
  color: #ffffff;

  font-family: var(--ff-body);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;

  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 9999px;

  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.8);
}
```

### Text Link Button

```css
.btn-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  color: #7c3aed;
  font-weight: 600;
  text-decoration: none;

  transition: gap 0.2s ease;
}

.btn-text:hover {
  gap: 0.75rem;
}
```

### Button Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| **Small** | `0.5rem 1.25rem` | `0.875rem` |
| **Standard** | `0.875rem 2rem` | `1rem` |
| **Large** | `1rem 2.5rem` | `1.125rem` |

---

## Cards

### Standard Card

```css
.card {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 1.5rem; /* 24px */
  padding: 2rem;

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 5px 25px rgba(139, 92, 246, 0.15);
}
```

### Featured Card

```css
.card-featured {
  background: #ffffff;
  border: 2px solid #7c3aed;
  border-radius: 1.5rem;
  padding: 2rem;

  box-shadow: 0 10px 40px rgba(124, 58, 237, 0.15);
  transform: scale(1.02);
}
```

### Light Background Card

```css
.card-light {
  background: linear-gradient(135deg, #f8f5ff 0%, #ffffff 100%);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
}
```

### Dark Card

```css
.card-dark {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem;
}
```

### Card Border Radius Scale

| Size | Radius | Usage |
|------|--------|-------|
| **Small** | `0.5rem` (8px) | Nested elements, badges |
| **Medium** | `0.75rem` (12px) | Small cards, inputs |
| **Large** | `1rem` (16px) | Standard cards |
| **XL** | `1.5rem` (24px) | Feature cards, products |

---

## Badges

### Standard Badge

```css
.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;

  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  border-radius: 9999px;
}
```

### Badge Variants

| Variant | Background | Text Color | Border |
|---------|------------|------------|--------|
| **Primary** | `rgba(139, 92, 246, 0.15)` | `#7c3aed` | none |
| **Featured** | `#7c3aed` | `#ffffff` | none |
| **Success** | `#d1fae5` | `#059669` | none |
| **Urgency** | `rgba(239, 68, 68, 0.2)` | `#fca5a5` | none |
| **Glass** | `rgba(255, 255, 255, 0.15)` | `#ffffff` | none |
| **Outline** | `transparent` | `#6b6b8a` | `1px solid currentColor` |

### Section Label

```css
.section-label {
  display: inline-block;
  color: #7c3aed;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
}
```

---

## Icons

### Icon Sizing

| Size | Dimension | Usage |
|------|-----------|-------|
| **XS** | 14px | Inline with small text |
| **SM** | 16px | Buttons, badges |
| **MD** | 20px | Standard UI |
| **LG** | 24px | Feature lists |
| **XL** | 32px | Card icons |
| **2XL** | 48px | Section icons |

### Icon Container (Circle)

```css
.icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background: rgba(139, 92, 246, 0.1);
  border-radius: 50%;

  color: #7c3aed;
}

.icon-circle-lg {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  color: #ffffff;
}
```

### Arrow Icon

```css
.arrow-icon {
  transition: transform 0.2s ease;
}

.btn:hover .arrow-icon {
  transform: translateX(4px);
}
```

---

## Backgrounds & Gradients

### Section Backgrounds

```css
/* Dark hero/CTA sections */
.bg-dark {
  background: linear-gradient(135deg, #1a1a2e 0%, #2d2d4a 100%);
}

/* Light sections */
.bg-light {
  background: linear-gradient(135deg, #f8f5ff 0%, #ffffff 100%);
}

/* White sections */
.bg-white {
  background: #ffffff;
}
```

### Decorative Gradients

```css
/* Purple glow effect */
.glow-purple {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

/* Gradient overlay on dark */
.overlay-gradient {
  background: linear-gradient(
    135deg,
    rgba(124, 58, 237, 0.1) 0%,
    transparent 50%
  );
}
```

### Glass Effect

```css
.glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
```

---

## Animations

### Keyframes

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
```

### Animation Utilities

```css
.animate-fade-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-slide-left {
  animation: slideInLeft 0.6s ease-out forwards;
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

### Stagger Pattern

```css
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
```

### Transition Defaults

```css
:root {
  --transition-fast: 0.15s ease;
  --transition-normal: 0.2s ease;
  --transition-slow: 0.3s ease;
}

/* Standard interactive element */
.interactive {
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
```

---

## Responsive Breakpoints

### Breakpoint Values

```css
:root {
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1200px;
}
```

### Media Queries

```css
/* Mobile-first approach */
@media (min-width: 480px) { /* Small tablets */ }
@media (min-width: 768px) { /* Tablets/landscape */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large desktop */ }
```

### Responsive Typography

```css
.heading-responsive {
  font-size: clamp(28px, 5vw, 48px);
}

.body-responsive {
  font-size: clamp(16px, 2.5vw, 20px);
}
```

### Grid Patterns

```css
/* 3-column product grid */
.grid-products {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-products {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-products {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## Component Patterns

### Section Structure

```html
<section class="section">
  <div class="container">
    <header class="section-header">
      <span class="section-label">Label</span>
      <h2 class="section-title">Title</h2>
      <p class="section-subtitle">Subtitle</p>
    </header>
    <div class="section-content">
      <!-- Content -->
    </div>
  </div>
</section>
```

### Feature List Item

```css
.feature-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: #7c3aed;
}

.feature-text {
  color: #4a4a68;
  line-height: 1.6;
}
```

### Price Display

```css
.price {
  font-family: var(--ff-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a2e;
}

.price-currency {
  font-size: 1.5rem;
  vertical-align: super;
}

.price-period {
  font-size: 1rem;
  font-weight: 400;
  color: #6b6b8a;
}
```

### Number Circle (Process Steps)

```css
.number-circle {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 54px;  /* 36px * 1.5 as per spec */
  height: 54px;

  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  border-radius: 50%;

  color: #ffffff;
  font-family: var(--ff-display);
  font-size: 24px;  /* 16px * 1.5 */
  font-weight: 700;
}
```

---

## Shopify Checkout Application

### Available Customization (All Plans)

These tokens can be applied in Shopify Admin → Settings → Checkout:

#### Branding

| Setting | Value |
|---------|-------|
| **Logo** | Upload ArtBlendArt logo |
| **Logo Position** | Left or Center |
| **Logo Size** | Small/Medium/Large |

#### Colors

| Setting | Hex Value |
|---------|-----------|
| **Accent Color** | `#7c3aed` |
| **Button Color** | `#7c3aed` |
| **Error Color** | `#ef4444` |
| **Background** | `#ffffff` or `#f8f5ff` |
| **Form Background** | `#ffffff` |

#### Typography

| Setting | Value |
|---------|-------|
| **Heading Font** | Sora (if available) or system sans-serif |
| **Body Font** | Manrope (if available) or system sans-serif |

#### Form Fields

| Setting | Value |
|---------|-------|
| **Border Color** | `#e5e5e5` |
| **Focus Border** | `#7c3aed` |
| **Border Radius** | `0.5rem` (8px) |

### Checkout Branding CSS (Shopify Plus Only)

For Shopify Plus stores with checkout.liquid access:

```css
/* Primary button */
.btn {
  background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
  border-radius: 9999px;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
}

/* Order summary */
.order-summary {
  background: #f8f5ff;
  border-radius: 1rem;
}

/* Focus states */
input:focus,
select:focus {
  border-color: #7c3aed;
  box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
}
```

---

## Quick Reference: CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary: #7c3aed;
  --color-primary-dark: #6d28d9;
  --color-primary-light: #8b5cf6;
  --color-bg-dark: #1a1a2e;
  --color-bg-light: #f8f5ff;
  --color-text-dark: #4a4a68;
  --color-text-muted: #6b6b8a;
  --color-border: #e5e5e5;
  --color-success: #059669;
  --color-error: #ef4444;

  /* Typography */
  --ff-display: "Sora", system-ui, sans-serif;
  --ff-body: "Manrope", system-ui, sans-serif;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;

  /* Border Radius */
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 15px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.1);
  --shadow-purple: 0 4px 15px rgba(124, 58, 237, 0.3);

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.2s ease;
  --transition-slow: 0.3s ease;
}
```

---

## Appendix: Source Files

| File | Contains |
|------|----------|
| `sections/coaching2-hero.liquid` | Hero section patterns, primary/secondary buttons |
| `sections/coaching2-process.liquid` | Process steps, number circles, step cards |
| `sections/coaching2-products.liquid` | Product cards, pricing, feature lists, badges |
| `sections/coaching2-personas.liquid` | Persona cards, avatar patterns |
| `sections/coaching2-about.liquid` | About section, credential cards, image styling |
| `sections/coaching2-cta.liquid` | Dark CTA section, urgency patterns, glows |
| `docs/font-instructions.md` | Typography specification |

---

*This style guide is a living document. Update as new patterns are introduced.*
