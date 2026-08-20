const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.join(__dirname, '整理后题目集', '编程题');
const cases = [
  ['01-练习2-1-Programming in C is fun!', '', 'Programming in C is fun!'],
  ['03-练习2-4-温度转换', '', '65'],
  ['10-练习2-13-求N分之一序列前N项和', '3\n', 'sum = 1.833333'],
  ['27-习题3-1-比较大小', '3 1 2\n', '1->2->3'],
  ['50-练习7-2-求最大值及其下标', '4\n3 9 2 9\n', '9 1'],
  ['68-习题9-1-时间换算', '23:59:50\n15\n', '00:00:05'],
];
for (const [name, input, expected] of cases) {
  const result = spawnSync(process.execPath, [path.join(root, name, 'solution.js')], { input, encoding: 'utf8' });
  const actual = result.stdout.trim();
  if (result.status !== 0 || actual !== expected) {
    console.error(`${name}: 期望 ${JSON.stringify(expected)}，实际 ${JSON.stringify(actual)}，错误 ${result.stderr}`);
    process.exit(1);
  }
}
console.log(`抽查通过：${cases.length} 个命令行样例。`);
