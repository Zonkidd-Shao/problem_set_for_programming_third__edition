const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '整理后题目集');
const errors = [];
let solutionCount = 0;
let questionCount = 0;
for (const category of ['编程题', '函数题']) {
  const categoryDir = path.join(root, category);
  for (const name of fs.readdirSync(categoryDir)) {
    const dir = path.join(categoryDir, name);
    const solution = path.join(dir, 'solution.js');
    const question = path.join(dir, '题目.md');
    if (!fs.existsSync(solution)) errors.push(`缺少代码：${solution}`);
    else {
      solutionCount++;
      try { new vm.Script(fs.readFileSync(solution, 'utf8'), { filename: solution }); }
      catch (err) { errors.push(`语法错误：${solution}\n${err.message}`); }
    }
    if (!fs.existsSync(question)) errors.push(`缺少题目：${question}`);
    else questionCount++;
  }
}
if (solutionCount !== 116 || questionCount !== 116) errors.push(`数量错误：代码 ${solutionCount}，题目 ${questionCount}`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`检查通过：${solutionCount} 个 solution.js、${questionCount} 个题目.md，全部语法有效。`);
