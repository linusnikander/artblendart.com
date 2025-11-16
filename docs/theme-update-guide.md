# Shopify Theme Update Guide

**Project:** ArtBlendArt (artblendart.com)
**Last Updated:** 2025-11-16
**Status:** Reference guide for updating base theme while preserving customizations

---

## Table of Contents

1. [Understanding Shopify Theme Architecture](#understanding-shopify-theme-architecture)
2. [Current Theme Status](#current-theme-status)
3. [Your Custom Files](#your-custom-files)
4. [When to Update](#when-to-update)
5. [Theme Update Process](#theme-update-process)
6. [Testing Checklist](#testing-checklist)
7. [Rollback Procedures](#rollback-procedures)
8. [Alternative: Treat as Custom Theme](#alternative-treat-as-custom-theme)

---

## Understanding Shopify Theme Architecture

### How Shopify Themes Work

**Each theme is a complete, independent copy:**
- When you start with Dawn theme v1.0 and customize it, you create YOUR version
- Your customizations create a frozen snapshot - you don't automatically receive updates
- If Shopify releases Dawn v2.0, you must manually merge updates
- Only ONE theme can be "live" at a time

**Theme Independence:**
- Theme #189302341896 "Coaching Pages" (currently live) - YOUR customized version
- Theme #149756051720 "Dawn" (inactive/broken) - Previous version
- Theme #149756084488 "Dawn" (inactive backup) - Old backup version
- Each has its own complete file set - no sharing between themes

**What's in a theme:**
- `templates/` - Page templates (JSON files defining which sections appear)
- `sections/` - Reusable page components (Liquid files)
- `snippets/` - Reusable code fragments (Liquid files)
- `layout/` - Master layout files (header, footer, theme.liquid)
- `assets/` - Images, CSS, JavaScript
- `config/` - Theme settings (colors, fonts, logo)
- `locales/` - Translation files

---

## Current Theme Status

**Live Theme:**
- **Name:** Coaching Pages
- **ID:** 189302341896
- **Base:** Dawn (unknown version - customized heavily)
- **Status:** Production, actively customized

**Customization Level:** Heavy
- Custom coaching page with 7 sections
- Custom coaching forms page
- Custom images and branding
- Logo configuration
- Navigation modifications

**Git Status:** ✅ Fully tracked
- All theme files in `/Users/linus/Workspace/artblendart.com/shopify-theme/`
- Commit history shows all customizations
- Can restore from git at any time

---

## Your Custom Files

These files are **completely yours** and won't conflict with Dawn updates:

### Custom Sections (8 files)
```
sections/coaching-contact.liquid       # Contact form section
sections/coaching-about.liquid         # About section with bio
sections/coaching-hero.liquid          # Hero section with CTA
sections/coaching-process.liquid       # Process explanation
sections/coaching-forms-hero.liquid    # Forms page hero
sections/coaching-forms-list.liquid    # Forms list section
sections/coaching-who.liquid           # Target audience section
```

### Custom Templates (2 files)
```
templates/page.coaching.json           # Coaching page template
templates/page.coaching-formular.json  # Coaching forms page template
```

### Custom Assets
```
assets/coaching-hero-background.jpg    # Hero background image
assets/coaching-creative-collage.jpg   # Creative collage image
assets/coaching-exploration-image.jpg  # Exploration image
assets/therese-portrait.jpg            # Portrait photo
```

### Files That Need Manual Merging

These are shared with Dawn and will require careful merging during updates:

```
config/settings_data.json              # Logo, colors, fonts, social links
layout/theme.liquid                    # If you modified header/footer
assets/*.css                           # If you added custom styling
snippets/beae_*.liquid                 # Beae Page Builder snippets (third-party)
```

---

## When to Update

### ✅ Update When:
- Shopify announces a security vulnerability in Dawn
- New Dawn feature solves a specific problem you have
- Bug in current Dawn version affects your site
- Shopify platform changes require newer Dawn version
- Performance improvements are significant

### ❌ Don't Update When:
- "Just to have the latest version" (risk > reward)
- You're in a busy sales period
- You don't have 4-8 hours for testing
- Current theme is working perfectly
- No specific benefit identified

### Update Frequency Recommendation:
- **Check for updates:** Quarterly (every 3 months)
- **Actually update:** Only when necessary (1-2 times per year max)
- **Emergency updates:** Immediately for security issues

---

## Theme Update Process

### Prerequisites

Before starting:
- [ ] At least 4-8 hours available for testing
- [ ] No major sales events in next 48 hours
- [ ] Git working tree is clean (`git status`)
- [ ] Full backup of current live theme
- [ ] List of specific benefits from update

### Step 1: Create Test Environment

```bash
# Navigate to project directory
cd /Users/linus/Workspace/artblendart.com

# Verify git status - should be clean
git status
# Output: "nothing to commit, working tree clean"

# Create a backup branch
git checkout -b theme-update-backup
git checkout main
```

### Step 2: Download Fresh Dawn Theme

**In Shopify Admin:**
1. Go to Online Store → Themes
2. Click "Add theme" → "Visit Theme Store"
3. Find "Dawn" (free Shopify theme)
4. Click "Add to theme library"
5. Note the new theme ID (e.g., #123456789)

**Or via CLI:**
```bash
# List available themes
shopify theme list --store 82e997-6e.myshopify.com

# Note the ID of the new Dawn theme
# Example output: #123456789 | Dawn | (unpublished)
```

### Step 3: Pull New Dawn Locally

```bash
# Create directory for new Dawn version
mkdir /tmp/dawn-new

# Pull the fresh Dawn theme
shopify theme pull --store 82e997-6e.myshopify.com \
  --theme <new-dawn-theme-id> \
  --path=/tmp/dawn-new

# Verify download
ls -la /tmp/dawn-new
# Should see: assets/ config/ layout/ sections/ snippets/ templates/ etc.
```

### Step 4: Copy Custom Files to New Theme

```bash
# Copy custom sections
cp shopify-theme/sections/coaching-*.liquid /tmp/dawn-new/sections/

# Copy custom templates
cp shopify-theme/templates/page.coaching*.json /tmp/dawn-new/templates/

# Copy custom assets
cp shopify-theme/assets/coaching-*.jpg /tmp/dawn-new/assets/
cp shopify-theme/assets/therese-portrait.jpg /tmp/dawn-new/assets/

# Verify files copied
ls /tmp/dawn-new/sections/coaching-*
ls /tmp/dawn-new/templates/page.coaching*
```

### Step 5: Merge Configuration Settings

```bash
# Compare settings files
diff shopify-theme/config/settings_data.json \
     /tmp/dawn-new/config/settings_data.json

# Look for YOUR customizations:
# - logo: "shopify://shop_images/Logotype_black.png"
# - logo_width: 90
# - social media links (Facebook, TikTok, Pinterest)
# - Any color scheme changes
# - Font selections
```

**Manually merge settings:**

Open both files side-by-side and copy your customizations:
- Logo settings
- Social media links
- Color schemes (if customized)
- Typography (if customized)
- Navigation settings (if customized)

```bash
# Edit the new theme's settings
# Use your text editor to manually merge settings
code /tmp/dawn-new/config/settings_data.json
```

### Step 6: Check for Layout Changes

```bash
# Compare layout files
diff shopify-theme/layout/theme.liquid \
     /tmp/dawn-new/layout/theme.liquid

# If you see differences, determine:
# - Are they YOUR changes? → Keep them
# - Are they Dawn improvements? → Keep them
# - Are they Beae snippets? → Probably keep them (third-party)
```

**If layout was modified:**
- Review each difference carefully
- Beae snippet references (e.g., `{% render 'beae_header' %}`) should be preserved
- New Dawn features should be kept if they don't conflict
- Document what you changed and why

### Step 7: Push to Test Theme

```bash
# Push ALL files to the new theme for testing
cd /tmp/dawn-new

shopify theme push --store 82e997-6e.myshopify.com \
  --theme <new-dawn-theme-id> \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching*.json' \
  --only='assets/coaching-*.jpg' \
  --only='assets/therese-portrait.jpg' \
  --only='config/settings_data.json' \
  --allow-live

# If you modified layout:
shopify theme push --store 82e997-6e.myshopify.com \
  --theme <new-dawn-theme-id> \
  --only='layout/theme.liquid' \
  --allow-live
```

### Step 8: Test Thoroughly

**Preview the new theme:**
```bash
# Get preview URL
echo "https://artblendart.com/?preview_theme_id=<new-dawn-theme-id>"

# Or use CLI
shopify theme dev --store 82e997-6e.myshopify.com \
  --theme <new-dawn-theme-id>
```

**Testing Checklist** (see [Testing Checklist](#testing-checklist) section below)

### Step 9: Publish New Theme

**Only after thorough testing:**

```bash
# Publish the new theme
shopify theme publish --store 82e997-6e.myshopify.com \
  --theme <new-dawn-theme-id> \
  --force

# Verify it's live
curl -I https://artblendart.com | head -1
# Expected: HTTP/2 200
```

### Step 10: Update Local Repository

```bash
# Replace old theme directory with new one
cd /Users/linus/Workspace/artblendart.com

# Backup old theme
mv shopify-theme shopify-theme-old-$(date +%Y%m%d)

# Copy new theme into place
cp -r /tmp/dawn-new shopify-theme

# Commit to git
git add shopify-theme/
git commit -m "Update to Dawn v[VERSION] with coaching customizations

- Updated base Dawn theme from v[OLD] to v[NEW]
- Preserved custom coaching sections (7 files)
- Preserved custom coaching templates (2 files)
- Merged custom settings (logo, social links, colors)
- Tested all pages and functionality

Theme ID: <new-dawn-theme-id>
Previous theme ID: 189302341896
"

git push origin main

# Clean up old backup
rm -rf shopify-theme-old-*
rm -rf /tmp/dawn-new
```

### Step 11: Update Documentation

Update `CLAUDE.md` with new theme ID:

```markdown
- **Live Theme ID**: `<new-dawn-theme-id>` (updated 2025-XX-XX from Dawn v[VERSION])
```

---

## Testing Checklist

### Before Publishing

Test the preview theme thoroughly:

#### Homepage Tests
- [ ] Homepage loads without errors
- [ ] Logo displays correctly (image, not text)
- [ ] Hero image displays
- [ ] Category buttons work (Original art, Posters, Artprints)
- [ ] Featured products display correctly
- [ ] Navigation menu works (Home, Products, Contact, About, Coaching)
- [ ] Footer displays (newsletter, social links)
- [ ] Mobile responsive layout works

#### Coaching Page Tests
- [ ] `/pages/coaching` loads
- [ ] All 5 sections display:
  - [ ] Hero section with heading "Coaching"
  - [ ] About section with portrait image
  - [ ] Who section with 4 personas + 6 themes
  - [ ] Process section
  - [ ] Contact section with form
- [ ] Images display correctly
- [ ] Contact form works
- [ ] Call-to-action buttons work
- [ ] Mobile layout works

#### Coaching Forms Page Tests
- [ ] `/pages/coaching-formular` loads
- [ ] Google Forms embed displays
- [ ] Layout matches design
- [ ] Mobile responsive

#### Product Pages Tests
- [ ] Product listings load
- [ ] Individual product pages load
- [ ] Images display
- [ ] Add to cart works
- [ ] Checkout process works

#### Cart & Checkout Tests
- [ ] Cart page loads
- [ ] Checkout flow works
- [ ] Payment options display

#### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

#### Console Errors
- [ ] No JavaScript errors in console
- [ ] No 404 errors for assets
- [ ] No Liquid errors
- [ ] Performance is acceptable (load time < 3 seconds)

---

## Rollback Procedures

### If Issues Found After Publishing

**Immediate Rollback (Production is Down):**

```bash
# Re-publish the old working theme
shopify theme publish --store 82e997-6e.myshopify.com \
  --theme 189302341896 \
  --force

# Verify site is back
curl -I https://artblendart.com | head -1
```

**Restore from Git (Local Files Lost):**

```bash
cd /Users/linus/Workspace/artblendart.com

# See recent commits
git log --oneline -10

# Restore to previous working state
git checkout <commit-hash> -- shopify-theme/

# Or restore entire directory
git reset --hard <commit-hash>

# Re-push to Shopify
cd shopify-theme
shopify theme push --store 82e997-6e.myshopify.com \
  --theme 189302341896 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching*.json' \
  --allow-live
```

**Restore Specific Files:**

```bash
# Restore just coaching files
git checkout HEAD~1 -- shopify-theme/sections/coaching-*.liquid
git checkout HEAD~1 -- shopify-theme/templates/page.coaching*.json

# Push restored files
cd shopify-theme
shopify theme push --store 82e997-6e.myshopify.com \
  --theme 189302341896 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching*.json' \
  --allow-live
```

---

## Alternative: Treat as Custom Theme

### Why You Might Choose This

**Your theme is heavily customized:**
- 7 custom coaching sections
- 2 custom templates
- Custom navigation
- Custom branding
- Beae Page Builder integration

**At this level of customization:**
- You're no longer really using "Dawn"
- You're using "ArtBlendArt Custom Theme" (based on Dawn)
- Updates become more work than benefit

### How to Adopt This Approach

```bash
# 1. Rename your theme in Shopify Admin
# Go to: Online Store → Themes → "Coaching Pages"
# Click "..." → "Rename" → "ArtBlendArt Custom"

# 2. Accept that it's YOUR theme now
# - You own maintenance
# - You cherry-pick Dawn updates only when needed
# - You focus on YOUR features, not Dawn's

# 3. Only pull critical updates
# - Security patches only
# - Features you specifically need
# - Not "just to update"
```

### Security Update Strategy

When Shopify announces a security issue in Dawn:

```bash
# 1. Check what files are affected
# (Shopify will specify in security advisory)

# 2. Pull ONLY those files from latest Dawn
shopify theme pull --store 82e997-6e.myshopify.com \
  --theme <latest-dawn-theme-id> \
  --only='affected/file.liquid' \
  --path=/tmp/security-patch

# 3. Compare with your version
diff shopify-theme/affected/file.liquid \
     /tmp/security-patch/affected/file.liquid

# 4. Manually merge the security fix
# Keep your customizations, apply only the fix

# 5. Test and deploy
```

### Feature Update Strategy

When Dawn releases a feature you want:

```bash
# 1. Identify which files contain the feature
# (Check Dawn changelog/documentation)

# 2. Pull those specific files
shopify theme pull --store 82e997-6e.myshopify.com \
  --theme <latest-dawn-theme-id> \
  --only='path/to/feature-file.liquid' \
  --path=/tmp/feature-update

# 3. Extract the feature code
# Study how it works in the new file

# 4. Adapt it to YOUR theme
# Copy the functionality, not the entire file
# Maintain your customizations

# 5. Test thoroughly
```

---

## Best Practices Summary

### DO:
- ✅ Keep git commit history clean and descriptive
- ✅ Test on unpublished theme before publishing
- ✅ Document what customizations you made and why
- ✅ Budget adequate time for testing (4-8 hours)
- ✅ Update only when there's a clear benefit
- ✅ Keep backups of working themes
- ✅ Follow atomic deployment pattern (template + sections together)

### DON'T:
- ❌ Update "just because there's a new version"
- ❌ Test directly on live theme
- ❌ Skip testing checklist
- ❌ Update during busy sales periods
- ❌ Assume new version is always better
- ❌ Forget to commit to git before pushing to Shopify
- ❌ Push templates without sections or vice versa

---

## Related Documentation

- **CLAUDE.md** - Complete AI development guide with safe deployment process
- **docs/deployment-guide.md** - Detailed Shopify CLI deployment procedures
- **Git History** - All theme modifications are tracked

---

## Version History

| Date | Document Version | Changes |
|------|-----------------|---------|
| 2025-11-16 | 1.0.0 | Initial theme update guide created |

---

## Questions & Troubleshooting

### "How do I know what version of Dawn I'm using?"

```bash
# Check package.json or version files in theme
cat shopify-theme/package.json | grep version

# Or check git history to see when you started customizing
git log --reverse --oneline shopify-theme/ | head -5
```

### "Should I update Dawn every time there's a new version?"

**No.** Only update when:
- Security vulnerability announced
- Specific feature you need
- Bug affecting your site

### "What if the new Dawn version breaks my customizations?"

This is why we:
1. Test on unpublished theme first
2. Keep old theme available for instant rollback
3. Track everything in git
4. Follow thorough testing checklist

### "Can I mix files from different Dawn versions?"

**Not recommended.** Files from different Dawn versions may have dependencies on each other. Stick with one base version and cherry-pick specific fixes if needed.

---

**Support:** For issues with theme updates, consult this guide, review git history, and check deployment-guide.md for safe push procedures.
