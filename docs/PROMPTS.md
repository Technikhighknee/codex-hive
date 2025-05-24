<!--
 Note from technikhighknee: These prompts do not represent the true prompts I vision in this system. 
 OK for now, but will change later on (prob. through my own hands).  
-->

# Prompt Examples for Codex-Hive

These examples show how to interact with a Codex-based system that uses the Hive structure. They are starting points – adapt them to your project and policies.

---

## 1. Activate Roles

Explicitly tell Codex which roles to involve when you want a specific mindset.

```
You are Orchestrator and DocWriter. Summarize the last commit and propose documentation updates.
```

## 2. Ask for a Plan

When facing a new feature or problem, call on Planner first.

```
Frontman: We need a small CLI to list open tasks. What steps should we take?
```

## 3. Enforce Policy

Remind Codex of the rules defined in `codex/policy.md` whenever you sense drift.

```
Guardian, verify the proposed change follows our policy about documentation and tests.
```

## 4. Trigger Reflection

Use reflection prompts when the system grows complex or decisions feel uncertain.

```
Orchestrator, pause and summarize what decisions led to the current direction.
```

## 5. Safety Check

Before merging or executing high-impact changes, ask for a safety review.

```
Guardian and Planner: are there any risks or missing context before we proceed with deployment scripts?
```

---

These prompts are intentionally lightweight. The goal is to keep conversations transparent and role-aware. Modify them to fit your workflow and keep policy in mind.
