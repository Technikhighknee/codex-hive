# Generating a Repository Context Dump

Codex-Hive includes a simple script to capture the current state of your project files.
The resulting file is meant for other LLMs or GPT-based tools that analyze your repository.
For example, you might feed the dump to a private model that generates a "meaning-map" of your code base.

## How to Run

```bash
npm run dump
```

This executes the `dump-for-context` package using `dump.config.js`.
It outputs a `context-dump.md` file at the project root.

Commit the dump only if it helps with code review or debugging. It can grow large.

## When to Regenerate

- After significant structural updates
- Before providing the repository to another model for analysis

Keep the dump out of your normal workflow unless needed.
