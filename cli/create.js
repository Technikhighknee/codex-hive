#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const target = process.argv[2];

if (!target) {
  console.error('Usage: create-codex-hive <target-directory>');
  process.exit(1);
}
if (fs.existsSync(target)) {
  console.error(`Error: ${target} already exists`);
  process.exit(1);
}

fs.mkdirSync(target, { recursive: true });

const copyDir = (src, dest) => {
  fs.cpSync(path.join(ROOT, src), path.join(target, dest || src), { recursive: true });
};

copyDir('codex');
copyDir('docs');
fs.copyFileSync(path.join(ROOT, 'README.md'), path.join(target, 'README.md'));
fs.copyFileSync(path.join(ROOT, 'LICENSE.lic'), path.join(target, 'LICENSE.lic'));

console.log('Project scaffold created.');
console.log('Edit codex/direction.md to define your system goals.');
