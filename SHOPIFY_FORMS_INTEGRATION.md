# Shopify Google Forms Integration Guide

## 📋 Your Form URLs

**Form 1 - Inför vårt första samtal:**
- Shortened URL: `https://forms.gle/Sa7JsjhvcisP9b9XA`
- Edit URL: https://docs.google.com/forms/d/1JCnak8GGCF4Dl25kV4nvZJtCuoj3sZHVonIuWPq82Pk/edit

**Form 2 - Efter varje samtal:**
- Shortened URL: `https://forms.gle/aSMYCe5qDnjWtGca6`
- Edit URL: https://docs.google.com/forms/d/1Yyq-VZ9v341A06adoDRewHdhE9aQOJy81aotFtqiENg/edit

**Form 3 - Slututvärdering:**
- Shortened URL: `https://forms.gle/DuZfs1mSN8hAGmY57`
- Edit URL: https://docs.google.com/forms/d/1MOuOVZYi-bxfLDnkoSDLa96hamZFOmXuncpiM4A4hto/edit

---

## 🎯 Integration Strategy

We'll create a dedicated page in your Shopify coaching section where clients can access the appropriate form based on their coaching journey stage.

**Two integration methods available:**

1. **Method A: Embedded iframes** (forms appear directly on your Shopify pages)
2. **Method B: Direct links** (buttons that open forms in new tabs)

**Recommendation:** Use **Method B (direct links)** for cleaner mobile experience and better Google Forms features (progress bar, multi-page navigation).

---

## 🚀 Method B: Direct Links (Recommended)

### Step 1: Create Shopify Page for Forms Access

1. **Log into Shopify Admin:** https://82e997-6e.myshopify.com/admin
2. **Navigate to:** Online Store → Pages
3. **Click:** Add page
4. **Title:** "Coaching Formulär"
5. **Content:** (paste this HTML in the rich text editor, or use "Show HTML" view)

```html
<div class="max-w-4xl mx-auto px-6 py-16">

  <h1 class="text-4xl md:text-5xl font-light text-center mb-8">
    Coaching Formulär
  </h1>

  <p class="text-xl text-center text-gray-700 mb-12">
    Välj det formulär som passar var du är i din coachingresa
  </p>

  <!-- Form 1: Pre-consultation -->
  <div class="bg-gray-50 p-8 rounded-lg mb-6">
    <h2 class="text-2xl font-light mb-4">
      ✨ Inför vårt första samtal
    </h2>
    <p class="text-gray-700 leading-relaxed mb-6">
      Fyll i detta formulär innan vår första 15-minuters avstämning.
      Det hjälper mig att förstå dina mål och förväntningar.
    </p>
    <p class="text-sm text-gray-600 mb-4">
      <strong>Tid:</strong> Ca 5 minuter
    </p>
    <a href="https://forms.gle/Sa7JsjhvcisP9b9XA"
       target="_blank"
       rel="noopener noreferrer"
       class="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
      Öppna formulär →
    </a>
  </div>

  <!-- Form 2: After each session -->
  <div class="bg-gray-50 p-8 rounded-lg mb-6">
    <h2 class="text-2xl font-light mb-4">
      ✨ Reflektion efter samtal
    </h2>
    <p class="text-gray-700 leading-relaxed mb-6">
      Fyll i detta formulär efter varje coachingsamtal.
      Dina svar hjälper mig att anpassa kommande samtal efter dina behov.
    </p>
    <p class="text-sm text-gray-600 mb-4">
      <strong>Tid:</strong> Ca 10 minuter
    </p>
    <a href="https://forms.gle/aSMYCe5qDnjWtGca6"
       target="_blank"
       rel="noopener noreferrer"
       class="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
      Öppna formulär →
    </a>
  </div>

  <!-- Form 3: Final evaluation -->
  <div class="bg-gray-50 p-8 rounded-lg mb-6">
    <h2 class="text-2xl font-light mb-4">
      ✨ Slututvärdering
    </h2>
    <p class="text-gray-700 leading-relaxed mb-6">
      Fyll i detta formulär efter de tre coachingsessionerna.
      Din feedback är ovärderlig för att utveckla coachningen vidare.
    </p>
    <p class="text-sm text-gray-600 mb-4">
      <strong>Tid:</strong> Ca 10-15 minuter
    </p>
    <a href="https://forms.gle/DuZfs1mSN8hAGmY57"
       target="_blank"
       rel="noopener noreferrer"
       class="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
      Öppna formulär →
    </a>
  </div>

  <div class="mt-12 text-center text-gray-600 text-sm">
    <p>Har du frågor om formulären? Kontakta mig gärna.</p>
  </div>

</div>
```

6. **Visibility:** Visible
7. **Theme template:** Default page
8. **Click:** Save

### Step 2: Link to Forms Page from Coaching Page

Edit your main coaching page to include a link to the forms:

1. **Navigate to:** Online Store → Pages
2. **Find:** Your main coaching page
3. **Add this section** near the end (before final CTA):

```html
<div class="max-w-4xl mx-auto px-6 py-8 text-center">
  <h2 class="text-2xl font-light mb-4">
    Redo att börja?
  </h2>
  <p class="text-gray-700 mb-6">
    Fyll i formuläret inför vårt första samtal
  </p>
  <a href="/pages/coaching-formular"
     class="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition">
    Till formulär →
  </a>
</div>
```

