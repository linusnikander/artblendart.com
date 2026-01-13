# ArtBlendArt – Förslag på meta-taggar (Google/Ads + delning)

Sida: https://artblendart.com/pages/coaching

---

## 1) Meta-taggar som faktiskt är värda att optimera

### A. Title tag (`<title>`)
- Viktig för sökresultatets rubrik och för vad Google tror sidan handlar om.
- Håll den **unik**, **konkret**, och runt **50–60 tecken** om möjligt.

**Förslag (svenska):**
1) `Kreativ coachning online – 1:1 stöd i ditt skapande | ArtBlendArt`  
2) `Konstnärlig coachning online – struktur, feedback, momentum | ArtBlendArt`  
3) `Kreativ coaching & portfolio-stöd online | ArtBlendArt`

### B. Meta description (`<meta name="description">`)
- Påverkar normalt inte ranking direkt, men påverkar **CTR** (klickfrekvens) och tydlighet.
- Skriv för människor, ca **140–160 tecken**, med tydlig “vad + för vem + CTA”.

**Förslag (svenska):**
1) `Personlig kreativ coachning online. 15 min avstämning, 60 min sessioner, sammanfattning och hemuppgifter. Boka ett första samtal.`  
2) `Fastnat i skapandet? Få struktur, feedback och stöd att utveckla ditt uttryck. Online 1:1. Boka en avstämning.`

> Om 15 min avstämning inte är “kostnadsfri”, skriv inte det. Matcha alltid verkligheten.

### C. Canonical (`<link rel="canonical" href="...">`)
- Viktigt om samma innehåll kan nås via flera URL:er (vanligt i Shopify).
- Ska peka på *den* URL du vill att Google ska indexera.

### D. Robots
- Vanligtvis ska sidan vara indexerbar: `index,follow`
- Använd `noindex` bara för sidor du *inte* vill ska synas i sök.

### E. Open Graph + Twitter (för delning)
Inte primärt för Google Ads, men bra för när sidan delas i sociala medier/DM:
- `og:title`, `og:description`, `og:image`, `og:url`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

### F. Structured data (Schema.org via JSON-LD)
Ofta mycket värdefullt för tjänstesidor:
- `Service` + `Provider` (Organization/Person)
- Ev. `FAQPage` om du lägger in FAQ-sektion (vilket även kan höja konvertering)

> Obs: `meta keywords` används i praktiken inte av Google och är inte värd att lägga tid på.

---

## 2) Rekommenderade meta-taggar (konkreta exempel)

### Minimal “must have” (HTML)
```html
<title>Kreativ coachning online – 1:1 stöd i ditt skapande | ArtBlendArt</title>
<meta name="description" content="Personlig kreativ coachning online. 15 min avstämning, 60 min sessioner, sammanfattning och hemuppgifter. Boka ett första samtal.">
<link rel="canonical" href="https://artblendart.com/pages/coaching">
<meta name="robots" content="index,follow">
```

### Open Graph / Twitter
```html
<meta property="og:type" content="website">
<meta property="og:title" content="Kreativ coachning online – ArtBlendArt">
<meta property="og:description" content="1:1 coachning för kreativt skapande. Struktur, feedback och momentum. Boka en avstämning.">
<meta property="og:url" content="https://artblendart.com/pages/coaching">
<meta property="og:image" content="https://artblendart.com/cdn/.../coaching-og.jpg">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Kreativ coachning online – ArtBlendArt">
<meta name="twitter:description" content="1:1 coachning för kreativt skapande. Struktur, feedback och momentum.">
<meta name="twitter:image" content="https://artblendart.com/cdn/.../coaching-og.jpg">
```

### Schema.org (JSON-LD) för tjänsten
*(Använd riktiga värden för namn/URL/bilder. Lämna inte placeholders i produktion.)*
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Kreativ coachning online",
  "description": "Personlig 1:1 coachning för kreativt skapande med struktur, feedback och hemuppgifter.",
  "serviceType": "Coaching",
  "provider": {
    "@type": "Organization",
    "name": "ArtBlendArt",
    "url": "https://artblendart.com"
  },
  "areaServed": "SE",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://artblendart.com/pages/coaching",
    "availableLanguage": ["sv", "en"]
  }
}
</script>
```

---

## 3) Shopify: var du uppdaterar detta i UI

### Title + meta description (per sida)
**Shopify Admin → Online Store → Pages → (coaching-sidan) → “Search engine listing” → Edit**
- Sätt “Page title” (Title tag)
- Sätt “Meta description”

### Canonical / OG / Twitter / JSON-LD (i theme)
Ligger normalt i:
- `layout/theme.liquid` (head-sektionen)
- Eller via en SEO-app

Bra upplägg:
- Default OG tags globalt i `theme.liquid`
- Möjlighet till **sid-specifik og:image** via metafield på sidan (valfritt men ofta värt)

---

## 4) Viktig Ads-koppling (meta-taggar räcker inte)
För Google Ads påverkas upplevd relevans/Quality Score ofta mer av:
- Rubrik/H1 + första 100–200 orden på sidan (att de matchar annonsens sökintention)
- Tydlig CTA + “vad ingår”
- Laddtid och mobilupplevelse

Meta-taggarna bör därför spegla exakt samma primära fraser som:
- H1
- CTA-knappen
- Första “value prop”-blocket

---

## 5) Nästa steg (om du vill)
Jag kan skriva en färdig **Shopify Liquid head-snippet** som:
1) tar sidans SEO-fält automatiskt,  
2) faller tillbaka till bra defaults, och  
3) stödjer en valfri OG-bild per sida via metafields.
