# Project Context for AI Agents

_Critical rules and patterns that AI agents must follow when implementing code in this project._

---

## Visual Verification with Playwright MCP

When any BMAD skill or agent produces or reviews browser-renderable output, use the Playwright MCP tools for visual verification rather than relying on code analysis alone.

### When to Use

- **Always use** when generating or modifying: HTML files, UI components, frontend pages, email templates, CSS changes, responsive layouts, generated reports with visual formatting
- **Always use** when reviewing: frontend story implementations, UX design mockups, any PR/story that touches visual output
- **Skip** when the work is purely backend, data processing, infrastructure, or CLI-only

### How to Use

1. `mcp__playwright__browser_navigate` — Open the local file (`file://`) or dev server URL
2. `mcp__playwright__browser_snapshot` — Capture the accessibility tree for structural verification
3. `mcp__playwright__browser_take_screenshot` — Visual screenshot for layout/styling verification
4. Compare the rendered output against acceptance criteria in the story file

### Integration Points

- **bmad-dev-story**: After implementing frontend tasks, verify visual output before marking task complete
- **bmad-quick-dev**: After any UI change, render and verify before presenting results
- **bmad-create-ux-design**: Render generated HTML mockups and color theme visualizers
- **bmad-code-review**: For frontend stories, render the changes and include visual assessment
- **bmad-qa-generate-e2e-tests**: Use Playwright for test execution baseline

### If Playwright MCP is Unavailable

If the `mcp__playwright__*` tools are not available in the current session, inform the user and recommend enabling the Playwright MCP server before proceeding with visual work.


### Story Creation Rule (bmad-create-story)

When creating stories that touch UI, frontend, or any browser-renderable output, the story file MUST include:
1. An acceptance criterion: "Visual output verified via Playwright MCP (browser_navigate + browser_snapshot or browser_take_screenshot)"
2. A task in Tasks/Subtasks: "Verify visual output with Playwright MCP" linked to the visual AC
3. A Dev Notes entry under testing requirements: "Use Playwright MCP to render and verify all visual changes before marking complete"

This ensures bmad-dev-story and bmad-code-review both pick up the visual verification requirement from the story spec.
