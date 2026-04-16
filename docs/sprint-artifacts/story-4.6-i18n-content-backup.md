# Story 4.6: i18n Content Backup

**Epic:** Order Flow Updates
**Points:** 1
**Priority:** Immediate (must run before 4.7)
**Status:** Done
**Sprint Change:** 2026-04-16

---

## User Story

As a developer, I need a complete backup of all Swedish content before converting templates to English, so that no text is lost during the i18n migration.

---

## Context

The coaching page templates contain Swedish text as base content. Before converting to English (Shopify's required default), all Swedish text must be preserved in version control and in a format suitable for re-import as translations.

---

## Tasks

| ID | Task | Status |
|----|------|--------|
| 4.6-1 | Create `docs/i18n-backup/` directory | [x] |
| 4.6-2 | Copy all 5 template JSON files as-is to backup dir | [x] |
| 4.6-3 | Extract all Swedish text strings from `page.coaching2.json` to CSV | [x] |
| 4.6-4 | Extract all Swedish text strings from product coaching templates to CSV | [x] |
| 4.6-5 | Commit backup with descriptive message | [x] |

### Files to Backup

| Source File | Backup Location |
|-------------|----------------|
| `shopify-theme/templates/page.coaching2.json` | `docs/i18n-backup/page.coaching2.json` |
| `shopify-theme/templates/product.coaching.json` | `docs/i18n-backup/product.coaching.json` |
| `shopify-theme/templates/product.coaching-kreativa.json` | `docs/i18n-backup/product.coaching-kreativa.json` |
| `shopify-theme/templates/product.coaching-ide.json` | `docs/i18n-backup/product.coaching-ide.json` |
| `shopify-theme/templates/product.coaching-kickstart.json` | `docs/i18n-backup/product.coaching-kickstart.json` |

### CSV Format

```
file,section,setting_key,swedish_text
page.coaching2.json,hero,heading,"Vill du skapa men fastnat i ""hur"" – eller saknar du skaparglädjen du hade förr?"
page.coaching2.json,hero,subtitle,"Upptäck din kreativitet, hitta ditt uttryck..."
...
```

---

## Acceptance Criteria

- [x] All 5 original template files copied to `docs/i18n-backup/`
- [x] CSV file contains every Swedish text string with its location (file, section, key) — 169 strings extracted
- [x] Backup committed to git before any template changes begin (commit 24ec59e)
- [x] CSV format is compatible with Shopify's translation import

---

## Dependencies

- None (first story in sequence)

---

## Dev Notes

- Do NOT modify any live template files in this story
- The CSV will be used in Story 4.8 for registering Swedish translations
- Include modal_body HTML content in the CSV (product descriptions)
