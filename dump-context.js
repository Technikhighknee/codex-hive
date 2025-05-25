/** 
 * Generate a context dump of the current codebase.
 * This script recursively collects all files in the current directory,
 * formats them with language-specific syntax highlighting,
 * and writes them to a file named `context-dump.md`.
 * The output is structured to be easily readable and usable as context for language models. 
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

/**
 * Generate a context dump of the current codebase.
 * 
 * @param {string} rootDir – the base directory
 * @param {object} options – optional config:
 *   {
 *     outputFile: string,
 *     ignoredDirs: string[],
 *     languageMap: Record<string, string>
 *   }
 */
export function generateContextDump(rootDir = process.cwd(), options = {}) {
  const {
    outputFile = 'context-dump.md',
    ignoredDirs = ['.git', 'node_modules'],
    languageMap = {
      js: 'js',
      ts: 'ts',
      json: 'json',
      md: 'md',
      sh: 'bash',
      yml: 'yaml',
      yaml: 'yaml',
      txt: 'txt',
      lic: 'txt',
    },
  } = options;

  const IGNORED = new Set(ignoredDirs);

  const collectFiles = (dir, collected = []) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name));

    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!IGNORED.has(entry.name)) {
          collectFiles(full, collected);
        }
      } else if (entry.isFile()) {
        const rel = path.relative(rootDir, full);
        if (rel === outputFile) continue;
        collected.push(full);
      }
    }
    return collected;
  };

  const formatFileContent = (filePath) => {
    const relPath = path.relative(rootDir, filePath).split(path.sep).join('/');
    const ext = path.extname(filePath).slice(1);
    const lang = languageMap[ext] || '';

    const header = `// File: ${relPath}`;
    const fence = '```' + lang;
    let body = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
    if (body.endsWith('\n')) body = body.slice(0, -1);

    return [header, fence, body, '```', ''].join('\n');
  };

  const files = collectFiles(rootDir);
  const content = files.sort().map(formatFileContent).join('\n');
  fs.writeFileSync(path.join(rootDir, outputFile), content);
}

// CLI entrypoint
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.argv[1] === __filename) {
  generateContextDump(__dirname);
}
