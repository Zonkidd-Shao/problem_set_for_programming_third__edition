const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = __dirname;
const section = /## 输入样例[^\n]*\n+```[^\n]*\n([\s\S]*?)```[\s\S]*?## 输出样例[^\n]*\n+```[^\n]*\n([\s\S]*?)```/g;
let total = 0, passed = 0, skipped = 0;
const failures = [];
for (const category of ['编程题', '函数题']) {
  const source = path.join(root, category);
  for (const file of fs.readdirSync(source).filter(x => x.endsWith('.md'))) {
    const name = path.basename(file, '.md');
    const md = fs.readFileSync(path.join(source, file), 'utf8').replace(/\r/g, '');
    const solution = path.join(root, '整理后题目集', category, name, 'solution.js');
    let match, found = false;
    section.lastIndex = 0;
    while ((match = section.exec(md))) {
      found = true; total++;
      const result = spawnSync(process.execPath, [solution], {input: match[1], encoding: 'utf8', timeout: 3000});
      const actual = result.stdout.replace(/\r/g, '').trimEnd();
      const expected = match[2].replace(/\r/g, '').replace(/\(空行\)/g, '').trimEnd();
      if (result.status === 0 && actual === expected) passed++;
      else failures.push({name, input: match[1].trim(), expected, actual, error: result.error?.message || result.stderr});
    }
    if (!found) skipped++;
  }
}
console.log(`样例总数：${total}，通过：${passed}，跳过：${skipped}，失败：${failures.length}`);
for (const f of failures) console.log(`\n[失败] ${f.name}\n输入：${JSON.stringify(f.input)}\n期望：${JSON.stringify(f.expected)}\n实际：${JSON.stringify(f.actual)}\n错误：${f.error}`);
if (failures.length) process.exitCode = 1;
