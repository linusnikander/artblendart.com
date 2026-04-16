# Story 4.7: Convert Templates to English Base Content

**Epic:** Order Flow Updates
**Points:** 3
**Priority:** Immediate (after 4.6)
**Status:** Backlog
**Sprint Change:** 2026-04-16

---

## User Story

As a store owner with a bilingual store, I need all template JSON section settings in English (the store's default language) so that Shopify's translation system works correctly and the language switcher shows the right content.

---

## Context

Shopify requires template JSON base content to be in the store's default language (English). Currently, coaching templates have Swedish base content, which causes the Translate & Adapt autotranslate to produce inverted translations. This story converts all Swedish base content to English.

### Architectural Principle
> Template JSON section settings must always be in the store's default language. Translations for other languages are managed via Shopify's Translate & Adapt system, which stores locale-specific versions of the template JSON.

---

## Tasks

| ID | Task | Status |
|----|------|--------|
| 4.7-1 | Convert `page.coaching2.json` — all ~119 strings to English | [ ] |
| 4.7-2 | Convert `product.coaching-kreativa.json` to English | [ ] |
| 4.7-3 | Convert `product.coaching-ide.json` to English | [ ] |
| 4.7-4 | Convert `product.coaching-kickstart.json` to English | [ ] |
| 4.7-5 | Convert `product.coaching.json` to English | [ ] |
| 4.7-6 | Remove `footer.liquid` locale workaround (`request.locale.iso_code` check) | [ ] |
| 4.7-7 | Remove `newsletter_heading` keys from `locales/sv.json` and `en.default.json` (not needed for section settings) | [ ] |
| 4.7-8 | Push all changed files to Shopify live theme | [ ] |
| 4.7-9 | Verify site displays English coaching content when English locale is active | [ ] |

---

## Translation Sources

For English text, use these sources in priority order:
1. **Autotranslated English** — the Translate & Adapt app already generated English versions of the Swedish text. These may be available in the exported CSV (emailed to t.parner.business@gmail.com on 2026-04-15)
2. **Existing English in coaching2 modal bodies** — the product modal_body fields already contain well-written English descriptions
3. **Manual translation** — for any remaining strings, translate Swedish to English maintaining the coaching tone

### Key Sections in page.coaching2.json

| Section | Key Settings to Convert |
|---------|------------------------|
| hero | heading, subtitle, cta_primary_text, cta_secondary_text |
| pain_points | heading, subheading, cta_text, cta_button_text + 4 pain_point block texts |
| about | label, heading, content (HTML), cta_text + 3 credential blocks |
| personas | label, heading, subheading, cta_text, cta_button_text + 4 persona blocks (name, persona, description) |
| process | label, heading, intro, quote, cta_text + 3 step blocks (title, description, duration) |
| themes | label, heading, subheading, cta_line1, cta_line2, cta_button_text + 6 theme blocks (title, description) |
| products | label, heading, subheading + 3 product blocks (title, tagline, description, features, price text, modal_body HTML) |
| cta | heading, subtitle, cta_text + 3 benefit blocks |
| testimonial | quote, author |

---

## Acceptance Criteria

- [ ] All 5 template JSON files contain English base content
- [ ] No Swedish text remains in any template JSON setting
- [ ] `footer.liquid` uses standard `{{ section.settings.newsletter_heading }}` without locale checks
- [ ] Locale key additions in `sv.json`/`en.default.json` for `newsletter_heading` removed
- [ ] Site displays English coaching content when English locale is active
- [ ] All files pushed to Shopify live theme successfully
- [ ] Coaching page structure (section order, links, anchors) unchanged

---

## Dependencies

- Story 4.6 must be completed (backup committed)

---

## Dev Notes

- The coaching section Liquid files (`coaching2-*.liquid`) do NOT need changes — they use `{{ section.settings.X }}` which automatically renders whatever is in the active locale's template JSON
- Product `modal_body` fields contain large HTML blocks — these need careful translation
- Keep all non-text settings (links, colors, icon names, booleans) unchanged
- The `cta_link` values like `#paket`, `#process`, mailto: links are NOT translatable — leave as-is
- Price strings (`1 750`, `2 500`, `kr/mån`) should stay in Swedish format since they're locale-specific display formats. Convert the surrounding text to English but keep price formatting
- Actually: price display text like "kr/mån" and "kr totalt" should be in English equivalents ("per month", "total") since that's the base. The Swedish versions will come back via translations.

## Risk Mitigation

- Backup exists in `docs/i18n-backup/` (Story 4.6)
- Rollback: restore from backup files and push
- Test in English first, then Swedish translations in Story 4.8
