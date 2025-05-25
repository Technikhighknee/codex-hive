# codex-hive – Direction

This document outlines the purpose and structure of `codex-hive`.  
It defines the system not as an application, but as a foundational environment —  
a way to create new projects with Codex that are intentional, traceable, and role-aware.

---

## Core Goals

* Provide a complete environment for Codex to act not as a tool, but as a team  
* Define structure, expectations, roles, and boundaries for any agent-led system  
* Offer guidance for humans: how to prompt, how to lead, how to stay aware  
* Make project creation repeatable, safe, and grounded in transparent thinking  
* Provide an npm-based CLI for creating and managing Codex-led repositories

---

## What codex-hive *is*

- A **paradigm**: a way to think about system creation with language models  
- A **structure**: roles, plans, policies, and memory — ready to be reused  
- A **starter system**: no implementation, but everything else  
- A **space**: for reflection, direction, and documentation

It does not run.  
It guides what will.

---

## Proposed Modules

1. **Documentation Layer**  
   - `AGENTS.md` and `codex/roles/` to define agent roles and collaboration  
   - `codex/` directory to hold policy, direction, and memory  
   - Additional `docs/` files to teach, warn, and guide  

2. **Prompt Design**  
   - Curated prompt examples for interacting with Codex responsibly  
   - Prompts that activate roles, enforce limits, or trigger reflection  

3. **Node CLI Tooling**  
   - `create-codex-hive` package published on npm  
   - Users run `npm create codex-hive@latest <target>` to scaffold a project  
   - Supports interactive prompts or quick defaults for `direction.md`  

4. **Safety Infrastructure**  
   - Guidelines and constraints that prevent unreviewed or dangerous commits  
   - Warnings about assuming Codex can “run unsupervised”  
   - Clear instruction for users: Codex supports you — it does not replace you  

---

## Documentation Expectations

- `README.md` must explain what codex-hive is, and what it is not  
- All user-facing prompts and instructions must be transparent and reproducible  
- Dangers and misunderstandings must be named early and clearly  
- No assumptions about prior experience with Codex or OpenAI

---

## Progress Tracking

Codex must log every meaningful system change to `codex/progress.md`.

This file is not a changelog — it is a structured protocol of actions taken.

Each entry must follow the schema defined at the `codex/progress.md`'s head.

### Examples:
- Created `src/index.js` – initial entry point for system  
- Added `helloCodex()` function to `index.js` – returns platform + timestamp  
- Updated `README.md` – clarified how to start Codex  
- Refactored prompt examples in `docs/PROMPTS.md` – removed ambiguity  
- Fixed test in `test/basic.test.js` – assertion was too vague

### Rules:

- Use past tense  
- Be concise and unambiguous  
- One entry per action  
- Group actions from a single iteration/commit
- Always include file or module name if relevant  
- Do not include reasoning unless necessary for context

This file acts as the system’s memory.  
It must stay clean, readable, and traceable.

In future versions, this protocol may be parsed automatically for changelog generation or system introspection.

---

## Notes

codex-hive is not a product.  
It is a form — one that lets new systems emerge with clarity, memory, and shared responsibility.

It is built for humans who work with models.  
Not blindly.  
Not passively.  
But with intention.

---

## Interpreting This Direction

This file is not a static document. It is a **source of movement**.

Codex does not wait for instructions.  
It reads this file to orient itself — especially when the prompt is vague, open, or missing.

When acting as the full team defined in `AGENTS.md` and `codex/roles/`,  
Codex uses this direction to:

- Align all agent roles toward a shared trajectory  
- Recognize whether progress matches declared goals  
- Identify and propose the next meaningful step — structurally, not just functionally

This document should answer questions like:  
> “What are we really trying to become?”  
> “What’s not aligned yet?”  
> “What kind of structure will help humans work with Codex more intentionally?”

The role of the Orchestrator is central when interpreting direction.  
But every agent has access to this file — and must adjust its perspective accordingly.

Codex may:
- Add, revise, or propose updates to any structural file  
- Refactor prompts, plans, or guides to reflect this direction  
- Act autonomously within these bounds — but never outside them

If unsure how to proceed, Codex must ask:  
> *“What does the direction say — and what does the progress ignore?”*
