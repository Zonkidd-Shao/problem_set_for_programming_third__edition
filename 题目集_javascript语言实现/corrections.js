const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '整理后题目集');
const P = body => `'use strict';\nconst fs = require('fs');\nconst data = fs.readFileSync(0, 'utf8').replace(/\\r/g, '');\n${body}`;
const F = body => `'use strict';\n${body}`;

function file(category, prefix, source) {
  const dir = fs.readdirSync(path.join(root, category)).find(x => x.startsWith(prefix));
  if (!dir) throw new Error(`找不到题目目录：${category}/${prefix}`);
  fs.writeFileSync(path.join(root, category, dir, 'solution.js'), source);
}

function apply() {
  // 编程题：按原题输入输出格式修正。
  file('编程题', '05-', P(String.raw`const f = Number(data.trim());
console.log('Celsius = ' + Math.trunc(5 * (f - 32) / 9));`));
  file('编程题', '06-', P(String.raw`const [a, b] = data.trim().split(/\s+/).map(Number);
console.log(a + ' + ' + b + ' = ' + (a + b));
console.log(a + ' - ' + b + ' = ' + (a - b));
console.log(a + ' * ' + b + ' = ' + (a * b));
console.log(a + ' / ' + b + ' = ' + Math.trunc(a / b));`));
  file('编程题', '07-', P(String.raw`const x = Number(data.trim());
const y = x === 0 ? 0 : 1 / x;
console.log('f(' + x.toFixed(1) + ') = ' + y.toFixed(1));`));
  file('编程题', '08-', P(String.raw`const x = Number(data.trim());
const y = x >= 0 ? Math.sqrt(x) : x * x + 2 * x - 2;
console.log('f(' + x.toFixed(2) + ') = ' + y.toFixed(2));`));
  file('编程题', '09-', P(String.raw`const a = data.trim().split(/\s+/).map(Number);
const lower = a[0], upper = a[1];
if (lower > upper) console.log('Invalid.');
else {
  const lines = ['fahr celsius'];
  for (let f = lower; f <= upper; f += 2) lines.push(f + '   ' + (5 * (f - 32) / 9).toFixed(1));
  console.log(lines.join('\n'));
}`));
  file('编程题', '10-', P(String.raw`const n = Number(data.trim());
let s = 0;
for (let i = 1; i <= n; i++) s += 1 / i;
console.log('sum = ' + s.toFixed(6));`));
  file('编程题', '11-', P(String.raw`const n = Number(data.trim());
let s = 0;
for (let i = 0; i < n; i++) s += 1 / (2 * i + 1);
console.log('sum = ' + s.toFixed(6));`));
  file('编程题', '12-', P(String.raw`const n = Number(data.trim());
let s = 0;
for (let i = 0; i < n; i++) s += (i % 2 ? -1 : 1) / (3 * i + 1);
console.log('sum = ' + s.toFixed(3));`));
  file('编程题', '13-', P(String.raw`const n = Number(data.trim());
const lines = [];
for (let i = 0, p = 1; i <= n; i++, p *= 3) lines.push('pow(3,' + i + ') = ' + p);
console.log(lines.join('\n'));`));
  file('编程题', '14-', P(String.raw`const [m, n] = data.trim().split(/\s+/).map(Number);
let result = 1;
const k = Math.min(m, n - m);
for (let i = 1; i <= k; i++) result = result * (n - k + i) / i;
console.log('result = ' + Math.round(result));`));
  file('编程题', '15-', P(String.raw`const a = data.trim().split(/\s+/).map(Number);
const sum = a.reduce((x, y) => x + y, 0);
console.log('Sum = ' + sum + '; Average = ' + (sum / a.length).toFixed(1));`));
  file('编程题', '16-', P(String.raw`const kwh = Number(data.trim());
const cost = kwh <= 50 ? kwh * 0.53 : 50 * 0.53 + (kwh - 50) * 0.58;
console.log('cost = ' + cost.toFixed(2));`));
  file('编程题', '17-', P(String.raw`const [m, n] = data.trim().split(/\s+/).map(Number);
let sum = 0;
for (let i = m; i <= n; i++) sum += i * i + 1 / i;
console.log('sum = ' + sum.toFixed(6));`));
  file('编程题', '18-', P(String.raw`const n = Number(data.trim());
let sum = 0;
for (let i = 1; i <= n; i++) sum += (i % 2 ? 1 : -1) * i / (2 * i - 1);
console.log(sum.toFixed(3));`));
  file('编程题', '19-', P(String.raw`const n = Number(data.trim());
let sum = 0;
for (let i = 1; i <= n; i++) sum += Math.sqrt(i);
console.log('sum = ' + sum.toFixed(2));`));
  file('编程题', '20-', P(String.raw`const n = Number(data.trim());
let f = 1, sum = 0;
for (let i = 1; i <= n; i++) { f *= i; sum += f; }
console.log(sum);`));
  file('编程题', '21-', P(String.raw`const x = Number(data.trim());
console.log('sign(' + x + ') = ' + (x > 0 ? 1 : x < 0 ? -1 : 0));`));
  file('编程题', '22-', P(String.raw`const a = data.trim().split(/\s+/).map(Number);
const n = a[0], scores = a.slice(1, n + 1);
console.log('average = ' + (scores.reduce((x, y) => x + y, 0) / n).toFixed(1));
console.log('count = ' + scores.filter(x => x >= 60).length);`));
  file('编程题', '23-', P(String.raw`const s = data.replace(/\n$/, '');
let letter = 0, blank = 0, digit = 0, other = 0;
for (const c of s.slice(0, 10)) {
  if (/[A-Za-z]/.test(c)) letter++;
  else if (c === ' ' || c === '\n') blank++;
  else if (/[0-9]/.test(c)) digit++;
  else other++;
}
console.log('letter = ' + letter + ', blank = ' + blank + ', digit = ' + digit + ', other = ' + other);`));
  file('编程题', '24-', P(String.raw`const end = Number(data.trim());
if (end < 2001 || end > 2100) console.log('Invalid year!');
else {
  const years = [];
  for (let y = 2001; y <= end; y++) if (y % 400 === 0 || y % 4 === 0 && y % 100 !== 0) years.push(y);
  console.log(years.length ? years.join('\n') : 'None');
}`));
  file('编程题', '26-', P(String.raw`const prices = {1: 3, 2: 2.5, 3: 4.1, 4: 10.2};
const lines = ['[1] apple', '[2] pear', '[3] orange', '[4] grape', '[0] exit'];
let queries = 0;
for (const n of data.trim().split(/\s+/).map(Number)) {
  if (n === 0 || queries >= 5) break;
  queries++;
  lines.push('price = ' + (prices[n] || 0).toFixed(2));
}
console.log(lines.join('\n'));`));
  file('编程题', '28-', P(String.raw`const [v, limit] = data.trim().split(/\s+/).map(Number);
const rate = Math.round((v - limit) / limit * 100);
if (rate < 10) console.log('OK');
else if (rate >= 50) console.log('Exceed ' + rate + '%. License Revoked');
else console.log('Exceed ' + rate + '%. Ticket 200');`));
  file('编程题', '29-', P(String.raw`const [km, wait] = data.trim().split(/\s+/).map(Number);
let fee = 10;
if (km > 3 && km <= 10) fee += (km - 3) * 2;
else if (km > 10) fee += 7 * 2 + (km - 10) * 3;
fee += Math.floor(wait / 5) * 2;
console.log(Math.round(fee));`));
  file('编程题', '31-', P(String.raw`const a = data.trim().split(/\s+/).map(Number);
const sides = [
  Math.hypot(a[0] - a[2], a[1] - a[3]),
  Math.hypot(a[0] - a[4], a[1] - a[5]),
  Math.hypot(a[2] - a[4], a[3] - a[5])
];
const area = Math.abs((a[2] - a[0]) * (a[5] - a[1]) - (a[3] - a[1]) * (a[4] - a[0])) / 2;
if (area < 1e-12) console.log('Impossible');
else console.log('L = ' + sides.reduce((x, y) => x + y, 0).toFixed(2) + ', A = ' + area.toFixed(2));`));
  file('编程题', '32-', P(String.raw`const eps = Number(data.trim());
let sum = 0, i = 0, term;
do { term = (i++ % 2 ? -1 : 1) / (3 * (i - 1) + 1); sum += term; } while (Math.abs(term) > eps);
console.log('sum = ' + sum.toFixed(6));`));
  file('编程题', '33-', P(String.raw`const a = data.trim().split(/\s+/).map(Number), target = a[0], max = a[1], out = [];
for (let i = 0; i < max && i + 2 < a.length; i++) {
  const guess = a[i + 2];
  if (guess < 0) break;
  if (guess === target) { out.push('Good Guess!'); break; }
  out.push(guess > target ? 'Too big' : 'Too small');
}
console.log(out.join('\n'));`));
  file('编程题', '34-', P(String.raw`const n = Number(data.trim());
let sum = 1, factorial = 1;
for (let i = 1; i <= n; i++) { factorial *= i; sum += 1 / factorial; }
console.log(sum.toFixed(8));`));
  file('编程题', '35-', P(String.raw`const a = data.trim().split(/\s+/).map(Number);
console.log('min = ' + Math.min(...a.slice(1, a[0] + 1)));`));
  file('编程题', '36-', P(String.raw`const [m, n] = data.trim().split(/\s+/).map(Number);
const prime = x => x > 1 && Array.from({length: Math.floor(Math.sqrt(x)) - 1}, (_, i) => i + 2).every(d => x % d !== 0);
let count = 0, sum = 0;
for (let i = m; i <= n; i++) if (prime(i)) { count++; sum += i; }
console.log(count + ' ' + sum);`));
  file('编程题', '37-', P(String.raw`const values = data.trim().split(/\s+/).map(Number);
let sum = 0;
for (const x of values) { if (x <= 0) break; if (x % 2 !== 0) sum += x; }
console.log(sum);`));
  file('编程题', '38-', P(String.raw`const x = Number(data.trim());
let sum = 1, term = 1, k = 1;
do { term *= x / k; sum += term; k++; } while (Math.abs(term) >= 0.00001);
console.log(sum.toFixed(4));`));
  file('编程题', '40-', P(String.raw`const [a, n] = data.trim().split(/\s+/).map(Number);
let term = 0, sum = 0;
for (let i = 0; i < n; i++) { term = term * 10 + a; sum += term; }
console.log('s = ' + sum);`));
  file('编程题', '41-', P(String.raw`const x = Number(data.trim()), out = [];
let count = 0;
for (let fen5 = Math.floor((x - 3) / 5); fen5 >= 1; fen5--) {
  for (let fen2 = Math.floor((x - 5 * fen5 - 1) / 2); fen2 >= 1; fen2--) {
    const fen1 = x - 5 * fen5 - 2 * fen2;
    if (fen1 >= 1) { count++; out.push('fen5:' + fen5 + ', fen2:' + fen2 + ', fen1:' + fen1 + ', total:' + (fen5 + fen2 + fen1)); }
  }
}
out.push('count = ' + count);
console.log(out.join('\n'));`));
  file('编程题', '42-', P(String.raw`const n = Number(data.trim()), out = [], power = x => String(x).split('').reduce((s, d) => s + Number(d) ** n, 0);
for (let i = 10 ** (n - 1); i < 10 ** n; i++) if (power(i) === i) out.push(i);
console.log(out.join('\n'));`));
  file('编程题', '45-', P(String.raw`const n = Number(data.trim()), rows = [];
for (let i = 1; i <= n; i += 2) rows.push(' '.repeat(n - i) + Array(i).fill('*').join(' ') + ' ');
for (let i = n - 2; i >= 1; i -= 2) rows.push(' '.repeat(n - i) + Array(i).fill('*').join(' ') + ' ');
if (rows.length) rows[rows.length - 1] = rows[rows.length - 1].trimEnd();
console.log(rows.join('\n'));`));
  file('编程题', '47-', P(String.raw`const n = Number(data.trim());
let month = 2, previous = 1, rabbits = 1;
while (rabbits < n) { [previous, rabbits] = [rabbits, previous + rabbits]; month++; }
console.log(n <= 1 ? 1 : month);`));
  file('编程题', '53-', P(String.raw`const a = data.trim().split(/\s+/).map(Number), n = a[0], matrix = a.slice(1);
let sum = 0;
for (let i = 0; i < n - 1; i++) for (let j = 0; j < n - 1; j++) if (i + j !== n - 1) sum += matrix[i * n + j];
console.log(sum);`));
  file('编程题', '54-', P(String.raw`const a = data.trim().split(/\s+/).map(Number), m = a[0], n = a[1], matrix = a.slice(2), out = [];
for (let i = 0; i < n; i++) { const row = matrix.slice(i * n, (i + 1) * n), shifted = row.slice(n - m % n).concat(row.slice(0, n - m % n)); out.push(shifted.join(' ') + ' '); }
console.log(out.join('\n'));`));
  file('编程题', '56-', P(String.raw`const lines = data.split('\n'), ch = (lines[0] || '').trim()[0], text = (lines[1] || '').replace(/\r$/, ''), index = text.indexOf(ch);
console.log(index < 0 ? 'Not Found' : 'index = ' + (index + 1));`));
  file('编程题', '58-', P(String.raw`const a = data.trim().split(/\s+/).map(Number), n = a[0], v = a.slice(1, n + 1);
for (let i = 0; i < n - 1; i++) { let k = i; for (let j = i + 1; j < n; j++) if (v[j] > v[k]) k = j; [v[i], v[k]] = [v[k], v[i]]; }
console.log(v.join(' '));`));
  file('编程题', '59-', P(String.raw`const a = data.trim().split(/\s+/).map(Number), n = a[0], count = Array(10).fill(0);
for (const x of a.slice(1, n + 1)) for (const d of String(Math.abs(x))) count[Number(d)]++;
const max = Math.max(...count), digits = count.map((v, i) => v === max ? i : '').filter(x => x !== '');
console.log(max + ': ' + digits.join(' '));`));
  file('编程题', '61-', P(String.raw`const a = data.trim().split(/\s+/).map(Number), m = a[0], n = a[1], out = [];
for (let i = 0; i < m; i++) out.push(a.slice(2 + i * n, 2 + (i + 1) * n).reduce((x, y) => x + y, 0));
console.log(out.join('\n'));`));
  file('编程题', '62-', P(String.raw`const a = data.trim().split(/\s+/).map(Number), n = a[0], v = a.slice(1), rowMax = [], colMin = Array(n).fill(Infinity);
for (let i = 0; i < n; i++) { rowMax[i] = Math.max(...v.slice(i * n, (i + 1) * n)); for (let j = 0; j < n; j++) colMin[j] = Math.min(colMin[j], v[i * n + j]); }
let answer = 'NONE';
for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (v[i * n + j] === rowMax[i] && v[i * n + j] === colMin[j]) answer = i + ' ' + j;
console.log(answer);`));
  file('编程题', '65-', P(String.raw`const s = data.trim().split('#')[0], firstHex = s.search(/[0-9a-fA-F]/), negative = firstHex >= 0 && s.slice(0, firstHex).includes('-'), digits = (s.match(/[0-9a-fA-F]/g) || []).join('');
console.log((negative ? -1 : 1) * parseInt(digits || '0', 16));`));
  file('编程题', '66-', P(String.raw`const words = data.trim().split(/\s+/).sort();
console.log('After sorted:\n' + words.join('\n'));`));
  file('编程题', '67-', P(String.raw`const a = data.trim().split(/\s+/).map(Number), n = a[0], v = a.slice(1, n + 1), avg = v.reduce((x, y) => x + y, 0) / n;
console.log('average = ' + avg.toFixed(2) + '\nmax = ' + Math.max(...v).toFixed(2) + '\nmin = ' + Math.min(...v).toFixed(2));`));
  file('编程题', '69-', P(String.raw`const a = data.trim().split(/\s+/).map(Number);
console.log('(' + (a[0] + a[2]).toFixed(1) + ', ' + (a[1] + a[3]).toFixed(1) + ')');`));
  file('编程题', '70-', P(String.raw`const lines = data.replace(/\r/g, '').trim().split('\n'), n = Number(lines[0]), books = [];
for (let i = 0; i < n; i++) books.push({name: lines[1 + i * 2], price: Number(lines[2 + i * 2])});
const high = books.reduce((a, b) => a.price > b.price ? a : b), low = books.reduce((a, b) => a.price < b.price ? a : b);
console.log(high.price.toFixed(2) + ', ' + high.name + '\n' + low.price.toFixed(2) + ', ' + low.name);`));
  file('编程题', '71-', P(String.raw`const lines = data.replace(/\r/g, '').trim().split('\n'), n = Number(lines[0]), people = [];
for (let i = 0; i < n; i++) { const p = lines[i + 1].trim().split(/\s+/); people.push({name: p[0], birth: p[1], phone: p.slice(2).join(' ')}); }
people.sort((a, b) => a.birth.localeCompare(b.birth));
console.log(people.map(p => p.name + ' ' + p.birth + ' ' + p.phone).join('\n'));`));

  // 函数题：导出原题要求的函数名，并按 JavaScript 数据结构表达指针/数组参数。
  file('函数题', '01-', F(String.raw`function sum(m, n) { let s = 0; for (let i = m; i <= n; i++) s += i; return s; }
module.exports = { sum };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(sum(a[0], a[1])); }`));
  file('函数题', '02-', F(String.raw`function max(a, b) { return a > b ? a : b; }
module.exports = { max };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('max = ' + max(a[0], a[1])); }`));
  file('函数题', '03-', F(String.raw`function pyramid(n) { return Array.from({length: n}, (_, i) => ' '.repeat(n - i - 1) + Array(i + 1).fill(i + 1).join(' ') + ' ').join('\n'); }
module.exports = { pyramid };
if (require.main === module) console.log(pyramid(Number(require('fs').readFileSync(0, 'utf8'))));`));
  file('函数题', '05-', F(String.raw`function even(n) { return n % 2 === 0 ? 1 : 0; }
function OddSum(list, n = list.length) { return list.slice(0, n).reduce((s, x) => s + (even(x) ? 0 : x), 0); }
module.exports = { even, OddSum };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(OddSum(a.slice(1, a[0] + 1), a[0])); }`));
  file('函数题', '08-', F(String.raw`function CountDigit(number, digit) { const s = String(Math.abs(number)); return (number === 0 && digit === 0) ? 1 : [...s].filter(c => Number(c) === digit).length; }
module.exports = { CountDigit };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(CountDigit(a[0], a[1])); }`));
  file('函数题', '09-', F(String.raw`function narcissistic(number) { const s = String(number), n = s.length; return n >= 3 && [...s].reduce((sum, d) => sum + Number(d) ** n, 0) === number ? 1 : 0; }
function PrintN(m, n) { const out = []; for (let x = m + 1; x < n; x++) if (narcissistic(x)) out.push(x); return out.join('\n'); }
module.exports = { narcissistic, PrintN };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); const out = []; if (narcissistic(a[0])) out.push(a[0] + ' is a narcissistic number'); const middle = PrintN(a[0], a[1]); if (middle) out.push(middle); if (narcissistic(a[1])) out.push(a[1] + ' is a narcissistic number'); console.log(out.join('\n')); }`));
  file('函数题', '10-', F(String.raw`function funcos(e, x) { let sum = 1, term = 1, k = 1; do { term *= -x * x / ((2 * k - 1) * (2 * k)); sum += term; k++; } while (Math.abs(term) >= e); return sum; }
module.exports = { funcos };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(funcos(a[0], a[1]).toFixed(6)); }`));
  file('函数题', '12-', F(String.raw`function fn(a, n) { let value = 0; for (let i = 0; i < n; i++) value = value * 10 + a; return value; }
function SumA(a, n) { let sum = 0; for (let i = 1; i <= n; i++) sum += fn(a, i); return sum; }
module.exports = { fn, SumA };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('fn(' + a[0] + ', ' + a[1] + ') = ' + fn(a[0], a[1]) + '\nSumA = ' + SumA(a[0], a[1])); }`));
  file('函数题', '13-', F(String.raw`function factorsum(number) { let sum = number > 1 ? 1 : 0; for (let i = 2; i * i <= number; i++) if (number % i === 0) sum += i + (i * i === number ? 0 : number / i); return sum; }
function PrintPN(m, n) { const out = []; for (let x = m; x <= n; x++) if (factorsum(x) === x) { const f = []; for (let i = 1; i < x; i++) if (x % i === 0) f.push(i); out.push(x + ' = ' + f.join(' + ')); } return out.length ? out.join('\n') : 'No perfect number'; }
module.exports = { factorsum, PrintPN };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(PrintPN(a[0], a[1])); }`));
  file('函数题', '14-', F(String.raw`function fib(n) { let a = 1, b = 1; for (let i = 2; i < n; i++) [a, b] = [b, a + b]; return n <= 2 ? 1 : b; }
function PrintFN(m, n) { const out = [], seen = new Set(); for (let i = 1; fib(i) <= n; i++) { const x = fib(i); if (x >= m && !seen.has(x)) { seen.add(x); out.push(x); } } return out.length ? out.join(' ') : 'No Fibonacci number'; }
module.exports = { fib, PrintFN };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(PrintFN(a[0], a[1])); }`));
  file('函数题', '15-', F(String.raw`function prime(p) { if (p < 2) return 0; for (let i = 2; i * i <= p; i++) if (p % i === 0) return 0; return 1; }
function Goldbach(n) { for (let p = 3; p <= n / 2; p += 2) if (prime(p) && prime(n - p)) return n + '=' + p + '+' + (n - p); return ''; }
module.exports = { prime, Goldbach };
if (require.main === module) console.log(Goldbach(Number(require('fs').readFileSync(0, 'utf8'))));`));
  file('函数题', '17-', F(String.raw`function sum_diff(op1, op2) { return { sum: op1 + op2, diff: op1 - op2 }; }
module.exports = { sum_diff };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), r = sum_diff(a[0], a[1]); console.log(r.sum.toFixed(2) + ' ' + r.diff.toFixed(2)); }`));
  file('函数题', '18-', F(String.raw`function Shift(s) { return s.slice(3) + s.slice(0, 3); }
module.exports = { Shift };
if (require.main === module) console.log(Shift(require('fs').readFileSync(0, 'utf8').trim()));`));
  file('函数题', '19-', F(String.raw`function splitfloat(x) { return { intpart: Math.trunc(x), fracpart: x - Math.trunc(x) }; }
module.exports = { splitfloat };
if (require.main === module) { const r = splitfloat(Number(require('fs').readFileSync(0, 'utf8'))); console.log(r.intpart + ' ' + r.fracpart.toFixed(3)); }`));
  file('函数题', '20-', F(String.raw`function search(list, n, x) { for (let i = 0; i < n; i++) if (list[i] === x) return i; return -1; }
module.exports = { search };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), n = a[0]; console.log(search(a.slice(1, n + 1), n, a[n + 1])); }`));
  file('函数题', '21-', F(String.raw`function ArrayShift(a, n, m) { m %= n; const shifted = a.slice(n - m).concat(a.slice(0, n - m)); for (let i = 0; i < n; i++) a[i] = shifted[i]; return a; }
module.exports = { ArrayShift };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), n = a[0], m = a[1]; console.log(ArrayShift(a.slice(2, 2 + n), n, m).join(' ')); }`));
  file('函数题', '22-', F(String.raw`function CountOff(n, m, out = []) { const people = Array.from({length: n}, (_, i) => i), alive = people.slice(); let order = 1, index = 0; while (alive.length) { index = (index + m - 1) % alive.length; out[alive[index]] = order++; alive.splice(index, 1); } return out; }
module.exports = { CountOff };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), out = CountOff(a[0], a[1]); console.log(out.join(' ')); }`));
  file('函数题', '23-', F(String.raw`function strmcpy(t, m, s) { const result = m > 0 ? t.slice(m - 1) : t; return result; }
module.exports = { strmcpy };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split('\n'), m = Number((a[1] || '').trim()); console.log(strmcpy(a[0], m, '')); }`));
  file('函数题', '24-', F(String.raw`function delchar(str, c) { return str.split(c).join(''); }
module.exports = { delchar };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split('\n'); console.log(delchar(a[0], (a[1] || '').trim()[0])); }`));
  file('函数题', '25-', F(String.raw`function palindrome(s) { return s === s.split('').reverse().join(''); }
module.exports = { palindrome };
if (require.main === module) console.log(palindrome(require('fs').readFileSync(0, 'utf8').trim()) ? 'Yes' : 'No');`));
  file('函数题', '26-', F(String.raw`function StringCount(s) { let upper = 0, lower = 0, blank = 0, digit = 0, other = 0; for (const c of s) { if (/[A-Z]/.test(c)) upper++; else if (/[a-z]/.test(c)) lower++; else if (c === ' ') blank++; else if (/[0-9]/.test(c)) digit++; else other++; } return { upper, lower, blank, digit, other }; }
module.exports = { StringCount };
if (require.main === module) { const r = StringCount(require('fs').readFileSync(0, 'utf8')); console.log([r.upper, r.lower, r.blank, r.digit, r.other].join(' ')); }`));
  file('函数题', '27-', F(String.raw`function multiply(x, y) { return { real: x.real * y.real - x.imag * y.imag, imag: x.real * y.imag + x.imag * y.real }; }
module.exports = { multiply };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), r = multiply({real: a[0], imag: a[1]}, {real: a[2], imag: a[3]}); console.log('(' + a[0] + '+' + a[1] + 'i) * (' + a[2] + '+' + a[3] + 'i) = ' + r.real + ' + ' + r.imag + 'i'); }`));
  file('函数题', '28-', F(String.raw`function set_grade(student, n) { let failed = 0; for (let i = 0; i < n; i++) { const score = student[i].score; student[i].grade = score >= 85 ? 'A' : score >= 70 ? 'B' : score >= 60 ? 'C' : 'D'; if (score < 60) failed++; } return failed; }
module.exports = { set_grade };
if (require.main === module) { const lines = require('fs').readFileSync(0, 'utf8').trim().split(/\n/), n = Number(lines[0]), students = lines.slice(1, n + 1).map(line => { const p = line.trim().split(/\s+/); return {num: p[0], name: p[1], score: Number(p[2])}; }); const failed = set_grade(students, n); console.log('The count for failed (<60): ' + failed + '\nThe grades:\n' + students.map(x => x.num + ' ' + x.name + ' ' + x.grade).join('\n')); }`));
  file('函数题', '29-', F(String.raw`function sum(n) { return n <= 0 ? 0 : n + sum(n - 1); }
module.exports = { sum };
if (require.main === module) console.log(sum(Number(require('fs').readFileSync(0, 'utf8'))));`));
  file('函数题', '30-', F(String.raw`function search(n) { let count = 0; for (let x = 101; x <= n; x++) { const d = String(x).split('').map(Number), square = Math.sqrt(x); if (Number.isInteger(square) && (d[0] === d[1] || d[1] === d[2] || d[0] === d[2])) count++; } return count; }
module.exports = { search };
if (require.main === module) { const n = Number(require('fs').readFileSync(0, 'utf8')); console.log('count=' + search(n)); }`));
  file('函数题', '31-', F(String.raw`function fact(n) { return n <= 1 ? 1 : n * fact(n - 1); }
function factsum(n) { return n <= 0 ? 0 : fact(n) + factsum(n - 1); }
module.exports = { fact, factsum };
if (require.main === module) console.log(factsum(Number(require('fs').readFileSync(0, 'utf8'))));`));
  file('函数题', '32-', F(String.raw`function calc_pow(x, n) { return n === 0 ? 1 : x * calc_pow(x, n - 1); }
module.exports = { calc_pow };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(calc_pow(a[0], a[1])); }`));
  file('函数题', '33-', F(String.raw`function fn(x, n) { if (n <= 0) return 0; return (n % 2 ? 1 : -1) * x ** n + fn(x, n - 1); }
module.exports = { fn };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(fn(a[0], a[1]).toFixed(2)); }`));
  file('函数题', '34-', F(String.raw`function Ack(m, n) { if (m === 0) return n + 1; if (n === 0) return Ack(m - 1, 1); return Ack(m - 1, Ack(m, n - 1)); }
module.exports = { Ack };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(Ack(a[0], a[1])); }`));
  file('函数题', '35-', F(String.raw`function f(n) { return n <= 1 ? n : f(n - 1) + f(n - 2); }
module.exports = { f };
if (require.main === module) console.log(f(Number(require('fs').readFileSync(0, 'utf8'))));`));
  file('函数题', '36-', F(String.raw`function dectobin(n) { return n === 0 ? '0' : n.toString(2); }
module.exports = { dectobin };
if (require.main === module) console.log(dectobin(Number(require('fs').readFileSync(0, 'utf8'))));`));
  file('函数题', '37-', F(String.raw`function printdigits(n) { return String(Math.abs(n)).split('').join('\n'); }
module.exports = { printdigits };
if (require.main === module) console.log(printdigits(Number(require('fs').readFileSync(0, 'utf8'))));`));
  file('函数题', '38-', F(String.raw`function getmonth(n) { return ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][n] || null; }
module.exports = { getmonth };
if (require.main === module) { const result = getmonth(Number(require('fs').readFileSync(0, 'utf8'))); console.log(result || 'wrong input!'); }`));
  file('函数题', '39-', F(String.raw`function getindex(s) { return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(s); }
module.exports = { getindex };
if (require.main === module) console.log(getindex(require('fs').readFileSync(0, 'utf8').trim()));`));
  file('函数题', '40-', F(String.raw`function max_len(s, n = s.length) { return Math.max(...s.slice(0, n).map(x => x.length)); }
module.exports = { max_len };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/), n = Number(a[0]); console.log(max_len(a.slice(1), n)); }`));
  file('函数题', '41-', F(String.raw`function str_cat(s, t) { return s + t; }
module.exports = { str_cat };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\n/); console.log(str_cat(a[0], a[1] || '')); }`));
  file('函数题', '42-', F(String.raw`function match(s, ch1, ch2) { const start = s.indexOf(ch1); if (start < 0) return ''; const end = s.indexOf(ch2, start); return s.slice(start, end < 0 ? s.length : end + 1); }
module.exports = { match };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/), p = (a[1] || '  '); const r = match(a[0] || '', p[0], p[2]); console.log(r); console.log(r ? (a[0] || '').slice((a[0] || '').indexOf(p[0])) : ''); }`));
  file('函数题', '43-', F(String.raw`function search(s, t) { const i = s.indexOf(t); return i < 0 ? -1 : i; }
module.exports = { search };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/); console.log(search(a[0] || '', a[1] || '')); }`));
  file('函数题', '44-', F(String.raw`function getodd(list) { const odd = list.filter(node => node.data % 2 !== 0); return odd; }
function printlist(list) { return list.map(node => node.data ?? node).join(' '); }
module.exports = { getodd, printlist };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), n = a[0]; console.log(a.slice(1, n + 1).filter(x => x % 2).join(' ')); }`));
  file('函数题', '45-', F(String.raw`function deletem(list, m) { return list.filter(node => (node.data ?? node) !== m); }
function printlist(list) { return list.map(node => node.data ?? node).join(' '); }
module.exports = { deletem, printlist };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), n = a[0]; console.log(a.slice(1, n + 1).filter(x => x !== a[n + 1]).join(' ')); }`));

  // 函数题命令行入口也按裁判程序样例输出，函数导出保持与上面的接口一致。
  file('函数题', '01-', F(String.raw`function sum(m, n) { let s = 0; for (let i = m; i <= n; i++) s += i; return s; }
module.exports = { sum };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('sum = ' + sum(a[0], a[1])); }`));
  file('函数题', '04-', F(String.raw`function sign(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; }
module.exports = { sign };
if (require.main === module) { const x = Number(require('fs').readFileSync(0, 'utf8')); console.log('sign(' + x + ') = ' + sign(x)); }`));
  file('函数题', '05-', F(String.raw`function even(n) { return n % 2 === 0 ? 1 : 0; }
function OddSum(list, n = list.length) { return list.slice(0, n).reduce((s, x) => s + (even(x) ? 0 : x), 0); }
module.exports = { even, OddSum };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), values = a.slice(1, a[0] + 1), odds = values.filter(x => x % 2 !== 0); console.log('Sum of ( ' + odds.join(' ') + ' ) = ' + OddSum(values, a[0])); }`));
  file('函数题', '06-', F(String.raw`function dist(x1, y1, x2, y2) { return Math.hypot(x1 - x2, y1 - y2); }
module.exports = { dist };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('dist = ' + dist(...a).toFixed(2)); }`));
  file('函数题', '07-', F(String.raw`function prime(p) { if (p < 2) return 0; for (let i = 2; i * i <= p; i++) if (p % i === 0) return 0; return 1; }
function PrimeSum(m, n) { let s = 0; for (let i = m; i <= n; i++) if (prime(i)) s += i; return s; }
module.exports = { prime, PrimeSum };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), p = []; for (let i = a[0]; i <= a[1]; i++) if (prime(i)) p.push(i); console.log('Sum of ( ' + p.join(' ') + ' ) = ' + PrimeSum(a[0], a[1])); }`));
  file('函数题', '08-', F(String.raw`function CountDigit(number, digit) { const s = String(Math.abs(number)); return number === 0 && digit === 0 ? 1 : [...s].filter(c => Number(c) === digit).length; }
module.exports = { CountDigit };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('Number of digit ' + a[1] + ' in ' + a[0] + ': ' + CountDigit(a[0], a[1])); }`));
  file('函数题', '10-', F(String.raw`function funcos(e, x) { let sum = 1, term = 1, k = 1; do { term *= -x * x / ((2 * k - 1) * (2 * k)); sum += term; k++; } while (Math.abs(term) >= e); return sum; }
module.exports = { funcos };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('cos(' + a[1].toFixed(2) + ') = ' + funcos(a[0], a[1]).toFixed(6)); }`));
  file('函数题', '11-', F(String.raw`function StringCount(s) { let a = 0, b = 0, c = 0, d = 0; for (const x of s) { if (/[A-Za-z]/.test(x)) a++; else if (x === ' ' || x === '\n') b++; else if (/[0-9]/.test(x)) c++; else d++; } return [a, b, c, d]; }
module.exports = { StringCount };
if (require.main === module) { const r = StringCount(require('fs').readFileSync(0, 'utf8').replace(/\n$/, '')); console.log('letter = ' + r[0] + ', blank = ' + r[1] + ', digit = ' + r[2] + ', other = ' + r[3]); }`));
  file('函数题', '12-', F(String.raw`function fn(a, n) { let value = 0; for (let i = 0; i < n; i++) value = value * 10 + a; return value; }
function SumA(a, n) { let sum = 0; for (let i = 1; i <= n; i++) sum += fn(a, i); return sum; }
module.exports = { fn, SumA };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('fn(' + a[0] + ', ' + a[1] + ') = ' + fn(a[0], a[1]) + '\ns = ' + SumA(a[0], a[1])); }`));
  file('函数题', '13-', F(String.raw`function factorsum(number) { let sum = number > 1 ? 1 : 0; for (let i = 2; i * i <= number; i++) if (number % i === 0) sum += i + (i * i === number ? 0 : number / i); return sum; }
function PrintPN(m, n) { const out = []; for (let x = m; x <= n; x++) if (factorsum(x) === x) { const f = []; for (let i = 1; i < x; i++) if (x % i === 0) f.push(i); out.push(x + ' = ' + f.join(' + ')); } return out.length ? out.join('\n') : 'No perfect number'; }
module.exports = { factorsum, PrintPN };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), out = []; if (factorsum(a[0]) === a[0]) out.push(a[0] + ' is a perfect number'); out.push(PrintPN(a[0], a[1])); console.log(out.join('\n')); }`));
  file('函数题', '14-', F(String.raw`function fib(n) { let a = 0, b = 1; for (let i = 0; i < n; i++) [a, b] = [b, a + b]; return a; }
function PrintFN(m, n) { const out = []; for (let i = 0; fib(i) <= n; i++) if (fib(i) >= m) out.push(fib(i)); return out.length ? out.join(' ') : 'No Fibonacci number'; }
module.exports = { fib, PrintFN };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), out = ['fib(' + a[2] + ') = ' + fib(a[2]), PrintFN(a[0], a[1])]; console.log(out.join('\n')); }`));
  file('函数题', '15-', F(String.raw`function prime(p) { if (p < 2) return 0; for (let i = 2; i * i <= p; i++) if (p % i === 0) return 0; return 1; }
function Goldbach(n) { for (let p = 3; p <= n / 2; p += 2) if (prime(p) && prime(n - p)) return n + '=' + p + '+' + (n - p) + ','; return ''; }
module.exports = { prime, Goldbach };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), out = []; if (prime(a[0])) out.push(a[0] + ' is a prime number'); for (let n = a[0] + 1; n <= a[1]; n++) if (n % 2 === 0) out.push(Goldbach(n)); console.log(out.join('\n')); }`));
  file('函数题', '17-', F(String.raw`function sum_diff(op1, op2) { return { sum: op1 + op2, diff: op1 - op2 }; }
module.exports = { sum_diff };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), r = sum_diff(a[0], a[1]); console.log('The sum is ' + r.sum.toFixed(2) + '\nThe diff is ' + r.diff.toFixed(2)); }`));
  file('函数题', '19-', F(String.raw`function splitfloat(x) { return { intpart: Math.trunc(x), fracpart: x - Math.trunc(x) }; }
module.exports = { splitfloat };
if (require.main === module) { const r = splitfloat(Number(require('fs').readFileSync(0, 'utf8'))); console.log('The integer part is ' + r.intpart + '\nThe fractional part is ' + r.fracpart.toFixed(3)); }`));
  file('函数题', '20-', F(String.raw`function search(list, n, x) { for (let i = 0; i < n; i++) if (list[i] === x) return i; return -1; }
module.exports = { search };
if (require.main === module) { const lines = require('fs').readFileSync(0, 'utf8').trim().split(/\n/), n = Number(lines[0]), list = lines[1].trim().split(/\s+/).map(Number), x = Number(lines[2]); const i = search(list, n, x); console.log(i < 0 ? 'Not found' : 'index = ' + i); }`));
  file('函数题', '23-', F(String.raw`function strmcpy(t, m, s) { return m > t.length ? '' : t.slice(m - 1); }
module.exports = { strmcpy };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/), m = Number(a[0]); console.log(strmcpy(a[1] || '', m, '')); }`));
  file('函数题', '24-', F(String.raw`function delchar(str, c) { return str.split(c).join(''); }
module.exports = { delchar };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/); console.log(delchar(a[1] || '', (a[0] || '')[0])); }`));
  file('函数题', '25-', F(String.raw`function palindrome(s) { return s === s.split('').reverse().join(''); }
module.exports = { palindrome };
if (require.main === module) { const s = require('fs').readFileSync(0, 'utf8').trim(); console.log((palindrome(s) ? 'Yes' : 'No') + '\n' + s); }`));
  file('函数题', '26-', F(String.raw`function StringCount(s) { let upper = 0, lower = 0, blank = 0, digit = 0, other = 0; for (const c of s) { if (/[A-Z]/.test(c)) upper++; else if (/[a-z]/.test(c)) lower++; else if (c === ' ') blank++; else if (/[0-9]/.test(c)) digit++; else other++; } return { upper, lower, blank, digit, other }; }
module.exports = { StringCount };
if (require.main === module) { const r = StringCount(require('fs').readFileSync(0, 'utf8').replace(/\n$/, '')); console.log([r.upper, r.lower, r.blank, r.digit, r.other].join(' ')); }`));
  file('函数题', '31-', F(String.raw`function fact(n) { return n <= 1 ? 1 : n * fact(n - 1); }
function factsum(n) { return n <= 0 ? 0 : fact(n) + factsum(n - 1); }
module.exports = { fact, factsum };
if (require.main === module) { const n = Number(require('fs').readFileSync(0, 'utf8')); console.log('fact(' + n + ') = ' + fact(n) + '\nsum = ' + factsum(n)); }`));
  file('函数题', '39-', F(String.raw`function getindex(s) { return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(s); }
module.exports = { getindex };
if (require.main === module) { const n = getindex(require('fs').readFileSync(0, 'utf8').trim()); console.log(n < 0 ? 'wrong input!' : n); }`));
  file('函数题', '41-', F(String.raw`function str_cat(s, t) { return s + t; }
module.exports = { str_cat };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\n/), r = str_cat(a[0], a[1] || ''); console.log(r + '\n' + r); }`));
  file('函数题', '42-', F(String.raw`function match(s, ch1, ch2) { const start = s.indexOf(ch1); if (start < 0) return ''; const end = s.indexOf(ch2, start); return s.slice(start, end < 0 ? s.length : end + 1); }
module.exports = { match };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/), p = (a[1] || '  '); const start = (a[0] || '').indexOf(p[0]), r = match(a[0] || '', p[0], p[2]); console.log(r); console.log(start < 0 ? '' : (a[0] || '').slice(start)); }`));
  file('函数题', '44-', F(String.raw`function getodd(list) { return list.filter(node => (node.data ?? node) % 2 !== 0); }
function printlist(list) { return list.map(node => node.data ?? node).join(' '); }
module.exports = { getodd, printlist };
if (require.main === module) { const values = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number).filter(x => x !== -1), odd = values.filter(x => x % 2 !== 0), even = values.filter(x => x % 2 === 0); console.log(odd.map(x => x + ' ').join('') + '\n' + even.map(x => x + ' ').join('')); }`));
  file('函数题', '45-', F(String.raw`function deletem(list, m) { return list.filter(node => (node.data ?? node) !== m); }
function printlist(list) { return list.map(node => node.data ?? node).join(' '); }
module.exports = { deletem, printlist };
if (require.main === module) { const lines = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/), values = (lines[0] || '').trim().split(/\s+/).map(Number).filter(x => x !== -1), m = Number((lines[1] || '').trim()); console.log(values.filter(x => x !== m).join(' ')); }`));
  file('函数题', '11-', F(String.raw`function StringCount(s) { let a = 0, b = 0, c = 0, d = 0; for (const x of s) { if (/[A-Za-z]/.test(x)) a++; else if (x === ' ' || x === '\n') b++; else if (/[0-9]/.test(x)) c++; else d++; } return [a, b, c, d]; }
module.exports = { StringCount };
if (require.main === module) { const r = StringCount(require('fs').readFileSync(0, 'utf8').replace(/\n+$/, '')); console.log('letter = ' + r[0] + ', blank = ' + r[1] + ', digit = ' + r[2] + ', other = ' + r[3]); }`));
  file('函数题', '15-', F(String.raw`function prime(p) { if (p < 2) return 0; for (let i = 2; i * i <= p; i++) if (p % i === 0) return 0; return 1; }
function Goldbach(n) { for (let p = 3; p <= n / 2; p += 2) if (prime(p) && prime(n - p)) return n + '=' + p + '+' + (n - p); return ''; }
module.exports = { prime, Goldbach };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), lines = []; if (prime(a[0])) lines.push(a[0] + ' is a prime number'); let start = Math.max(6, a[0]); if (start % 2) start++; let line = ''; for (let n = start, i = 0; n <= a[1]; n += 2, i++) { line += Goldbach(n) + (i % 5 === 4 ? '\n' : ', '); if (i % 5 === 4) { lines.push(line.trimEnd()); line = ''; } } if (line) lines.push(line); console.log(lines.join('\n')); }`));
  file('函数题', '26-', F(String.raw`function StringCount(s) { let upper = 0, lower = 0, blank = 0, digit = 0, other = 0; for (const c of s) { if (/[A-Z]/.test(c)) upper++; else if (/[a-z]/.test(c)) lower++; else if (c === ' ') blank++; else if (/[0-9]/.test(c)) digit++; else other++; } return { upper, lower, blank, digit, other }; }
module.exports = { StringCount };
if (require.main === module) { const r = StringCount(require('fs').readFileSync(0, 'utf8').replace(/\n+$/, '')); console.log([r.upper, r.lower, r.blank, r.digit, r.other].join(' ')); }`));
}

module.exports = { apply };
