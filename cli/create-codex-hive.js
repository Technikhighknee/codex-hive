#!/usr/bin/env node
import {cp, mkdir} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const targetDir = process.argv[2];
if (!targetDir) {
  console.error('Usage: create-codex-hive <target-directory>');
  process.exit(1);
}

const target = resolve(process.cwd(), targetDir);
if (existsSync(target)) {
  console.error(`Error: ${targetDir} already exists`);
  process.exit(1);
}

await mkdir(target, {recursive: true});

async function copy(src, dest) {
  await cp(src, dest, {recursive: true});
}

await copy(join(__dirname, '../codex'), join(target, 'codex'));
await copy(join(__dirname, '../docs'), join(target, 'docs'));
await cp(join(__dirname, '../README.md'), join(target, 'README.md'));

console.log('Project scaffold created.');
console.log('Edit codex/direction.md to define your system goals.');

