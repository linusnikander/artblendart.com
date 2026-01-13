# Typography Spec — System C (Landing Page)
Target: ArtBlendArt coaching landing page  
Goal: Contemporary, structured, “productized” feel with strong hierarchy and clean readability.  
Scale rule: **Golden ratio 1.618** between role levels.

---

## 1) Typefaces
### Primary (Body / UI)
- **Manrope** (Google Fonts)
- Weights used: **400, 500, 600**  
- Usage: all body copy, lists, labels, meta text, small UI text, supporting text.

### Display (Headlines / Focus / CTA)
- **Sora** (Google Fonts)
- Weights used: **600, 700**
- Usage: hero headline, section headings, card headings, and all CTA/button text.

---

## 2) Type Scale (1.618× steps)
Base is in px; rem equivalents assume 16px root.

| Role | Token | Exact | Practical | Rem |
|---|---|---:|---:|---:|
| Normal (Body) | `--fs-normal` | 16.000px | **16px** | 1.000rem |
| Focus (Section headings / card titles) | `--fs-focus` | 25.888px | **26px** | 1.618rem |
| CTA (Hero headline) | `--fs-cta` | 41.887px | **42px** | 2.618rem |

Implementation note: rounding to **26px** and **42px** is intended and acceptable.

---

## 3) Role Mapping (What gets what)
### CTA level (Hero)
- **Font:** Sora
- **Size:** 42px (2.618rem)
- **Weight:** 700
- **Use for:** primary hero headline only (top of page)
- **Tone:** decisive, action-forward

### Focus level (Section headings)
- **Font:** Sora
- **Size:** 26px (1.618rem)
- **Weight:** 600
- **Use for:** section headings (e.g., “Hur det fungerar”), package card titles, major subheadings
- **Tone:** clear structure, strong hierarchy

### Normal level (Body)
- **Font:** Manrope
- **Size:** 16px (1rem)
- **Weight:** 400 (default), 500 for emphasis
- **Use for:** paragraphs, bullets, explanatory text, FAQs, supporting content

### Buttons / CTAs (UI)
- **Font:** Sora
- **Size:** 16px (align with Normal for usability)
- **Weight:** 700
- **Use for:** all primary/secondary buttons and link-CTAs

---

## 4) Line-height & Letter-spacing
### CTA / Hero (Sora 42px)
- **Line-height:** 1.10 (range 1.05–1.15 acceptable)
- **Letter-spacing:** -0.4px (or -0.01em if using em-based tracking)
- **Max width:** 10–14 words per line preferred (avoid spanning entire screen)

### Focus / H2 (Sora 26px)
- **Line-height:** 1.20–1.25
- **Letter-spacing:** -0.2px (or -0.005em)

### Body (Manrope 16px)
- **Line-height:** 1.60
- **Letter-spacing:** 0 (default)
- **Paragraph spacing:** 0.75–1.0em between paragraphs

### Button text (Sora 16px)
- **Line-height:** 1.0–1.2
- **Letter-spacing:** +0.2px optional if buttons feel too tight

---

## 5) Weights & Emphasis Rules
- Body emphasis: use **Manrope 500** (not bolding everything).
- Avoid mixing too many weights: keep to **Manrope 400/500** and **Sora 600/700**.
- Use ALL CAPS sparingly. If used for tiny labels, apply:
  - Manrope 600, 12px, letter-spacing +0.08em

---

## 6) Responsive Behavior (Landing page)
Maintain the ratio conceptually, but clamp sizes to avoid oversized mobile headlines.

Recommended clamps:
- **Hero (CTA):**
  - `clamp(32px, 4.5vw, 42px)`
- **Section headings (Focus):**
  - `clamp(22px, 2.8vw, 26px)`
- **Body (Normal):**
  - keep 16px on desktop; allow 15–16px on small screens if needed

---

## 7) Copy Hierarchy Examples
### Hero block
- H1 (CTA / Sora 42/700):
  - “Skapa momentum på 3 samtal.”
- Supporting line (Body / Manrope 16/400):
  - “Tydligt nästa steg — med trygghet och riktning.”
- Primary button (Sora 16/700):
  - “Boka konsultation”

### Section
- H2 (Focus / Sora 26/600): “Hur det fungerar”
- Body (Manrope 16/400): short paragraphs or bullets

### Package cards
- Card title (Focus / Sora 26/600)
- Price/meta (Manrope 16/500 or 14/500)
- Bullets (Manrope 16/400)
- Card CTA button (Sora 16/700)

---

## 8) CSS Tokens (ready to paste)
```css
:root{
  /* Fonts */
  --ff-body: "Manrope", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --ff-display: "Sora", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;

  /* Golden ratio scale */
  --fs-normal: 16px;
  --fs-focus:  calc(var(--fs-normal) * 1.618); /* 25.888px */
  --fs-cta:    calc(var(--fs-focus)  * 1.618); /* 41.887px */

  /* Practical rounded sizes (preferred in production) */
  --fs-normal-r: 16px;
  --fs-focus-r:  26px;
  --fs-cta-r:    42px;
}

/* Role styles */
.t-body{
  font-family: var(--ff-body);
  font-size: var(--fs-normal-r);
  line-height: 1.6;
  font-weight: 400;
}

.t-focus{
  font-family: var(--ff-display);
  font-size: var(--fs-focus-r);
  line-height: 1.22;
  font-weight: 600;
  letter-spacing: -0.2px;
}

.t-cta{
  font-family: var(--ff-display);
  font-size: var(--fs-cta-r);
  line-height: 1.10;
  font-weight: 700;
  letter-spacing: -0.4px;
}

.btn{
  font-family: var(--ff-display);
  font-size: var(--fs-normal-r);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: 0;
}

/* Responsive clamps (optional) */
.t-cta{ font-size: clamp(32px, 4.5vw, 42px); }
.t-focus{ font-size: clamp(22px, 2.8vw, 26px); }
