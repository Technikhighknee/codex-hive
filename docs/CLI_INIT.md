# Note from technikhighknee
- This guide now reflects the initial Node-based CLI.
- It may still change, but you can try it locally.

# Codex-Hive CLI


This repository includes a minimal script to scaffold a new Codex-based project.

```
npx create-codex-hive <target-directory>
```

The command copies the `codex/` and `docs/` folders, along with `README.md` and `LICENSE.lic`, into the target directory. Use it when you want a quick starting point.

Change into your new project and install dependencies:

```bash
cd <target-directory>
npm install
```

After running the script:

1. Review `codex/direction.md` in the new project and adjust it to your needs.
2. Update `README.md` to explain your specific goals.
3. Start logging changes to `codex/progress.md` as you build.

The CLI is intentionally lightweight. Expand or replace it to fit your workflow.

