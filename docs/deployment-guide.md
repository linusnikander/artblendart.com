# Shopify Deployment Guide

**Project:** ArtBlendArt (artblendart.com)
**Last Updated:** 2025-11-16
**Critical:** This process is mandatory for all Shopify theme deployments

---

## Table of Contents

1. [Critical Warning](#critical-warning)
2. [Store Configuration](#store-configuration)
3. [Mandatory 7-Step Deployment Process](#mandatory-7-step-deployment-process)
4. [Root Cause Analysis](#root-cause-analysis)
5. [Command Reference](#command-reference)
6. [Troubleshooting](#troubleshooting)
7. [Recovery Procedures](#recovery-procedures)

---

## Critical Warning

⚠️ **STOP AND READ THIS FIRST**

The Shopify CLI has a "cleaning" phase that **automatically deletes files** it considers orphaned. This has caused multiple production incidents where:

- Templates disappeared after being pushed
- Sections were deleted immediately after upload
- Pages went from working to 404 errors without warning

**The solution:** Always push templates AND their dependent sections together in a single atomic operation.

**NEVER:**
- Push templates alone
- Push sections alone
- Use the `--path=` flag
- Run `pull` without `--only=`

---

## Store Configuration

**Production Store:**
- **Store Name (for CLI):** `82e997-6e.myshopify.com`
- **Custom Domain:** `artblendart.com` (for live site access only)
- **Live Theme ID:** `189302341896` (ArtBlendArt Custom - formerly "Coaching Pages")

**Critical:** Always use the `.myshopify.com` domain for CLI commands, NOT the custom domain.

---

## Mandatory 7-Step Deployment Process

### Step 1: Navigate to Theme Directory

```bash
cd shopify-theme
```

**Verification:**
```bash
pwd
# Expected output: /path/to/artblendart.com/shopify-theme
```

### Step 2: Make Local Changes

Edit section and/or template files in their respective directories:
- `sections/` - Liquid section files
- `templates/` - JSON template files
- `assets/` - Images, CSS, JS files

### Step 3: Commit to Git (MANDATORY)

```bash
# Add your changed files
git add sections/coaching-*.liquid templates/page.coaching.json

# Commit with descriptive message
git commit -m "Describe your changes here"
```

**Why this matters:** Git is your safety net. If deployment fails, you can restore from here.

### Step 4: Push Template + Sections Together

**For coaching page example:**
```bash
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live
```

**Critical rules:**
- Use multiple `--only=` flags in ONE command
- Include template AND all dependent sections
- Always use `--allow-live` flag for automation
- Use glob patterns (`*.liquid`) for related files

### Step 5: Monitor Upload Progress

Watch for these phases:
1. "Uploading files to remote theme" - files being sent
2. "Cleaning your remote theme" - **DANGER ZONE** (this is where deletion happens)
3. "Theme upload complete" - success confirmation

**If you see errors during cleaning phase:** Files may have been deleted. Proceed to recovery steps.

### Step 6: Verify on Live Site

```bash
# Open the page in your browser
open https://artblendart.com/pages/coaching

# Or use curl to check HTTP status
curl -I https://artblendart.com/pages/coaching | head -1
# Expected: HTTP/2 200
```

**Checklist:**
- [ ] Page loads (not 404)
- [ ] All sections visible
- [ ] Images displaying correctly
- [ ] No console errors

### Step 7: Recovery (if needed)

If verification fails:

```bash
# Restore from git
git checkout HEAD -- sections/coaching-*.liquid templates/page.coaching.json

# Re-push using the atomic pattern
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live
```

---

## Root Cause Analysis

### Why Files Get Deleted

The Shopify CLI performs these operations in sequence:

1. **Upload Phase:** Sends your files to the server
2. **Validation Phase:** Checks template references to sections
3. **Cleaning Phase:** Deletes files it thinks are orphaned

**The Problem:**

If you push a template that references `coaching-hero` section, but that section doesn't exist on the server at validation time:
- The template is considered "broken"
- The cleaning phase deletes it
- OR the section gets uploaded but the template references an older version
- The cleaning phase deletes the "orphaned" section

**The Solution:**

Push both template AND sections in one command:
```bash
--only='sections/coaching-*.liquid' \
--only='templates/page.coaching.json'
```

This ensures:
- All files upload BEFORE validation
- Validation sees complete dependencies
- Cleaning phase has nothing to delete

### Proven Failure Patterns

**❌ Pattern 1: Sequential pushes**
```bash
# Push sections first
shopify theme push --only='sections/coaching-*.liquid' --allow-live

# Then push template
shopify theme push --only='templates/page.coaching.json' --allow-live
# Result: Template triggers cleanup that deletes sections
```

**❌ Pattern 2: Template-only push**
```bash
shopify theme push --only='templates/page.coaching.json' --allow-live
# Result: Template references missing sections, gets deleted
```

**❌ Pattern 3: Using --path flag**
```bash
shopify theme push --path=assets --allow-live
# Result: Uploads ONLY assets, deletes everything else
```

**✅ Correct Pattern: Atomic push**
```bash
shopify theme push \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live
# Result: All dependencies present, nothing gets deleted
```

---

## Command Reference

### Deployment Commands

#### ✅ Deploy coaching page (template + sections)
```bash
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live
```

#### ✅ Deploy single section + template
```bash
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-hero.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live
```

#### ✅ Deploy asset only (safe - no dependencies)
```bash
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='assets/coaching-hero-background.jpg' \
  --allow-live
```

#### ✅ Deploy multiple unrelated files
```bash
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='assets/image1.jpg' \
  --only='assets/image2.jpg' \
  --only='assets/image3.jpg' \
  --allow-live
```

### Pull Commands (Use with Extreme Caution)

#### ✅ Pull specific file
```bash
shopify theme pull --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='templates/page.coaching.json'
```

#### ❌ NEVER pull without --only (deletes local files)
```bash
# DO NOT RUN THIS
shopify theme pull --store 82e997-6e.myshopify.com --theme 149756051720
# This will DELETE all local files that don't exist on server
```

### Preview Commands (Safe)

#### Preview theme locally
```bash
shopify theme dev --store 82e997-6e.myshopify.com --theme 149756051720
```

#### List available themes
```bash
shopify theme list --store 82e997-6e.myshopify.com
```

---

## Troubleshooting

### Issue: Page shows 404 after deployment

**Symptoms:**
- Page was working before push
- Now returns "404 Not Found"
- Template exists in Shopify admin but shows as broken

**Diagnosis:**
```bash
# Check if template exists locally
ls -la shopify-theme/templates/page.coaching.json

# Check if sections exist locally
ls -la shopify-theme/sections/coaching-*.liquid

# Check git status
git status
```

**Solution:**
1. Verify all files exist locally (use `git status`)
2. If files were deleted locally: `git checkout HEAD -- path/to/file`
3. Re-push using atomic pattern (template + sections together)
4. Verify on live site

### Issue: Template exists but has no sections

**Symptoms:**
- Shopify theme editor shows "This page doesn't have any sections"
- Template file exists but appears empty

**Diagnosis:**
Sections were deleted by cleanup phase but template survived.

**Solution:**
```bash
# Restore sections from git
git checkout HEAD -- shopify-theme/sections/coaching-*.liquid

# Push sections + template together
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live
```

### Issue: Files keep disappearing after push

**Symptoms:**
- Push appears successful
- Files disappear within seconds
- Pattern repeats on every deployment

**Root Cause:**
You're pushing templates and sections separately, or in the wrong order.

**Solution:**
Always use the atomic push pattern with multiple `--only` flags in ONE command.

### Issue: Images not displaying (404 errors)

**Symptoms:**
- Page loads but images show as broken
- Browser console shows 404 errors for image assets
- Images exist locally in `shopify-theme/assets/`

**Diagnosis:**
```bash
# Verify images exist locally
ls -la shopify-theme/assets/*.jpg

# Check if images are optimized (should be < 500KB for web)
du -h shopify-theme/assets/*.jpg
```

**Solution:**
```bash
# Optimize images if needed (macOS)
sips -Z 2000 --setProperty formatOptions 80 shopify-theme/assets/image.jpg

# Push images to Shopify
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='assets/coaching-hero-background.jpg' \
  --only='assets/therese-portrait.jpg' \
  --allow-live
```

**Note:** Images can be pushed separately since they have no dependencies.

---

## Recovery Procedures

### Scenario 1: Template Deleted from Server

**Detection:**
- Shopify admin shows no coaching template
- Page returns 404

**Recovery Steps:**

```bash
# 1. Verify template exists locally
cat shopify-theme/templates/page.coaching.json

# 2. If missing locally, restore from git
git checkout HEAD -- shopify-theme/templates/page.coaching.json

# 3. Verify sections exist
ls shopify-theme/sections/coaching-*.liquid

# 4. If sections missing, restore from git
git checkout HEAD -- shopify-theme/sections/coaching-*.liquid

# 5. Push both together
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live

# 6. Verify page loads
curl -I https://artblendart.com/pages/coaching
```

### Scenario 2: Sections Deleted from Server

**Detection:**
- Template exists in Shopify admin
- Theme editor shows "This page doesn't have any sections"
- Page returns 404 or blank page

**Recovery Steps:**

```bash
# 1. Verify sections exist locally
ls -la shopify-theme/sections/coaching-*.liquid

# 2. If missing, restore from git
git checkout HEAD -- shopify-theme/sections/

# 3. Push sections + template together
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live
```

### Scenario 3: Complete Loss of Local Files

**Detection:**
- `git status` shows many deleted files
- Sections and templates missing locally

**Recovery Steps:**

```bash
# 1. DO NOT commit the deletions
# 2. Restore everything from git
git checkout HEAD -- shopify-theme/

# 3. Verify restoration
git status
# Should show: "nothing to commit, working tree clean"

# 4. Re-push everything
shopify theme push --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live
```

### Scenario 4: Git History Lost

**Detection:**
- Cannot restore from `git checkout`
- Need to recover from Shopify server

**Recovery Steps:**

```bash
# 1. Pull from Shopify (creates new local files)
shopify theme pull --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='templates/page.coaching.json'

shopify theme pull --store 82e997-6e.myshopify.com --theme 149756051720 \
  --only='sections/coaching-hero.liquid'

# 2. Repeat for each section
# 3. Commit recovered files to git
git add shopify-theme/
git commit -m "Recover files from Shopify server"
```

**Prevention:** Always commit to git BEFORE pushing to Shopify.

---

## Best Practices Checklist

Before any Shopify deployment:

- [ ] Navigate to `shopify-theme/` directory
- [ ] Verify changes locally (if possible)
- [ ] Commit all changes to git with descriptive message
- [ ] Identify all files that need deployment (templates + sections)
- [ ] Construct push command with multiple `--only=` flags
- [ ] Use `--allow-live` flag to avoid interactive prompts
- [ ] Push in ONE command (atomic operation)
- [ ] Monitor upload and cleaning phases
- [ ] Verify on live site immediately
- [ ] Check browser console for errors
- [ ] Test all page sections and images
- [ ] Document any issues encountered

---

## Related Documentation

- **CLAUDE.md** - AI-specific deployment instructions
- **Git History** - All deployment commits include detailed descriptions
- **Shopify CLI Docs** - https://shopify.dev/docs/themes/tools/cli

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2025-11-16 | 1.0.0 | Initial deployment guide created after resolving template deletion incidents |

---

## Support

For questions or issues with this deployment process:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review [Recovery Procedures](#recovery-procedures)
3. Consult git commit history for similar issues
4. Reference CLAUDE.md for AI-specific guidance

**Critical Issue Escalation:**
If pages go down in production, use recovery procedures immediately. All necessary files are in git history.
