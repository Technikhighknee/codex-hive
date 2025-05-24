#!/usr/bin/env bash
# codex-hive CLI - initialize a new Codex-based project

set -e

TARGET_DIR=$1
if [ -z "$TARGET_DIR" ]; then
  echo "Usage: $0 <target-directory>" >&2
  exit 1
fi

if [ -e "$TARGET_DIR" ]; then
  echo "Error: $TARGET_DIR already exists" >&2
  exit 1
fi

mkdir -p "$TARGET_DIR"

# copy core directories
cp -r codex "$TARGET_DIR/"
cp -r docs "$TARGET_DIR/"
cp README.md "$TARGET_DIR/"
cp LICENSE.lic "$TARGET_DIR/"

cat <<'MSG'
Project scaffold created.
Edit codex/direction.md to define your system goals.
MSG

