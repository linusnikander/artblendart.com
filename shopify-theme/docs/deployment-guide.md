# Shopify Deployment Process

**Project:** ArtBlendArt  
**Reference:** See `CLAUDE.md` for complete technical details  
**Status:** Mandatory for all Shopify deployments

---

## Quick Reference

**⚠️ Critical Rule:** Always push templates AND sections together in ONE command.

```bash
shopify theme push --store 82e997-6e.myshopify.com --theme 189302341896 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live
```

---

## Complete Process

For full technical details, command examples, root cause analysis, and troubleshooting procedures, see:

**📖 [CLAUDE.md - Shopify Theme Development Section](../CLAUDE.md)**

The CLAUDE.md file contains:
- Mandatory 7-step deployment process
- Root cause analysis of Shopify CLI cleanup behavior  
- Correct vs incorrect command patterns
- Version control and recovery procedures
- Image optimization guidelines
- Complete troubleshooting guide

---

## Why This Matters

The Shopify CLI's "cleaning" phase automatically deletes files it considers orphaned. This has caused multiple production incidents where templates and sections disappeared after deployment.

**The Solution:** Atomic deployments using multiple `--only` flags ensure all dependencies are present before the cleaning phase runs.

---

## Emergency Recovery

If a page goes down:

```bash
# 1. Restore from git
git checkout HEAD -- shopify-theme/sections/coaching-*.liquid shopify-theme/templates/page.coaching.json

# 2. Re-deploy atomically
cd shopify-theme
shopify theme push --store 82e997-6e.myshopify.com --theme 189302341896 \
  --only='sections/coaching-*.liquid' \
  --only='templates/page.coaching.json' \
  --allow-live

# 3. Verify
curl -I https://artblendart.com/pages/coaching
```

---

**For detailed procedures, see CLAUDE.md**
