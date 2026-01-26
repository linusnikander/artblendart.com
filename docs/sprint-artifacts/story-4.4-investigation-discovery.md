# Story 4.4: Investigation & Discovery

**Epic:** UX Alignment
**Points:** 3
**Priority:** 4 (After stories 4.1, 4.2, 4.3)
**Status:** Draft

---

## User Story

As the product owner, I want to understand how various Shopify features work so I can make informed decisions about keeping, modifying, or removing them.

---

## Investigation Tasks

| ID | Task | Status | Findings |
|----|------|--------|----------|
| INV-1 | Investigate "Follow on Shop" functionality — understand purpose, where it appears, recommend keep/remove | [ ] | |
| INV-2 | Investigate newsletter signup — verify "Email me with news and offers" is working, where signups go | [ ] | |
| INV-3 | Verify payment options — confirm which methods are active and working | [ ] | |
| INV-4 | Verify "More payment options" link — test with Playwright, fix or remove if broken | [ ] | |
| INV-5 | Review policy pages — check content of Refund, Privacy, Terms, Contact pages | [ ] | |

---

## Acceptance Criteria

- [ ] Each investigation item documented with findings
- [ ] Recommendations provided for each item (keep/modify/remove)
- [ ] Action items created for any follow-up work
- [ ] Playwright test confirms "More payment options" behavior

---

## Investigation Details

### INV-1: Follow on Shop
**Questions to answer:**
- What is the Shop app?
- What happens when customers follow?
- Where does this button appear? (footer, product pages, etc.)
- Is it beneficial for our business?

### INV-2: Newsletter Signup
**Questions to answer:**
- Where do signups go? (Shopify Email? Third-party?)
- Is email marketing set up?
- Are confirmation emails sent?
- GDPR compliance?

### INV-3: Payment Options
**Questions to answer:**
- Which methods are enabled in Shopify Payments?
- Are all displayed methods actually functional?
- Any fees differences between methods?
- Swish availability? (from GEN-2)

### INV-4: More Payment Options Link
**Questions to answer:**
- What should happen when clicked?
- Use Playwright to test actual behavior
- If broken, can it be fixed or should it be removed?

### INV-5: Policy Pages
**Questions to answer:**
- What content exists on each policy page?
- What content is required legally?
- What needs to be written/updated?

---

## Dependencies

- Complete stories 4.1, 4.2, 4.3 first
- Shopify admin access for settings review

---

## Notes

- Reference: `order-flow-documentation.pdf` various screens
- Feedback source: `docs/order-flow-update.md`
- Findings will inform backlog prioritization
