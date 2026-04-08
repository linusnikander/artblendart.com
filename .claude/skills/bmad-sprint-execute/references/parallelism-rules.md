# Parallelism Rules for Agent Team Execution

These rules govern how stories are assigned to parallel lanes and how teammates coordinate during sprint execution.

## Lane Assignment Rules

1. **No file overlap** — Two lanes must NEVER own overlapping files or directories. If two stories need the same file, they must be in the same lane (sequential execution).

2. **Dependency ordering** — If story B depends on story A (consumes an API, database table, or interface created by A), they must either:
   - Be in the same lane with A before B, OR
   - Be in separate lanes with B's lane explicitly waiting for A's lane to complete the dependency

3. **Epic cohesion preferred** — Stories within the same epic should prefer the same lane unless they are clearly independent (different subsystems, no shared files). This preserves the "previous story intelligence" that `bmad-create-story` builds.

4. **Lane size limit** — Keep lanes to 1-3 stories each. More stories per lane means more sequential work within that lane, reducing parallelism benefit.

5. **Foundation first** — If an epic or story establishes shared infrastructure (project scaffold, database schema, shared utilities), it must complete before any dependent lanes begin. This is typically Epic 1 or the first story of each epic.

## File Ownership Boundaries

Ownership boundaries should be defined at the **directory level** when possible, falling back to file-level patterns when directories overlap:

```
Good:  Lane A owns src/auth/          Lane B owns src/api/
Good:  Lane A owns src/models/user.*  Lane B owns src/models/order.*
Bad:   Lane A owns src/models/        Lane B owns src/models/  (OVERLAP)
```

Sources for determining boundaries:
- **Architecture document** — module/component boundaries
- **Epic file** — story scope descriptions, file references
- **Source tree** — existing directory structure
- **Project context** — documented ownership conventions

When boundaries cannot be cleanly separated, put the conflicting stories in the same lane.

## HALT Conditions

A teammate must **immediately stop work and message the lead** if any of these occur:

### Hard HALTs (stop all work)
1. **Boundary violation** — The story requires editing a file outside the teammate's ownership boundary
2. **Dependency not met** — A story the teammate needs to build on has not been completed by another lane
3. **Cross-lane test failure** — Tests fail and the root cause is in code owned by another teammate

### Soft HALTs (pause and ask)
4. **Architecture gap** — An architectural question arises that is not covered by the story file or project context
5. **Scope expansion** — The teammate discovers the story requires significantly more work than specified
6. **Shared resource conflict** — A configuration file, environment variable, or shared resource needs modification

### HALT Resolution

When a teammate HALTs:
1. The lead reads the HALT message
2. The lead determines the resolution:
   - **Boundary adjustment** — Expand the teammate's ownership or reassign the file
   - **Dependency completion** — Tell the teammate to wait, or complete the dependency in another lane first
   - **Architecture decision** — Make the decision and communicate it to the teammate
   - **Scope change** — Invoke `bmad-correct-course` if the change is significant
3. The lead messages the teammate with the resolution and instructs them to continue

## Sprint-Status Coordination

- Each teammate updates `sprint-status.yaml` as they progress stories through `in-progress` → `review`
- The lead monitors this file to track overall progress
- If two teammates attempt to update the file simultaneously, the last write wins — this is acceptable because each teammate only updates their own story statuses
- See `./sprint-status-guide.md` for the full coordination protocol
