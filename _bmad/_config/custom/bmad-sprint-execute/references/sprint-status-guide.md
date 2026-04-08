# Sprint Status Coordination Guide

How `sprint-status.yaml` coordinates agent team execution.

## Role of sprint-status.yaml

The sprint status file is the **shared state** between the lead and all teammates. It tracks which stories are in which state and serves as the single source of truth for sprint progress.

## Status Transitions During Team Execution

```
Lead runs bmad-sprint-execute
├── Step 1: Reads sprint-status.yaml (stories at backlog)
├── Step 3: Runs bmad-create-story per story
│   └── sprint-status.yaml updates: backlog → ready-for-dev
├── Step 4: Spawns teammates
│   ├── Teammate A starts story → updates: ready-for-dev → in-progress
│   ├── Teammate A completes story → updates: in-progress → review
│   ├── Teammate B starts story → updates: ready-for-dev → in-progress
│   └── Teammate B completes story → updates: in-progress → review
└── Step 5: Lead reads final state (all stories at review)
```

## Who Updates What

| Actor | Updates | When |
|-------|---------|------|
| `bmad-create-story` | `backlog` → `ready-for-dev` | During Step 3 (story preparation) |
| Teammate (via `bmad-dev-story`) | `ready-for-dev` → `in-progress` | When starting implementation |
| Teammate (via `bmad-dev-story`) | `in-progress` → `review` | When implementation + tests complete |
| Lead (after code review) | `review` → `done` | After `bmad-code-review` passes |
| Lead | Epic status: `backlog` → `in-progress` | When first story in epic starts |
| Lead | Epic status: `in-progress` → `done` | When all stories in epic are `done` |

## Conflict Avoidance

Each teammate only modifies the status of stories assigned to their lane. Since stories are unique across lanes, write conflicts on sprint-status.yaml are minimal. In the rare case of a simultaneous write:

- YAML key-value format means non-overlapping story keys don't conflict
- If a conflict occurs, the teammate should re-read the file and reapply their status update
- The lead can always reconcile by reading the file and correcting any inconsistencies

## Monitoring Patterns

The lead should periodically check sprint-status.yaml during Step 4:

1. **Progress check** — Are stories moving through states? A story stuck at `in-progress` for a long time may indicate a HALT or difficulty.
2. **Completion check** — Have all stories in a lane reached `review`? If so, that lane's teammate should have reported completion.
3. **Anomaly check** — Is any story at an unexpected state? (e.g., still `ready-for-dev` when its teammate should have started)

## Post-Execution State

After a successful sprint execution, the status file should show:
- All executed stories at `review` (awaiting code review)
- Epics with executed stories at `in-progress`
- Remaining stories still at `backlog`
- No stories at `in-progress` (all teammates completed)
