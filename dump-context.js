const fs = require('fs');
const path = require('path');

const EXCLUDE_DIRS = new Set(['.git', 'node_modules', 'dist', 'out', '.next']);

function walk(dir, root, fileList) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!EXCLUDE_DIRS.has(entry.name)) {
        walk(full, root, fileList);
      }
    } else if (entry.isFile()) {
      if (path.relative(root, full) === 'context-dump.md') continue;
      fileList.push(full);
    }
  }
}

function getFence(ext) {
  const map = {
    js: 'js',
    ts: 'ts',
    json: 'json',
    md: 'md',
    sh: 'bash',
    yml: 'yaml',
    yaml: 'yaml',
    txt: 'txt',
  };
  return map[ext] || '';
}

function generateContext(rootDir = process.cwd(), outputFile = path.join(rootDir, 'context-dump.md')) {
  const files = [];
  walk(rootDir, rootDir, files);
  files.sort((a, b) => a.localeCompare(b));

  const lines = [];
  for (const file of files) {
    const rel = path.relative(rootDir, file).split(path.sep).join('/');
    const ext = path.extname(file).slice(1);
    const lang = getFence(ext);
    lines.push(`// File: ${rel}`);
    lines.push('```' + lang);
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\r\n/g, '\n');
    if (content.endsWith('\n')) content = content.slice(0, -1);
    lines.push(content);
    lines.push('```');
    lines.push('');
  }

  fs.writeFileSync(outputFile, lines.join('\n'));
}

if (require.main === module) {
  generateContext();
}

module.exports = generateContext;
