# Getting Started with Codex-Hive

This guide explains how to adapt this repository when creating your own Codex-based project.
Codex-hive does not include OpenAI's Codex model. It is a template for organizing projects that make use of that technology.

---

## 1. Copy or Fork

Clone this repository or use it as a template. It provides the basic structure for a role-aware Codex system.

```
$ git clone https://github.com/Technikhighknee/codex-hive/
```

## 2. Install Dependencies

Run `npm install` in the project root. If you run Codex inside a
container, make sure the container's start script executes this command so
all Node-based tools are available. See
`docs/AGENT_CONTAINER_SETUP.md` for a short setup guide.

## 3. Review the Core Files

- `codex/AGENTS.md` – overview of the team mindset
- `codex/direction.md` – philosophy and system goals
- `codex/policy.md` – rules each agent follows
- `docs/direction.example.md` – example project direction

Understand these before changing anything.

## 4. Define Your Direction

Create or edit `codex/direction.md` to capture your project's intent. Keep it concise and focused on goals, modules, and documentation expectations.

## 5. Customize Roles if Needed

Role files live under `codex/roles/`. Update them only if your project requires different responsibilities or behaviors.

---

Codex-Hive is a starting point. Shape it to fit your project, keep the history clear, and let each file explain why it exists.
