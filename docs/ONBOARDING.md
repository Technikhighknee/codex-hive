# Getting Started with Codex-Hive

This guide explains how to adapt this repository when creating your own Codex-based project.

---

## 1. Copy or Fork

Clone this repository or use it as a template. It provides the basic structure for a role-aware Codex system.

```
$ git clone <your fork>
```

## 2. Review the Core Files

- `codex/AGENTS.md` – overview of the team mindset
- `codex/direction.md` – philosophy and system goals
- `codex/policy.md` – rules each agent follows
- `docs/direction.example.md` – example project direction

Understand these before changing anything.

## 3. Define Your Direction

Create or edit `codex/direction.md` to capture your project's intent. Keep it concise and focused on goals, modules, and documentation expectations.

## 4. Track Progress

Every meaningful change should be logged in `codex/progress.md` using the format defined there. This log is the project's memory.

## 5. Customize Roles if Needed

Role files live under `codex/roles/`. Update them only if your project requires different responsibilities or behaviors.

## 6. Document for Humans

Add or update files in `docs/` to teach future contributors how to interact with your system. Link to them from `README.md` where appropriate.

---

Codex-Hive is a starting point. Shape it to fit your project, keep the history clear, and let each file explain why it exists.
