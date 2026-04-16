# Sprint Change Proposal: i18n Architecture Correction

**Date:** 2026-04-16
**Triggered by:** Epic 4 implementation (Stories 4.1–4.4)
**Scope Classification:** Moderate
**Status:** Pending Approval

---

## Section 1: Issue Summary

### Problem Statement
The coaching page templates (`page.coaching2.json`, `product.coaching-*.json`) contain Swedish text as base content, but the store's default language is English. This violates Shopify's translation architecture, where template JSON section settings must always be in the store's default language.

### How Discovered
During Sprint 4 execution, Swedish was published as a store language and the Translate & Adapt autotranslate was run. The autotranslate treated the Swedish base content as English and "translated" it into English — storing that English text as the "Swedish translation." Result: the language switcher is inverted (selecting Svenska shows English content).

### Evidence
- Live site screenshot confirms English coaching content when Svenska locale is active
- Shopify documentation confirms: section settings translations are stored as locale-specific template JSON versions, NOT in `sv.json` locale files
- ~119 translatable strings in `page.coaching2.json`, ~30+ per product template
- Architect (Winston) confirmed this is the root cause and the fix aligns with Shopify best practice

### Workarounds Currently In Place (to be removed)
- `footer.liquid`: `request.locale.iso_code == 'sv'` check for newsletter heading
- `locales/sv.json` and `en.default.json`: Added `newsletter_heading` keys (unused by section settings)

---

## Section 2: Impact Analysis

### Epic Impact

**Epic 4 (Order Flow Updates):** Directly affected. Stories 4.1–4.4 are functionally complete but the translation layer is broken. No story rework needed — the section ordering, button links, product templates, and checkout branding are all correct. Only the language/content layer needs fixing.

**Epic 3 (UX Alignment):** Story 3.1 (product page redesign) created `product.coaching.json` which also has Swedish base content. Same fix applies.

**Epics 1, 2:** Not affected. Epic 1 (forms/booking) is backlog. Epic 2 (coaching purchase) is done and doesn't have Swedish template content.

### Story Impact

| Story | Status | i18n Impact |
|-------|--------|-------------|
| 4.1 Main coaching page | Done | `page.coaching2.json` needs English base + Swedish translations |
| 4.2 Product pages | Done | `product.coaching-*.json` (3 files) need English base + Swedish translations |
| 4.3 Checkout branding | Done | No impact (colors/logo, not text) |
| 4.4 Investigation | Done | No impact (documentation only) |
| 4.5 YCBM | Partial | No impact (external service) |
| 3.1 Product page redesign | Done | `product.coaching.json` needs English base + Swedish translations |

### Artifact Conflicts

- **No PRD exists** — no conflict
- **No architecture doc exists** — no conflict, but this should be documented as an architecture decision
- **No UX spec** — no conflict
- **Sprint status** — needs update to reflect new stories
- **CLAUDE.md** — should note the i18n principle going forward

### Technical Impact

**Files requiring content migration (Swedish → English base):**

| File | Approx. Strings | Complexity |
|------|-----------------|------------|
| `templates/page.coaching2.json` | ~119 | High (large file, many sections) |
| `templates/product.coaching-kreativa.json` | ~12 | Low |
| `templates/product.coaching-ide.json` | ~12 | Low |
| `templates/product.coaching-kickstart.json` | ~12 | Low |
| `templates/product.coaching.json` | ~10 | Low |

**Liquid files requiring workaround removal:**

| File | Change |
|------|--------|
| `sections/footer.liquid` | Remove `request.locale.iso_code` check, revert to `{{ section.settings.newsletter_heading }}` |

**Liquid files NOT affected (design decisions, not i18n hacks):**

| File | Reason to Keep |
|------|---------------|
| `sections/announcement-bar.liquid` | Hide on coaching pages = design choice |
| `snippets/social-icons.liquid` | Different social accounts per section = design choice |
| `snippets/header-drawer.liquid` | Uses shared social-icons snippet = design choice |

---

## Section 3: Recommended Approach

### Selected Path: Direct Adjustment

**Rationale:** The existing implementation is correct in every way except the language layer. No rollback needed. We add new stories to the current epic to fix the i18n architecture.

**Approach:**
1. **Backup** all current Swedish content (text extraction + file copies)
2. **Convert** template JSONs to English base content
3. **Register** original Swedish text as proper translations via Translate & Adapt
4. **Remove** Liquid workarounds that bypass the translation system
5. **Verify** both languages work correctly end-to-end

