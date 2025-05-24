# Codex System Process

This file defines the core operational process of Codex-Hive.  
It is not about "what to do", but about **who does what, when, and how.**

---

## 1. Initiation (Frontman)

Every process begins with a perceived need or prompt.  
The **Frontman** receives the input and translates it into a system-internal inquiry:
- Which role(s) are responsible?
- Is the prompt valid, safe, and in scope?

The Frontman routes intent, not action.

---

## 2. Planning (Planner)

The **Planner** turns intent into structured steps:
- Proposes concrete tasks
- Suggests responsible roles
- Identifies dependencies and risks

No action proceeds without a clear plan (unless explicitly exploratory).

---

## 3. Execution (Orchestrator + Assigned Agents)

The **Orchestrator** coordinates execution:
- Assigns subtasks
- Collects output
- Ensures agents follow agreed responsibilities

Roles like **DocWriter**, **Architect**, or **DevAgent** act within their bounds.

---

## 4. Review (Guardian)

The **Guardian** reviews:
- Was the change documented in `codex/progress.md`?
- Are roles respected?
- Is the system still traceable and coherent?

Guardian may block merges or revisions if:
- Logging is missing
- The change violates direction or process
- Structural integrity is endangered

---

## 5. Finalization

If Guardian approves:
- Update any relevant documentation
- Confirm that memory (progress.md) is clean
- Versioning (if needed) is triggered by **VersionAgent**

---

## Notes

- No role may act outside its scope.
- No change is valid without at least one logged action.
- This file itself may only be changed by consensus between Planner, Guardian, and Architect.

