# Google Forms Setup Instructions

## 📋 Overview

This guide will help you create 3 Swedish coaching forms automatically using Google Apps Script.

**Forms to be created:**
1. **Form 1:** Inför vårt första samtal (Pre-consultation, 5 questions)
2. **Form 2:** Efter varje samtal (After each session, 7 questions)
3. **Form 3:** Slututvärdering (Final evaluation, 11 questions)

**Time required:** 5 minutes
**Cost:** FREE (uses your Google account)

---

## 🚀 Step-by-Step Setup

### Step 1: Open Google Apps Script

1. Open a new browser tab
2. Go to: **https://script.google.com**
3. Sign in with your Google account (the one you want to own the forms)

### Step 2: Create New Project

1. Click **"+ New project"** button (top left)
2. You'll see a code editor with some default code

### Step 3: Paste the Script

1. **Select all** the default code (Cmd+A / Ctrl+A)
2. **Delete** it
3. Open the file: `/Users/linus/Workspace/artblendart.com/google-forms-creator.js`
4. **Copy all** the code from that file
5. **Paste** it into the Google Apps Script editor

### Step 4: Save the Project

1. Click the **disk icon** (save) or press Cmd+S / Ctrl+S
2. Name the project: **"ArtBlendArt Coaching Forms Creator"**
3. Click **OK**

### Step 5: Run the Script

1. At the top, make sure the function dropdown shows: **`createCoachingForms`**
2. Click the **▶️ Run** button
3. **First time only:** You'll see "Authorization required"
   - Click **Review permissions**
   - Choose your Google account
   - Click **Advanced** (bottom left)
   - Click **Go to ArtBlendArt Coaching Forms Creator (unsafe)**
   - Click **Allow**
   - (This is safe - it's your own script creating forms in your account)

### Step 6: Wait for Execution

1. The script will run (takes 5-10 seconds)
2. You'll see "Execution started..." at the bottom
3. Wait for "Execution completed"

### Step 7: Get Your Form URLs

1. Click **"Execution log"** at the bottom of the screen
2. You'll see output like this:

```
=== ✅ ALL FORMS CREATED SUCCESSFULLY ===

📋 FORM 1 - Inför vårt första samtal
Edit URL: https://docs.google.com/forms/d/.../edit
Public URL: https://docs.google.com/forms/d/.../viewform
Shortened URL: https://forms.gle/xxxxx

📋 FORM 2 - Efter varje samtal
Edit URL: https://docs.google.com/forms/d/.../edit
Public URL: https://docs.google.com/forms/d/.../viewform
Shortened URL: https://forms.gle/xxxxx

📋 FORM 3 - Slututvärdering
Edit URL: https://docs.google.com/forms/d/.../edit
Public URL: https://docs.google.com/forms/d/.../viewform
Shortened URL: https://forms.gle/xxxxx
```

3. **Copy all three "Shortened URL" links** - you'll use these in Shopify

---

## ✅ Verify Forms Were Created

1. Open a new tab and go to: **https://drive.google.com**
2. You should see 3 new Google Forms:
   - ✨ Inför vårt första samtal – Kreativt skapande & Coaching
   - ✨ Reflektion efter samtal – Kreativt skapande & Coaching
   - ✨ Slututvärdering – Kreativt skapande & Coaching

3. Click on each one to verify it has all the questions

---

## 🔔 Enable Email Notifications

For each form, you'll want to get notified when someone submits:

1. Open the form in Google Forms (click "Edit URL" from the log)
2. Click the **"Responses"** tab (top)
3. Click the **⋮** (three dots) menu
4. Click **"Get email notifications for new responses"**
5. ✅ Enable it
6. Repeat for all 3 forms

---

## 🎨 Optional: Customize Appearance

If you want to adjust colors or add header images:

1. Open form in Google Forms
2. Click the **🎨 palette icon** (top right)
3. Choose theme color (suggest: muted green or soft gray to match artblendart.com)
4. Click **"Choose image"** to add header (optional)
5. Upload a simple creative/artistic image

---

## 📊 View Responses

Responses will be stored in each form. To view:

**Option 1: In Google Forms**
- Open the form
- Click **"Responses"** tab
- See individual responses or summary

**Option 2: In Google Sheets (Recommended)**
- Open the form
- Click **"Responses"** tab
- Click the **Google Sheets icon** (green spreadsheet)
- Click **"Create spreadsheet"**
- All responses will automatically appear in a spreadsheet

---

## 🔄 To Update Forms Later

If you need to change questions or settings:

**Option A: Edit manually in Google Forms**
- Just open the form and edit like normal

**Option B: Update via script**
1. Edit the `google-forms-creator.js` file
2. Go back to https://script.google.com
3. Paste updated code
4. Click **Run** again
5. **Note:** This creates NEW forms (old ones remain)
6. Delete old forms from Google Drive if needed

---

## 📝 Next Step: Integrate with Shopify

Once you have the 3 form URLs, you'll:
1. Create Shopify pages for each form
2. Embed the Google Forms using iframe or links
3. Style the pages to match your coaching aesthetic

(See SHOPIFY_INTEGRATION.md for embedding instructions)

---

## 🆘 Troubleshooting

**"Authorization required" won't go away**
- Make sure you're signed into the correct Google account
- Try incognito/private browsing window
- Clear browser cache and try again

**Script fails with error**
- Check the error message in Execution log
- Common issue: Quota exceeded (Google limits form creation, wait 24 hours)
- Contact if you need help debugging

**Forms created but can't find them**
- Check Google Drive: https://drive.google.com
- Search for "Inför vårt första samtal"
- They might be in "Recent" or "My Drive"

---

## ✅ Success Checklist

- [ ] Google Apps Script created and saved
- [ ] Script executed successfully (no errors)
- [ ] 3 forms visible in Google Drive
- [ ] Form URLs copied from execution log
- [ ] Email notifications enabled for all 3 forms
- [ ] Test submitted to each form to verify they work
- [ ] Responses viewable in Google Forms or Sheets

**Once complete, you're ready to integrate with Shopify!** 🎉
