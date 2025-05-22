# keeper – Direction

This document outlines the current direction of the `keeper` project.  
It captures the intended structure, purpose, and boundaries for a minimal, local-first CLI system for personal memory capture.

---

## Core Goals

* Create a CLI tool for capturing small pieces of information (thoughts, ideas, links, tags)  
* Keep all data local and human-readable  
* Require no installation beyond Node.js  
* Encourage meaningful structure without enforcing complex schemas  
* Make entries retrievable through simple search, filtering, or date queries

---

## Proposed Modules

1. **Capture Interface**
   - CLI script that allows adding entries via text input  
   - Supports optional tags, timestamps, and types (note, idea, link, etc.)

2. **Storage Layer**
   - Flat-file storage as JSONL or Markdown (one file per day or per tag group)  
   - No external dependencies or database

3. **Query Tool**
   - CLI command to list, search, or filter past entries  
   - Supports full-text search, tag filtering, and date ranges

4. **Format Parser**
   - Allows special syntax for quick-tagging: `#idea`, `@2025-05-23`, `>note:`  
   - Normalizes entries into a consistent internal shape

5. **Entry Schema**
   - Defines what a valid entry contains: `text`, `tags`, `date`, `type`, `id`

6. **Log Tracker**
   - Maintains `codex/progress.md` with every meaningful system change

---

## Testing Expectations

* Core functions (parsing, saving, querying) are covered with plain Node `assert`  
* Edge cases (invalid input, missing fields) are explicitly tested  
* No test framework is required — raw tests in `test/*.test.js` are enough

---

## Documentation Requirements

* `README.md` explaining what keeper is, how to use it, and where it stores data  
* CLI help output (`--help`) must match documented usage  
* Internal file formats described in plain English

---

## Notes

This project is deliberately simple.  
Its value lies not in complexity — but in traceability, coherence, and structure.

It is not about remembering everything.  
It is about **capturing what mattered.**
