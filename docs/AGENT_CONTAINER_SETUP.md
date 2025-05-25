# Agent Container Setup

This guide describes the minimal steps for running Codex in a containerized environment.

1. Ensure Node.js is available (version 18 or later recommended).
2. In the container start script, run `npm install` from the project root.
   This installs the packages required by the repository, such as `dump-for-context`.
3. After installation, execute the agent or any provided npm scripts.

4. Be aware that network access is typically disabled once the start script completes.
   Fetch any additional packages or resources during setup. The maintainer
   `Technikhighknee` can update the start script if new dependencies are needed.

Adjust your container configuration so that dependencies are installed automatically before the agents run.
