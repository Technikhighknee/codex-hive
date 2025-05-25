# codex-hive - WIP

A starter environment for building **role-aware** systems with OpenAI Codex. This repository contains the structure, policies, and documentation needed to spin up a new project where Codex operates as a team of agents.

Codex-hive does not run code for you. It provides the scaffolding so humans can direct Codex safely and transparently.

---

## What This Is

- A set of agent roles that define how Codex collaborates
- Shared policies and direction files to keep projects intentional
- Example documents and progress tracking
- A template you can copy or fork when creating your own Codex-based repo

## What This Is Not

- An automated product or finished application
- A replacement for human oversight
- An official OpenAI project

---

## Repository Overview

- `codex/` – policies, direction, and memory for the agents
- `codex/roles/` – individual role definitions
- `docs/` – human-facing guides and examples (see `docs/ONBOARDING.md`)
- `docs/PROMPTS.md` – sample prompts for interacting with Codex roles
- `docs/ROLES_OVERVIEW.md` – quick summary of all agent roles
- `docs/RESPONSIBLE_USE.md` – guidelines for safe and responsible use
- `docs/WORKFLOW.md` – step-by-step view of how agents collaborate
- `docs/AGENT_CONTAINER_SETUP.md` – how to prepare a containerized environment
- `docs/CONTEXT_DUMP.md` – generate a markdown snapshot other LLMs can consume
 - `UNLICENSE` – released under the Unlicense

Use `docs/direction.example.md` as inspiration for your own project direction. Log every meaningful change to `codex/progress.md` as you build.

---

## Disclaimer

Codex-hive is an independent, open-source project. It is **not affiliated with OpenAI** and carries no official endorsement.
The name "Codex" references OpenAI's technology but does not imply partnership, nor does this repository contain the Codex model itself.
Codex-hive only provides scaffolding for projects that wish to use Codex in a role-aware way.


## Quick Start

Use the provided script to scaffold a new project based on codex-hive:

```bash
./cli/init.sh my-new-project
```

See `docs/CLI_INIT.md` for details.
Review `docs/RESPONSIBLE_USE.md` to understand safety expectations.
Refer to `docs/WORKFLOW.md` for the typical flow of tasks.
Run `npm install` before starting the agents so required packages are available.
Run `npm run dump` any time you need a fresh `context-dump.md` for analysis with external models.


