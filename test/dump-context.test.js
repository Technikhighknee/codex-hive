const fs = require('fs');
const path = require('path');
const os = require('os');
const assert = require('assert');
const dump = require('../dump-context');

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'context-'));

write(path.join(tmp, 'a.js'), "console.log('a');\n");
write(path.join(tmp, 'b.txt'), 'b file\n');
write(path.join(tmp, 'dir/c.md'), '# c\n');
fs.mkdirSync(path.join(tmp, 'node_modules')); // should be ignored
write(path.join(tmp, 'node_modules/ignore.js'), 'ignored');

const out = path.join(tmp, 'context-dump.md');
dump(tmp, out);

const expected = [
  '// File: a.js',
  '```js',
  "console.log('a');",
  '```',
  '',
  '// File: b.txt',
  '```txt',
  'b file',
  '```',
  '',
  '// File: dir/c.md',
  '```md',
  '# c',
  '```',
  '',
].join('\n');

const result = fs.readFileSync(out, 'utf8');
assert.strictEqual(result, expected);
console.log('dump-context test passed');
