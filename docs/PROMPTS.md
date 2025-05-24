<!--
 Note from technikhighknee: OK for now, but will change later on (prob. through my own hands).  
-->

# Prompt Examples for Codex-Hive

These examples show how to interact with a Codex-based system that uses the Hive structure. They are starting points – adapt them to your project and policies.

---

## 1. Let Codex follow codex/directions.md

```
Act as the full Codex team as defined in AGENTS.md.

Your role is to further develop this repository — not as code, but as structure.  
You are not building a product. You are shaping a foundation for others to build.

This is `codex-hive`: a meta-environment for intentional, role-aware Codex systems.

You are allowed to:
- Add or update files under `codex/`, `docs/`, or top-level
- Modify or create Markdown content, prompt examples, role definitions, CLI templates
- Scaffold initial system structure (e.g. AGENTS.md, direction.md)
- Update `docs/` for clarity, onboarding, and responsible use
- Log every meaningful action in `codex/progress.md`

Task:

➤ Choose the next clearly actionable, high-leverage step toward making this repository usable for humans building Codex-based systems.

Use as input:
- `codex/direction.md` (philosophy + goals)
- Existing structure of the repository

Then:
1. Implement or update the needed structure, file, or content
2. Create human-facing documentation if applicable (`docs/`)
3. Log the action in `codex/progress.md` using the agreed format

Rules:
- Default to the Orchestrator mindset: coordination and clarity
- Use other agents as needed: DocWriter, SafetyLead, Architect
- Prioritize human understanding and reuse over cleverness
- Never leave a change undocumented or structurally ambiguous

Output only the patch.
Do not explain or narrate. Just build.
```
