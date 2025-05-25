import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { generateContextDump } from '../dump-context.js';

let tmpDir;

const add = (relPath, content) => {
  const file = path.join(tmpDir, relPath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
};

const parseBlocks = (file = 'context-dump.md') => {
  const raw = fs.readFileSync(path.join(tmpDir, file), 'utf8').trim();

  return raw.split('\n\n').map(block => {
    const [header, fence, ...rest] = block.trim().split('\n');
    return {
      path: header.replace('// File: ', ''),
      lang: fence.replace(/^```/, ''),
      content: rest.slice(0, -1).join('\n'),
    };
  });
};

beforeEach(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ctx-'));
});

afterEach(() => {
  fs.rmSync(tmpDir, { recursive: true, force: true });
});

describe('generateContextDump', () => {
  it('includes only expected files as blocks', () => {
    add('a.js', 'console.log(1)');
    add('skip/ignore.txt', 'nope');

    generateContextDump(tmpDir, {
      ignoredDirs: ['skip'],
    });

    const blocks = parseBlocks();

    expect(blocks.map(b => b.path)).toEqual(['a.js']);
    expect(blocks[0].lang).toBe('js');
    expect(blocks[0].content).toBe('console.log(1)');
  });

  it('uses correct language tag from languageMap', () => {
    add('test.xyz', 'custom');

    generateContextDump(tmpDir, {
      languageMap: { xyz: 'customlang' },
    });

    const block = parseBlocks().find(b => b.path === 'test.xyz');
    expect(block.lang).toBe('customlang');
  });

  it('uses empty fence if extension is unknown', () => {
    add('strange.abc', '???');

    generateContextDump(tmpDir);

    const block = parseBlocks().find(b => b.path === 'strange.abc');
    expect(block.lang).toBe('');
  });

  it('writes to custom output file', () => {
    add('x.js', '42');

    generateContextDump(tmpDir, {
      outputFile: 'custom.md',
    });

    const blocks = parseBlocks('custom.md');
    expect(blocks[0].path).toBe('x.js');
  });

  it('includes all blocks and their metadata', () => {
    add('a.js', 'x');
    add('b.ts', 'y');
    add('c.md', 'z');

    generateContextDump(tmpDir);

    const blocks = parseBlocks();

    expect(blocks).toEqual([
      { path: 'a.js', lang: 'js', content: 'x' },
      { path: 'b.ts', lang: 'ts', content: 'y' },
      { path: 'c.md', lang: 'md', content: 'z' },
    ]);
  });
});
