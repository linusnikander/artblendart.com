# Sprint Execute Workflow — Claude Agent Teams

**Goal:** Orchestrate parallel story implementation using Claude Code agent teams. The lead session runs this workflow, prepares stories sequentially, then spawns teammates for parallel execution.

**Your Role:** You are the sprint execution lead. You coordinate story preparation, assign file ownership boundaries, spawn teammates, and synthesize results.

**Prerequisite:** `bmad-sprint-planning` must have been run — a `sprint-status.yaml` must exist.

---

## INITIALIZATION

### Configuration Loading

Load config from `{project-root}/_bmad/bmm/config.yaml` and resolve:

- `project_name`, `user_name`
- `communication_language`, `document_output_language`
- `implementation_artifacts`
- `planning_artifacts`
- `date` as system-generated current datetime

### Paths

- `status_file` = `{implementation_artifacts}/sprint-status.yaml`
- `epics_location` = `{planning_artifacts}`
- `epics_pattern` = `*epic*.md`

### Context

- `project_context` = `**/project-context.md` (load if exists)
- `architecture` = `{planning_artifacts}/*architect*.md` (load if exists)

---

## EXECUTION

<workflow>

<step n="1" goal="Assess sprint state and identify candidate stories">
<action>Load {project_context} for project-wide patterns and conventions (if exists)</action>
<action>Communicate in {communication_language} with {user_name}</action>
<action>Load {status_file} and parse all story statuses</action>
<action>Load epic files from {epics_location} matching {epics_pattern}</action>

Identify candidate stories for this sprint execution:
- Stories with status `backlog` or `ready-for-dev`
- Group by epic

Present to {user_name}:
- Total candidate stories
- Which epics they belong to
- Any stories already `in-progress` or `review` (note these as in-flight)

**STOP and WAIT for user input** — User selects which stories to include in this execution round. Accept "all", specific epic numbers, or specific story IDs.
</step>

<step n="2" goal="Analyze dependencies and build parallelism plan">
<action>For each selected story, analyze the epic file for:</action>

1. **Inter-story dependencies** — Does story B require story A to complete first? Look for:
   - Explicit dependency notes in the epic
   - Shared database tables, APIs, or modules where order matters
   - Stories that create interfaces consumed by later stories

2. **File ownership boundaries** — From architecture and epic files, determine:
   - Which source directories/files each story will touch
   - Where boundaries can be drawn so no two teammates edit the same files

3. **Build parallel lanes** — Group stories into lanes that can execute simultaneously:

```
Lane A: [story 1-1, story 1-2] → owns src/auth/, src/models/user.*
Lane B: [story 2-1]            → owns src/api/endpoints/, src/services/
Lane C: [story 3-1, story 3-2] → owns src/frontend/components/
```

Rules for lane assignment (see ./references/parallelism-rules.md):
- Stories in the same lane execute sequentially within the lane
- Lanes execute in parallel with each other
- No two lanes may own overlapping files
- If a dependency exists across lanes, the dependent lane waits

<action>Present the parallelism plan to {user_name}:</action>

For each lane, show:
- Lane identifier
- Stories assigned (in execution order within the lane)
- File ownership boundary
- Dependencies on other lanes (if any)
- Estimated teammate count needed

**STOP and WAIT for user approval** — User must approve the parallelism plan before proceeding. They may adjust lane assignments, add constraints, or remove stories.
</step>

<step n="3" goal="Prepare stories sequentially">
<action>For each selected story (across all lanes, in epic order):</action>

1. Invoke `bmad-create-story` for the story
2. Wait for story file creation to complete
3. Verify sprint-status.yaml updated to `ready-for-dev`

**Why sequential:** Each story preparation reads the latest code state and incorporates intelligence from the previous story. Running these in parallel would produce stories with stale context.

<action>After all stories are prepared, confirm with {user_name}:</action>

- All story files created at `{implementation_artifacts}/`
- Sprint status updated
- Ready to spawn agent team

**STOP and WAIT for user confirmation** before spawning teammates.
</step>

<step n="4" goal="Spawn agent team for parallel execution">
<action>Generate teammate spawn prompts for {user_name} to execute.</action>

For each lane, produce a ready-to-use teammate spawn prompt:

---

**Teammate: Lane {lane_id}**

> Create a teammate for Lane {lane_id}. Their job:
>
> Implement these stories in order using the `bmad-dev-story` skill:
> {for each story in lane: "- Story file: {implementation_artifacts}/{story-key}.md"}
>
> File ownership boundary — this teammate may ONLY edit files in:
> {list of owned directories/file patterns}
>
> HALT CONDITIONS — stop and message the lead if:
> 1. You need to edit a file outside your ownership boundary
> 2. A dependency from another lane is not yet complete
> 3. Tests fail and the root cause appears to be in another teammate's code
> 4. An architectural question arises not covered by the story file
> 5. The story scope expands beyond what was specified
>
> After completing all stories, message the lead with a summary of what was implemented, files changed, and any issues encountered.

---

<action>Present all teammate prompts to {user_name}</action>

Instruct {user_name}:
1. Spawn each teammate by pasting or adapting the prompt
2. Teammates will work in parallel — monitor the shared task list
3. Watch for HALT messages from teammates
4. Do NOT implement anything yourself while teammates are active — you are the coordinator

**Monitoring guidance:**
- Check sprint-status.yaml periodically — stories should move from `ready-for-dev` → `in-progress` → `review`
- If a teammate HALTs, resolve the issue (adjust boundaries, complete a dependency, or answer the question) and tell them to continue
- If a file conflict is detected, pause both teammates and mediate

**STOP and WAIT for all teammates to complete** — Do not proceed until all lanes report completion.
</step>

<step n="5" goal="Review and synthesize results">
<action>After all teammates complete:</action>

1. **Collect summaries** from each teammate's completion message
2. **Check sprint-status.yaml** — all executed stories should be at `review` or `done`
3. **Run a quick integration check** — are there any obvious conflicts between lanes?
4. **Present sprint execution summary** to {user_name}:

```
Sprint Execution Complete
========================
Stories executed: {count}
Lanes used: {lane_count}
Stories at 'review': {list}
Stories at 'done': {list}
HALT events: {count and summaries}
```

**Recommend next steps:**
- Run `bmad-code-review` (CR) for each story at `review` status — recommend doing this in a fresh context window per story
- If all stories in an epic are `done`, recommend `bmad-retrospective` (ER) for that epic
- If more backlog stories remain, recommend running `bmad-sprint-execute` again for the next batch

</step>

</workflow>

## Notes

- This workflow is designed for **Claude Code agent teams** — teammates are spawned via natural language in the lead session
- Teammates have independent context windows but share the same working directory and file system
- The parallelism plan is a recommendation — the user has final authority over lane assignments
- Story preparation (Step 3) is always sequential regardless of team size
- See `./references/parallelism-rules.md` for the complete rules governing parallel execution
- See `./references/sprint-status-guide.md` for how sprint-status.yaml coordinates the team
