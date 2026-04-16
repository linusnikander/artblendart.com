# Story 4.8: Register Swedish Translations

**Epic:** Order Flow Updates
**Points:** 2
**Priority:** Immediate (after 4.7)
**Status:** Backlog
**Sprint Change:** 2026-04-16

---

## User Story

As a Swedish-speaking customer, I want the coaching pages to display correct Swedish content when I select Svenska, so that I can browse and purchase in my native language.

---

## Context

After Story 4.7 converted all template JSON base content to English, the Swedish translations need to be registered through Shopify's translation system (Translate & Adapt). The original Swedish text was preserved in the backup CSV from Story 4.6.

### How Shopify Section Setting Translations Work
Translate & Adapt stores locale-specific versions of template JSON settings. When a customer selects Svenska, Shopify serves the Swedish version of the settings. The section Liquid files (`{{ section.settings.X }}`) automatically render the correct locale's content.

---

## Tasks

| ID | Task | Status |
|----|------|--------|
| 4.8-1 | Prepare Shopify translation CSV import file from backup Swedish strings | [ ] |
| 4.8-2 | Import Swedish translations via Admin → Settings → Languages → Import | [ ] |
| 4.8-3 | Alternatively: re-run Translate & Adapt autotranslate and manually correct | [ ] |
| 4.8-4 | Review all coaching page sections in Swedish — compare with backup CSV | [ ] |
| 4.8-5 | Verify coaching page in English shows English content | [ ] |
| 4.8-6 | Verify coaching page in Swedish shows correct Swedish content | [ ] |
| 4.8-7 | Verify product pages in both languages | [ ] |
| 4.8-8 | Verify cart page in both languages | [ ] |
| 4.8-9 | Verify language switcher works correctly on all pages | [ ] |

---

## Translation Strategy

**Option A: CSV Import (Preferred)**
1. Use the Swedish strings CSV from Story 4.6 backup
2. Format it as a Shopify translation import CSV
3. Import via Admin → Settings → Languages → Import
4. Review and correct any formatting issues

**Option B: Autotranslate + Manual Correction**
1. Run Translate & Adapt autotranslate (now correctly English → Swedish)
2. Compare autotranslated Swedish against the original Swedish in backup CSV
3. Manually correct any strings where machine translation differs from original

**Recommendation:** Try Option A first. If the CSV import doesn't cover section settings (it may only cover products/pages/collections), fall back to Option B.

---

## Acceptance Criteria

- [ ] All coaching page sections display correct Swedish when Svenska is selected
- [ ] All coaching page sections display correct English when English is selected
- [ ] Product pages (Din kreativa plats, Ide till verklighet, Kickstart) correct in both languages
- [ ] Language switcher works correctly on coaching pages, product pages, cart, and homepage
- [ ] No mixed-language content on any page in either language
- [ ] Footer newsletter heading correct in both languages
- [ ] Announcement bar correct in both languages (hidden on coaching pages by design)
- [ ] Visual verification completed via Playwright MCP (browser_navigate + browser_take_screenshot)

---

## Dependencies

- Story 4.6 completed (backup CSV available)
- Story 4.7 completed (English base content in templates)
- Shopify Admin access for translation import
- Playwright MCP available for visual verification

---

## Dev Notes

- The backup CSV from Story 4.6 is the source of truth for Swedish text
- Some strings (modal_body HTML) may need special handling in the import format
- Price formatting strings should be Swedish in the Swedish translation (e.g., "kr/mån", "kr totalt")
- Test with cache busters (`?v=N`) to avoid stale content
- Check both the coaching2 main page AND individual product pages
- The footer newsletter heading should now work through Shopify's standard translation mechanism (no more Liquid workaround)