**Effort Estimate:** Medium (3-5 hours)
- Step 0 (backup): 15 min
- Step 1 (convert ~165 strings to English): 1-2 hours
- Step 2 (register Swedish translations): 1-2 hours (CSV import + manual review)
- Step 3 (remove workarounds): 15 min
- Step 4 (verify): 30 min

**Risk Level:** Low
- All original Swedish text is preserved in backup
- The mechanism (Translate & Adapt + template JSON) is Shopify's standard approach
- No Liquid template changes needed (sections already use `{{ section.settings.X }}`)
- Rollback is trivial: restore backup files

**Timeline Impact:** Adds ~0.5-1 day to the sprint. No other stories are blocked.

---

## Section 4: Detailed Change Proposals

### New Stories to Add to Epic 4

#### Story 4.6: i18n Content Backup
**Points:** 1 | **Priority:** Immediate (must run first)

**Tasks:**
- Create `docs/i18n-backup/` directory
- Copy all 5 template JSON files as-is
- Extract all Swedish text strings to CSV with columns: `file, section, setting_key, swedish_text`
- Extract autotranslated English strings to a separate CSV
- Commit backup

**Acceptance Criteria:**
- All original Swedish text preserved in version control
- CSV files can be used for Translate & Adapt import

---

#### Story 4.7: Convert Templates to English Base Content
**Points:** 3 | **Priority:** Immediate (after 4.6)

**Tasks:**
- Convert `page.coaching2.json` — replace all Swedish strings with English equivalents
- Convert `product.coaching-kreativa.json` — replace Swedish with English
- Convert `product.coaching-ide.json` — replace Swedish with English
- Convert `product.coaching-kickstart.json` — replace Swedish with English
- Convert `product.coaching.json` — replace Swedish with English
- Push all templates to Shopify live theme
- Remove `footer.liquid` locale workaround

**Sources for English text:**
- Autotranslated English (already generated by Translate & Adapt)
- Manual translation where autotranslate didn't cover

**Acceptance Criteria:**
- All 5 template files have English base content
- Site displays English coaching content when English locale is active
- No Liquid locale workarounds remain

---

#### Story 4.8: Register Swedish Translations
**Points:** 2 | **Priority:** Immediate (after 4.7)

**Tasks:**
- Prepare CSV import file from backup Swedish strings
- Import Swedish translations via Shopify Admin → Settings → Languages → Import
- Alternatively: re-run Translate & Adapt autotranslate (English → Swedish) and manually correct key strings using the backup CSV
- Verify all coaching sections display correct Swedish when Svenska is selected
- Verify language switcher works correctly in both directions

**Acceptance Criteria:**
- Coaching page fully Swedish when Svenska selected
- Coaching page fully English when English selected
- Language switcher works correctly on all pages
- Product pages correct in both languages
- No mixed-language content on any page

---

### Changes to Existing Artifacts

**Sprint Status (`sprint-status.yaml`):**

```
OLD:
  4-1-main-coaching-page-updates: in-progress

NEW:
  4-1-main-coaching-page-updates: done
  4-2-product-page-cart-updates: done
  4-3-checkout-branding: done
  4-4-investigation-discovery: done
  4-5-ycbm-booking-setup: in-progress
  4-6-i18n-content-backup: backlog
  4-7-convert-templates-english-base: backlog
  4-8-register-swedish-translations: backlog
```

---

## Section 5: Implementation Handoff

### Scope: Moderate
Requires backlog update (new stories) + Developer implementation.

### Handoff Plan

| Step | Agent | Responsibility |
|------|-------|---------------|
| 1. Approve proposal | Linus (PO) | Review and approve this document |
| 2. Create story files | SM agent (`bmad-create-story`) | Create 4.6, 4.7, 4.8 story files |
| 3. Implement stories | Dev agent (`bmad-dev-story`) | Execute stories in sequence: 4.6 → 4.7 → 4.8 |
| 4. Verify | QA / Playwright | Visual verification in both languages |

### Success Criteria
1. All coaching pages display correct language when locale is switched
2. No mixed-language content anywhere on the site
3. All original Swedish text preserved (backup committed)
4. No Liquid locale workarounds in the codebase (except design-choice conditionals)
5. Translate & Adapt app shows Swedish translations correctly linked

---

**END OF SPRINT CHANGE PROPOSAL**