4. **Click:** Save

---

## 🎨 Method A: Embedded iframes (Alternative)

If you prefer forms embedded directly on the page:

### Get Embed Code from Google Forms

1. Open each form's **Edit URL**
2. Click **Send** button (top right)
3. Click **< > (Embed HTML)** tab
4. Copy the iframe code
5. Click **Copy**

### Example: Embed Form 1

1. Create or edit a Shopify page
2. Switch to **HTML view** (< > button)
3. Paste this code:

```html
<div class="max-w-4xl mx-auto px-6 py-16">

  <h1 class="text-4xl font-light text-center mb-8">
    Inför vårt första samtal
  </h1>

  <div class="w-full" style="max-width: 640px; margin: 0 auto;">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSf7sO7RJpm-Q3PDWsfPyNnVhyMWVB23W8K4wVpRX14m9VakhQ/viewform?embedded=true"
      width="100%"
      height="1800"
      frameborder="0"
      marginheight="0"
      marginwidth="0">
      Läser in…
    </iframe>
  </div>

</div>
```

**Note:** Adjust `height` value based on form length (test and tweak).

---

## 📧 Enable Email Notifications

For each form, enable notifications so you know when someone submits:

1. Open form in Google Forms (use Edit URL)
2. Click **"Responses"** tab
3. Click **⋮** (three dots)
4. Click **"Get email notifications for new responses"**
5. Toggle ON
6. Repeat for all 3 forms

---

## 📊 View and Manage Responses

### Option 1: View in Google Forms

1. Open form (Edit URL)
2. Click **"Responses"** tab
3. See individual responses or summary

### Option 2: Export to Google Sheets (Recommended)

1. Open form (Edit URL)
2. Click **"Responses"** tab
3. Click **Google Sheets icon** (green spreadsheet)
4. Click **"Create spreadsheet"**
5. Name it (e.g., "Form 1 - Coaching Responses")
6. All responses auto-populate in real-time

**Benefits of Google Sheets:**
- Easier to analyze data
- Can sort/filter responses
- Export to Excel if needed
- Create charts/graphs
- Share with others (if needed)

---

## 🔗 URL Mapping

Once pages are created, your URLs will be:

- **Forms overview page:** `https://artblendart.com/pages/coaching-formular`
- **Form 1 direct:** `https://forms.gle/Sa7JsjhvcisP9b9XA`
- **Form 2 direct:** `https://forms.gle/aSMYCe5qDnjWtGca6`
- **Form 3 direct:** `https://forms.gle/DuZfs1mSN8hAGmY57`

You can share these links directly with coaching clients via email or during sessions.

---

## 🎨 Styling Customization

The HTML provided uses Tailwind-style classes that should work with your existing theme. If styling doesn't render correctly:

**Option A: Use theme's native classes**
- Replace `bg-gray-50` with your theme's class
- Replace `text-gray-700` with your theme's class
- Adjust as needed

**Option B: Add custom CSS**
1. Navigate to: Online Store → Themes
2. Click **Actions** → **Edit code**
3. Open `assets/custom.css` (or create it)
4. Add custom styles:

```css
.coaching-form-card {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.coaching-form-button {
  display: inline-block;
  background: #000;
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background 0.2s;
}

.coaching-form-button:hover {
  background: #333;
}
```

---

## ✅ Testing Checklist

Before going live:

- [ ] Test Form 1 submission (submit test data)
- [ ] Verify email notification received
- [ ] Check response appears in Google Forms
- [ ] Test Form 2 submission
- [ ] Test Form 3 submission
- [ ] Test links on mobile device
- [ ] Test links on desktop
- [ ] Verify all 3 forms display correctly
- [ ] Delete test submissions from Google Forms (Responses → ⋮ → Delete response)

---

## 🚀 Deployment

Once you've created the Shopify page and tested:

1. **Publish the page** (if not already published)
2. **Test on live site:** https://artblendart.com/pages/coaching-formular
3. **Share link** with coaching clients
4. **Monitor submissions** in Google Forms

---

## 🆘 Troubleshooting

**Forms not displaying in iframe:**
- Check iframe src URL is correct
- Try increasing height value
- Test in different browsers

**Links not working:**
- Verify shortened URLs are correct
- Make sure `target="_blank"` is included
- Check for typos in URLs

**Styling looks wrong:**
- Your theme might not support Tailwind classes
- Use Method A (custom CSS) instead
- Or simplify to basic HTML styling

**Email notifications not working:**
- Check spam folder
- Re-enable in Google Forms settings
- Verify correct Google account email

---

## 📝 Next Steps After Integration

1. **Test all 3 forms** by filling them out yourself
2. **Enable email notifications** for all forms
3. **Create Google Sheets** for each form (for easier response management)
4. **Share form URLs** with coaching clients as needed
5. **Monitor responses** regularly

---

## ✅ Success! Forms Are Live

Once integrated, your coaching clients can:
- Fill Form 1 before first consultation
- Fill Form 2 after each session
- Fill Form 3 after completing 3 sessions

All responses go directly to your Google account, and you get email notifications for each submission!

**Well done, BMad!** 🎉
