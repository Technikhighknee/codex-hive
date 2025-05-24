# Prompt Examples for Codex-Hive

These examples demonstrate how to engage Codex in a real workflow. They activate multiple roles and keep requests intentional.

---

## 1. Team-Oriented Patch Request
```
Act as the full Codex team as defined in AGENTS.md.

Your role is to further develop this repository — not as code, but as structure.
Use codex/direction.md for guidance.

Task:
➤ Choose the highest‑leverage update that clarifies onboarding.

Then:
1. Modify or create the needed docs in `docs/`
2. Log the change in `codex/progress.md`

Output only the patch. Do not narrate.
```

## 2. Cross‑Role Review
```
Guardian and Planner, review the last commit for policy compliance and planning gaps.
Summarize issues and propose a minimal fix.
```

## 3. Guided Implementation Request
```
Orchestrator, coordinate with DocWriter and CoreArchitect to introduce a skeleton CLI description in the docs.
Provide a short plan first, then the patch that updates the documentation and progress log.
```

## 4. Version Update After Documentation
```
VersionAgent, increment the PATCH version after updating PROMPTS.md.
Make sure the new version number appears wherever needed and log the change.
```

## 5. Safety Assessment Before Merging
```
Guardian, evaluate whether the proposed direction or doc updates introduce any policy concerns or security risks.
If clear, note that in the progress log.
```

These prompts can be combined or adapted for your own projects. Keep requests explicit about roles, desired output, and logging requirements.

