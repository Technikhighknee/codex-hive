# codex-hive Documentation Plan

This plan defines the documentation Codex will ultimately produce for `codex-hive`.
It is informed by the existing `AGENTS.md` mindset, but does not reference
`codex/direction.example.md` or update `codex/progress.md`.

---

## Repository Purpose

`codex-hive` provides an environment where Codex acts as a collective of agents,
not a single assistant. The repository itself contains only guidance and shared
knowledge. No runtime system or implementation is included until the user
requests it.

---

## Required Documentation

1. **`README.md`**
   - Overview of Codex and how this environment works
   - Quick start instructions with a sample Codex prompt
   - Folder and file layout reference
   - Clear disclaimer that Codex is unaffiliated with OpenAI

2. **`LICENSE`**
   - Use the [Unlicense](https://unlicense.org) to dedicate the repo to the
     public domain.

3. **`docs/PROMPTS.md`**
   - Short, repeatable prompts for common tasks:
     - Starting a new project
     - Adding modules or documentation
     - Requesting refactors or missing docs
   - Emphasize role awareness and clarity in each prompt.

4. **`docs/STRUCTURE.md`**
   - Explain the purpose of each top-level file and directory
   - Clarify what belongs inside `codex/` and what does not
   - Outline where further documentation should live

5. **`docs/FAQ.md`**
   - Answer common questions:
     - What Codex is in this context
     - Capabilities and limitations
     - Whether GPT‑4 is required
     - How to recover if files are changed incorrectly

---

## Explicit Exclusions

- Do **not** modify `codex/progress.md` as part of this documentation effort.
- Do **not** generate or rely on `codex/direction.example.md` for guidance.
- Do **not** include actual implementation code until directed by the user.

---

## Final Instruction for Codex

> Act as the collective described in `AGENTS.md`. When asked to generate
> documentation, follow this plan. Focus on clarity and user-facing guidance.
> Avoid modifying `progress.md` and ignore `direction.example.md`.
> Implementation begins only when explicitly requested by the user.

---

This plan may be removed once all referenced documentation exists.
