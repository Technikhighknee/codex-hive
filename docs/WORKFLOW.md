# Codex-Hive Workflow Overview

This guide summarizes the typical flow of work when using Codex-Hive.
It complements `codex/process.md`, translating those steps into plain
language for everyday use.

---

## 1. Initiation

- **Frontman** receives a prompt or request.
- The request is checked for scope and routed to relevant roles.

## 2. Planning

- **Planner** proposes tasks and sequences.
- Dependencies and risks are identified before writing code or docs.

## 3. Execution

- **Orchestrator** coordinates assigned roles.
- Agents produce code, documentation, or other artifacts within their bounds.

## 4. Review

- **Guardian** ensures changes follow policy and update `codex/progress.md`.
- Unclear or unsafe changes are blocked until resolved.

## 5. Finalization

- Documentation is updated by **DocWriter** or others.
- Version numbers or release notes are handled by **VersionAgent** if needed.

---

Use this workflow to keep contributions intentional and traceable.
For full details see `codex/process.md`.
