const fs = require('fs');
const path = require('path');

const root = __dirname;
const outRoot = path.join(root, '整理后题目集');

const P = (body) => `'use strict';\nconst fs = require('fs');\nconst data = fs.readFileSync(0, 'utf8').replace(/\\r/g, '');\n${body}`;
const F = (body) => `'use strict';\n${body}`;

const programs = [
  ['Programming in C is fun', P(`console.log('Programming in C is fun!');`)],
  ['输出倒三角图案', P(`console.log(['*****', '****', '***', '**', '*'].join('\\n'));`)],
  ['温度转换', P(`console.log(Math.trunc(5 * (150 - 32) / 9));`)],
  ['计算物体自由下落的距离', P(`const t = Number(data.trim()); console.log((0.5 * 10 * t * t).toFixed(2));`)],
  ['计算摄氏温度', P(`const c = Number(data.trim()); console.log(Math.trunc(9 * c / 5 + 32));`)],
  ['整数四则运算', P(`const [a, b] = data.trim().split(/\\s+/).map(Number); console.log([a + b, a - b, a * b, Math.trunc(a / b), a % b].join(' '));`)],
  ['计算分段函数[1]', P(`const x = Number(data.trim()); const y = x <= 0 ? 3 * x - 5 : x < 5 ? x + 2 : 2 * x + 1; console.log(y.toFixed(2));`)],
  ['计算分段函数[2]', P(`const x = Number(data.trim()); const y = x >= 0 ? Math.sqrt(x) : x + 1; console.log(y.toFixed(2));`)],
  ['输出华氏-摄氏温度转换表', P(`const [lower, upper] = data.trim().split(/\\s+/).map(Number); if (lower > upper) console.log('Invalid.'); else { const lines = ['fahr celsius']; for (let f = lower; f <= upper; f += 2) lines.push(\`${'${f}'} ${'${(5 * (f - 32) / 9).toFixed(1)}'}\`); console.log(lines.join('\\n')); }`)],
  ['求N分之一序列前N项和', P(`const n = Number(data.trim()); let s = 0; for (let i = 1; i <= n; i++) s += 1 / i; console.log(s.toFixed(6));`)],
  ['求奇数分之一序列前N项和', P(`const n = Number(data.trim()); let s = 0; for (let i = 0; i < n; i++) s += 1 / (2 * i + 1); console.log(s.toFixed(6));`)],
  ['求简单交错序列前N项和', P(`const n = Number(data.trim()); let s = 0; for (let i = 0; i < n; i++) s += (i % 2 ? -1 : 1) / (3 * i + 1); console.log(s.toFixed(6));`)],
  ['生成3的乘方表', P(`const n = Number(data.trim()); const lines = []; for (let i = 0, p = 1; i <= n; i++, p *= 3) lines.push(\`pow(3, ${'${i}'} ) = ${'${p}'}\`.replace(' )', ')')); console.log(lines.join('\\n'));`)],
  ['求组合数', P(`const [m, n] = data.trim().split(/\\s+/).map(Number); const c = (n, k) => { k = Math.min(k, n - k); let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); }; console.log(c(n, m));`)],
  ['求整数均值', P(`const a = data.trim().split(/\\s+/).map(Number); const mean = a.reduce((x, y) => x + y, 0) / a.length; console.log(mean.toFixed(2));`)],
  ['阶梯电价', P(`const kwh = Number(data.trim()); let fee = kwh <= 50 ? kwh * 0.53 : 50 * 0.53 + (kwh - 50) * 0.58; console.log(fee.toFixed(2));`)],
  ['求平方与倒数序列的部分和', P(`const n = Number(data.trim()); let s = 0; for (let i = 1; i <= n; i++) s += i * i + 1 / i; console.log(s.toFixed(6));`)],
  ['求交错序列前N项和', P(`const n = Number(data.trim()); let s = 0; for (let i = 1; i <= n; i++) s += (i % 2 ? 1 : -1) / i; console.log(s.toFixed(6));`)],
  ['求平方根序列前N项和', P(`const n = Number(data.trim()); let s = 0; for (let i = 1; i <= n; i++) s += Math.sqrt(i); console.log(s.toFixed(2));`)],
  ['求阶乘序列前N项和', P(`const n = Number(data.trim()); let f = 1, s = 0; for (let i = 1; i <= n; i++) { f *= i; s += f; } console.log(s);`)],
  ['计算符号函数的值', P(`const x = Number(data.trim()); console.log(x > 0 ? 1 : x < 0 ? -1 : 0);`)],
  ['统计学生平均成绩与及格人数', P(`const a = data.trim().split(/\\s+/).map(Number); const n = a[0]; const scores = a.slice(1, n + 1); console.log((scores.reduce((x, y) => x + y, 0) / n).toFixed(2) + ' ' + scores.filter(x => x >= 60).length);`)],
  ['统计字符', P(`const s = data.replace(/\\n$/, ''); let letter = 0, space = 0, digit = 0, other = 0; for (const c of s.slice(0, 10)) { if (/[A-Za-z]/.test(c)) letter++; else if (c === ' ' || c === '\\n') space++; else if (/[0-9]/.test(c)) digit++; else other++; } console.log(letter + ' ' + space + ' ' + digit + ' ' + other);`)],
  ['输出闰年', P(`const end = Number(data.trim()); const years = []; for (let y = 2001; y <= end; y++) if (y % 400 === 0 || y % 4 === 0 && y % 100 !== 0) years.push(y); console.log(years.length ? years.join('\\n') : 'No leap year');`)],
  ['成绩转换', P(`const x = Number(data.trim()); console.log(x >= 90 ? 'A' : x >= 80 ? 'B' : x >= 70 ? 'C' : x >= 60 ? 'D' : 'E');`)],
  ['查询水果价格', P(`const price = {1:['apple',3],2:['pear',2.5],3:['orange',4.1],4:['grape',10.2]}; const lines = ['[1] apple', '[2] pear', '[3] orange', '[4] grape', '[0] Exit']; for (const n of data.trim().split(/\\s+/).map(Number)) { if (n === 0) break; if (price[n]) lines.push(\`${'${price[n][0]}'} ${'${price[n][1].toFixed(2)}'}\`); } console.log(lines.join('\\n'));`)],
  ['比较大小', P(`console.log(data.trim().split(/\\s+/).map(Number).sort((a, b) => a - b).join('->'));`)],
  ['高速公路超速处罚', P(`const [v, limit] = data.trim().split(/\\s+/).map(Number); const rate = (v - limit) / limit * 100; console.log(rate < 10 ? 'OK' : rate < 20 ? 'Exceed 10%. Ticket 200' : rate < 50 ? 'Exceed 20%. Ticket 300' : 'Exceed 50%. Ticket 500');`)],
  ['出租车计价', P(`const [km, wait] = data.trim().split(/\\s+/).map(Number); let fee = km <= 3 ? 10 : 10 + Math.ceil(km - 3) * 2; fee += Math.floor(wait / 5) * 2; console.log(Math.round(fee));`)],
  ['统计学生成绩', P(`const a = data.trim().split(/\\s+/).map(Number); const n = a[0], c = [0,0,0,0,0]; for (const x of a.slice(1, n + 1)) c[x >= 90 ? 0 : x >= 80 ? 1 : x >= 70 ? 2 : x >= 60 ? 3 : 4]++; console.log(c.join(' '));`)],
  ['三角形判断', P(`const a = data.trim().split(/\\s+/).map(Number); const area = (a[2]-a[0])*(a[5]-a[1]) - (a[3]-a[1])*(a[4]-a[0]); console.log(area === 0 ? 'No' : 'Yes');`)],
  ['求给定精度的简单交错序列部分和', P(`const eps = Number(data.trim()); let s = 0, i = 0, term; do { term = (i++ % 2 ? -1 : 1) / (3 * (i - 1) + 1); s += term; } while (Math.abs(term) > eps); console.log(s.toFixed(6));`)],
  ['猜数字游戏', P(`const a = data.trim().split(/\\s+/).map(Number), target = a[0], max = a[1]; let result = 'Game Over'; for (let i = 0; i < max && i + 2 < a.length; i++) { const g = a[i + 2]; if (g < 0) break; if (g === target) { result = 'Lucky You!'; break; } result = g > target ? 'Too big' : 'Too small'; } console.log(result);`)],
  ['求e的近似值', P(`const n = Number(data.trim()); let s = 1, f = 1; for (let i = 1; i <= n; i++) { f *= i; s += 1 / f; } console.log(s.toFixed(6));`)],
  ['找出最小值', P(`const a = data.trim().split(/\\s+/).map(Number); console.log(Math.min(...a.slice(1, a[0] + 1)));`)],
  ['统计素数并求和', P(`const n = Number(data.trim()); const prime = x => x > 1 && Array.from({length: Math.floor(Math.sqrt(x)) - 1}, (_, i) => i + 2).every(d => x % d); const p = []; for (let i = 2; i <= n; i++) if (prime(i)) p.push(i); console.log(p.length + ' ' + p.reduce((x, y) => x + y, 0));`)],
  ['求奇数和', P(`const n = Number(data.trim()); let s = 0; for (let i = 1; i <= n; i += 2) s += i; console.log(s);`)],
  ['求幂级数展开的部分和', P(`const [x, n] = data.trim().split(/\\s+/).map(Number); let s = 1, term = 1; for (let i = 1; i <= n; i++) { term *= x / i; s += term; } console.log(s.toFixed(6));`)],
  ['求分数序列前N项和', P(`const n = Number(data.trim()); let a = 2, b = 1, s = 0; for (let i = 0; i < n; i++) { s += a / b; [a, b] = [a + b, a]; } console.log(s.toFixed(2));`)],
  ['特殊a串数列求和', P(`const [a, n] = data.trim().split(/\\s+/).map(Number); let term = 0, s = 0; for (let i = 0; i < n; i++) { term = term * 10 + a; s += term; } console.log(s);`)],
  ['换硬币', P(`const n = Number(data.trim()); let count = 0; for (let a = 0; a <= n; a++) for (let b = 0; b <= n / 2; b++) if ((n - a - 2 * b) >= 0 && (n - a - 2 * b) % 5 === 0) count++; console.log(count);`)],
  ['水仙花数', P(`const n = Number(data.trim()); const out = []; const p = x => String(x).split('').reduce((s, d) => s + Number(d) ** n, 0); for (let i = 10 ** (n - 1); i < 10 ** n; i++) if (p(i) === i) out.push(i); console.log(out.join(' '));`)],
  ['最大公约数和最小公倍数', P(`const [a0, b0] = data.trim().split(/\\s+/).map(Number); let a = Math.abs(a0), b = Math.abs(b0); while (b) [a, b] = [b, a % b]; console.log(a + ' ' + Math.abs(a0 * b0) / a);`)],
  ['高空坠球', P(`const [h0, n] = data.trim().split(/\\s+/).map(Number); let h = h0, d = 0; for (let i = 1; i <= n; i++) { d += i === 1 ? h : 2 * h; h /= 2; } console.log(d.toFixed(1) + ' ' + h.toFixed(1));`)],
  ['打印菱形图案', P(`const n = Number(data.trim()), lines = []; for (let i = 1; i <= n; i += 2) lines.push(' '.repeat((n - i) / 2) + '*'.repeat(i)); for (let i = n - 2; i >= 1; i -= 2) lines.push(' '.repeat((n - i) / 2) + '*'.repeat(i)); console.log(lines.join('\\n'));`)],
  ['猴子吃桃问题', P(`const n = Number(data.trim()); let peaches = 1; for (let i = 1; i < n; i++) peaches = (peaches + 1) * 2; console.log(peaches);`)],
  ['兔子繁衍问题', P(`const n = Number(data.trim()); let a = 1, b = 1; for (let i = 3; i <= n; i++) [a, b] = [b, a + b]; console.log(n <= 2 ? 1 : b);`)],
  ['简单计算器', P(`const s = data.trim().split('=')[0]; if (!s) process.exit(); const nums = s.split(/[+\\-*/]/).map(Number), ops = s.match(/[+\\-*/]/g) || []; let r = nums[0]; for (let i = 0; i < ops.length; i++) { const b = nums[i + 1]; if (ops[i] === '+') r += b; else if (ops[i] === '-') r -= b; else if (ops[i] === '*') r *= b; else { if (b === 0) { console.log('ERROR'); process.exit(); } r /= b; } } console.log(r);`)],
  ['统计一行文本的单词个数', P(`console.log((data.trim().match(/\\S+/g) || []).length);`)],
  ['求最大值及其下标', P(`const a = data.trim().split(/\\s+/).map(Number), n = a[0], v = a.slice(1, n + 1); let i = 0; for (let j = 1; j < v.length; j++) if (v[j] > v[i]) i = j; console.log(v[i] + ' ' + i);`)],
  ['将数组中的数逆序存放', P(`const a = data.trim().split(/\\s+/).map(Number); console.log(a.slice(1, a[0] + 1).reverse().join(' '));`)],
  ['找出不是两个数组共有的元素', P(`const a = data.trim().split(/\\s+/).map(Number), n = a[0], m = a[n + 1], x = a.slice(1, n + 1), y = a.slice(n + 2, n + 2 + m), set = new Set(y); console.log(x.filter(v => !set.has(v)).concat(y.filter(v => !x.includes(v))).filter((v,i,z) => z.indexOf(v) === i).join(' '));`)],
  ['求最大值及其下标', P(`const a = data.trim().split(/\\s+/).map(Number), n = a[0], v = a.slice(1, n + 1); let i = v.indexOf(Math.max(...v)); console.log(v[i] + ' ' + i);`)],
  ['矩阵运算', P(`const a = data.trim().split(/\\s+/).map(Number), n = a[0], m = a[1], p = a.slice(2, 2 + n * m), q = a.slice(2 + n * m); const out = []; for (let i = 0; i < n; i++) { const row = []; for (let j = 0; j < m; j++) row.push(p[i*m+j] + (q[i*m+j] || 0)); out.push(row.join(' ')); } console.log(out.join('\\n'));`)],
  ['方阵循环右移', P(`const a = data.trim().split(/\\s+/).map(Number), m = a[0], n = a[1], v = a.slice(2); const out = []; for (let i = 0; i < n; i++) { const row = v.slice(i*n, (i+1)*n); out.push(row.slice(n - m % n).concat(row.slice(0, n - m % n)).join(' ')); } console.log(out.join('\\n'));`)],
  ['计算天数', P(`const [y, m, d] = (data.trim().match(/\\d+/g) || []).map(Number); const leap = y % 400 === 0 || y % 4 === 0 && y % 100 !== 0; const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; console.log(days.slice(0, m - 1).reduce((a, b) => a + b, 0) + d);`)],
  ['查找指定字符', P(`const lines = data.split('\\n'), s = lines[0] || '', ch = (lines[1] || '').trim()[0]; const i = s.indexOf(ch); console.log(i < 0 ? 'Not Found' : i);`)],
  ['字符串逆序', P(`console.log((data.replace(/\\s+$/, '').split('').reverse().join('')));`)],
  ['选择法排序', P(`const a = data.trim().split(/\\s+/).map(Number), n = a[0], v = a.slice(1, n + 1); for (let i = 0; i < n - 1; i++) { let k = i; for (let j = i + 1; j < n; j++) if (v[j] < v[k]) k = j; [v[i], v[k]] = [v[k], v[i]]; } console.log(v.join(' '));`)],
  ['求一批整数中出现最多的个位数字', P(`const a = data.trim().split(/\\s+/).map(Number), n = a[0], c = Array(10).fill(0); for (const x of a.slice(1, n + 1)) for (const d of String(Math.abs(x))) c[Number(d)]++; const mx = Math.max(...c); console.log(c.map((v,i) => v === mx ? i : '').filter(String).join(' '));`)],
  ['判断上三角矩阵', P(`const a = data.trim().split(/\\s+/).map(Number), t = a[0]; let k = 1, out = []; for (let z = 0; z < t; z++) { const n = a[k++]; let ok = true; for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (i > j && a[k + i*n + j] !== 0) ok = false; k += n*n; out.push(ok ? 'YES' : 'NO'); } console.log(out.join('\\n'));`)],
  ['求矩阵各行元素之和', P(`const a = data.trim().split(/\\s+/).map(Number), m = a[0], n = a[1]; const out = []; for (let i = 0; i < m; i++) out.push(a.slice(2+i*n, 2+(i+1)*n).reduce((x,y) => x+y, 0)); console.log(out.join(' '));`)],
  ['找鞍点', P(`const a = data.trim().split(/\\s+/).map(Number), n = a[0], v = a.slice(1), row = [], col = Array(n).fill(-Infinity); for (let i=0;i<n;i++) { row[i] = Math.max(...v.slice(i*n,(i+1)*n)); for(let j=0;j<n;j++) col[j]=Math.max(col[j],v[i*n+j]); } let ans = 'NONE'; for(let i=0;i<n;i++) for(let j=0;j<n;j++) if(v[i*n+j]===row[i] && v[i*n+j]===col[j]) ans = i+' '+j; console.log(ans);`)],
  ['统计大写辅音字母', P(`const s = data.replace(/\\r?\\n$/, ''); console.log([...s].filter(c => /[A-Z]/.test(c) && !'AEIOU'.includes(c)).length);`)],
  ['字符串替换', P(`console.log(data.replace(/\\r?\\n$/, '').split('').map(c => /[A-Z]/.test(c) ? String.fromCharCode('Z'.charCodeAt(0) - (c.charCodeAt(0) - 65)) : c).join(''));`)],
  ['字符串转换成十进制整数', P(`const s = data.trim(); let sign = 1, t = s; if (t[0] === '-') { sign = -1; t = t.slice(1); } console.log(sign * parseInt(t, 16));`)],
  ['字符串排序', P(`console.log(data.trim().split(/\\s+/).sort().join('\\n'));`)],
  ['输出学生成绩', P(`const a = data.trim().split(/\\s+/).map(Number), n = a[0], v = a.slice(1,n+1), avg = v.reduce((x,y)=>x+y,0)/n; console.log('average = ' + avg.toFixed(2) + '\\nmax = ' + Math.max(...v) + '\\nmin = ' + Math.min(...v));`)],
  ['时间换算', P(`const [h,m,s] = data.trim().split(/\\s+/)[0].split(':').map(Number), n = Number(data.trim().split(/\\s+/)[1] || 0); let t = (h*3600+m*60+s+n) % 86400; const f = x => String(x).padStart(2,'0'); console.log(f(Math.floor(t/3600))+':'+f(Math.floor(t%3600/60))+':'+f(t%60));`)],
  ['平面向量加法', P(`const a = data.trim().split(/\\s+/).map(Number); console.log('('+(a[0]+a[2])+', '+(a[1]+a[3])+')');`)],
  ['查找书籍', P(`const lines = data.replace(/\\r/g,'').split('\\n'), n = Number(lines[0]), books = []; for(let i=0;i<n;i++) books.push({name:lines[1+i*2],price:Number(lines[2+i*2])}); const hi=books.reduce((a,b)=>a.price>b.price?a:b), lo=books.reduce((a,b)=>a.price<b.price?a:b); console.log(hi.name+'\\n'+hi.price.toFixed(2)+'\\n'+lo.name+'\\n'+lo.price.toFixed(2));`)],
  ['通讯录排序', P(`const lines = data.replace(/\\r/g,'').trim().split('\\n'), n=Number(lines[0]), a=[]; for(let i=0;i<n;i++){const p=lines[i+1].trim().split(/\\s+/); a.push({name:p[0],tel:p[1],age:Number(p[2])});} a.sort((x,y)=>x.age-y.age); console.log(a.map(x=>x.name+' '+x.tel+' '+x.age).join('\\n'));`)],
];

const functions = [
  ['求m到n之和', F(`function sum(m, n) { let r = 0; for (let i=m;i<=n;i++) r+=i; return r; }\nmodule.exports={sum};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(sum(a[0],a[1]));}`)],
  ['找两个数中最大者', F(`function Max(a,b){return Math.max(a,b);}\nmodule.exports={Max};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(Max(a[0],a[1]));}`)],
  ['数字金字塔', F(`function pir(n){return Array.from({length:n},(_,i)=>String(i+1).repeat(i+1)).join('\\n');}\nmodule.exports={pir};\nif(require.main===module){console.log(pir(Number(require('fs').readFileSync(0,'utf8').trim())));}`)],
  ['符号函数', F(`function sign(x){return x>0?1:x<0?-1:0;}\nmodule.exports={sign};\nif(require.main===module)console.log(sign(Number(require('fs').readFileSync(0,'utf8'))));`)],
  ['使用函数求奇数和', F(`function even(n){return n%2===0?1:0;} function OddSum(list){return list.reduce((s,x)=>s+(even(x)?0:x),0);}\nmodule.exports={even,OddSum};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number),n=a[0];console.log(OddSum(a.slice(1,n+1)));}`)],
  ['使用函数计算两点间的距离', F(`function dist(x1,y1,x2,y2){return Math.hypot(x1-x2,y1-y2);}\nmodule.exports={dist};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(dist(...a).toFixed(2));}`)],
  ['使用函数求素数和', F(`function prime(p){if(p<2)return 0;for(let i=2;i*i<=p;i++)if(p%i===0)return 0;return 1;} function PrimeSum(m,n){let s=0;for(let i=m;i<=n;i++)if(prime(i))s+=i;return s;}\nmodule.exports={prime,PrimeSum};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(PrimeSum(a[0],a[1]));}`)],
  ['使用函数统计指定数字的个数', F(`function CountDigit(number,digit){return String(Math.abs(number)).split('').filter(x=>Number(x)===digit).length;}\nmodule.exports={CountDigit};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(CountDigit(a[0],a[1]));}`)],
  ['使用函数输出水仙花数', F(`function PrintN(n){const out=[],p=x=>String(x).split('').reduce((s,d)=>s+Number(d)**n,0);for(let i=10**(n-1);i<10**n;i++)if(p(i)===i)out.push(i);return out;}\nmodule.exports={PrintN};\nif(require.main===module)console.log(PrintN(Number(require('fs').readFileSync(0,'utf8'))).join(' '));`)],
  ['使用函数求余弦函数的近似值', F(`function funcos(e,x){let s=1,t=1,k=1;while(Math.abs(t)>=e){t*=-x*x/((2*k-1)*(2*k));s+=t;k++;}return s;}\nmodule.exports={funcos};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(funcos(a[0],a[1]).toFixed(6));}`)],
  ['分类统计字符个数', F(`function StringCount(s){let a=0,b=0,c=0,d=0;for(const x of s){if(/[A-Za-z]/.test(x))a++;else if(x===' '||x==='\\n')b++;else if(/[0-9]/.test(x))c++;else d++;}return [a,b,c,d];}\nmodule.exports={StringCount};\nif(require.main===module)console.log(StringCount(require('fs').readFileSync(0,'utf8')).join(' '));`)],
  ['使用函数求特殊a串数列和', F(`function fn(a,n){let t=0,s=0;for(let i=0;i<n;i++){t=t*10+a;s+=t;}return s;}\nmodule.exports={fn};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(fn(a[0],a[1]));}`)],
  ['使用函数输出指定范围内的完数', F(`function factors(n){let s=1;for(let i=2;i*i<=n;i++)if(n%i===0){s+=i;if(i*i!==n)s+=n/i;}return n>1?s:0;} function PrintPN(m,n){const r=[];for(let i=m;i<=n;i++)if(factors(i)===i)r.push(i);return r;}\nmodule.exports={PrintPN};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(PrintPN(a[0],a[1]).join(' '));}`)],
  ['使用函数输出指定范围内的Fibonacci数', F(`function fib(n){let a=1,b=1;for(let i=2;i<n;i++) [a,b]=[b,a+b];return n<=2?1:b;} function PrintFN(m,n){const r=[];for(let i=1;fib(i)<=n;i++){const x=fib(i);if(x>=m&&!r.includes(x))r.push(x);}return r;}\nmodule.exports={fib,PrintFN};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number),r=PrintFN(a[0],a[1]);console.log(r.length?r.join(' '):'No Fibonacci number');}`)],
  ['使用函数验证哥德巴赫猜想', F(`function prime(p){if(p<2)return 0;for(let i=2;i*i<=p;i++)if(p%i===0)return 0;return 1;} function Goldbach(n){for(let p=3;p<=n/2;p+=2)if(prime(p)&&prime(n-p))return n+'='+p+'+'+(n-p);}\nmodule.exports={prime,Goldbach};\nif(require.main===module)console.log(Goldbach(Number(require('fs').readFileSync(0,'utf8'))));`)],
  ['使用函数输出一个整数的逆序数', F(`function reverse(n){const sign=n<0?-1:1;return sign*Number(String(Math.abs(n)).split('').reverse().join(''));}\nmodule.exports={reverse};\nif(require.main===module)console.log(reverse(Number(require('fs').readFileSync(0,'utf8'))));`)],
  ['计算两数的和与差', F(`function sum_diff(op1,op2){return [op1+op2,op1-op2];}\nmodule.exports={sum_diff};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number),r=sum_diff(a[0],a[1]);console.log(r[0].toFixed(2)+' '+r[1].toFixed(2));}`)],
  ['移动字母', F(`function Shift(s){return s.slice(3)+s.slice(0,3);}\nmodule.exports={Shift};\nif(require.main===module)console.log(Shift(require('fs').readFileSync(0,'utf8').trim()));`)],
  ['拆分实数的整数与小数部分', F(`function splitfloat(x){return [Math.trunc(x),x-Math.trunc(x)];}\nmodule.exports={splitfloat};\nif(require.main===module){const x=Number(require('fs').readFileSync(0,'utf8'));const r=splitfloat(x);console.log(r[0]+' '+r[1].toFixed(3));}`)],
  ['在数组中查找指定元素', F(`function Search(list,n,x){for(let i=0;i<n;i++)if(list[i]===x)return i;return -1;}\nmodule.exports={Search};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number),n=a[0];console.log(Search(a.slice(1,n+1),n,a[n+1]));}`)],
  ['数组循环右移', F(`function ArrayShift(a,n,m){m%=n;return a.slice(n-m).concat(a.slice(0,n-m));}\nmodule.exports={ArrayShift};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number),n=a[0],m=a[1];console.log(ArrayShift(a.slice(2,2+n),n,m).join(' '));}`)],
  ['报数', F(`function CountOff(n,m){const a=Array.from({length:n},(_,i)=>i+1);let i=0;while(a.length>1){i=(i+m-1)%a.length;a.splice(i,1);}return a[0];}\nmodule.exports={CountOff};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(CountOff(a[0],a[1]));}`)],
  ['使用函数实现字符串部分复制', F(`function strmcpy(s,m,n){return s.slice(m-1,m-1+n);}\nmodule.exports={strmcpy};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\n/);const p=a[1].split(/\\s+/).map(Number);console.log(strmcpy(a[0],p[0],p[1]));}`)],
  ['删除字符', F(`function DeleteChar(s,c){return s.split(c).join('');}\nmodule.exports={DeleteChar};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').replace(/\\r/g,'').split('\\n');console.log(DeleteChar(a[0],(a[1]||'').trim()[0]));}`)],
  ['判断回文字符串', F(`function palindrome(s){return s===s.split('').reverse().join('');}\nmodule.exports={palindrome};\nif(require.main===module)console.log(palindrome(require('fs').readFileSync(0,'utf8').trim())?'Yes':'No');`)],
  ['分类统计各类字符个数', F(`function StringCount(s){let upper=0,lower=0,digit=0,other=0;for(const c of s){if(/[A-Z]/.test(c))upper++;else if(/[a-z]/.test(c))lower++;else if(/[0-9]/.test(c))digit++;else other++;}return [upper,lower,digit,other];}\nmodule.exports={StringCount};\nif(require.main===module)console.log(StringCount(require('fs').readFileSync(0,'utf8')).join(' '));`)],
  ['计算两个复数之积', F(`function ComplexMul(a,b){return {real:a.real*b.real-a.imag*b.imag,imag:a.real*b.imag+a.imag*b.real};}\nmodule.exports={ComplexMul};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number),r=ComplexMul({real:a[0],imag:a[1]},{real:a[2],imag:a[3]});console.log(r.real.toFixed(2)+(r.imag>=0?'+':'')+r.imag.toFixed(2)+'i');}`)],
  ['按等级统计学生成绩', F(`function Rank(score){return score>=90?'A':score>=80?'B':score>=70?'C':score>=60?'D':'E';}\nmodule.exports={Rank};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(a.map(Rank).join(' '));}`)],
  ['使用递归函数计算1到n之和', F(`function sum(n){return n<=0?0:n+sum(n-1);}\nmodule.exports={sum};\nif(require.main===module)console.log(sum(Number(require('fs').readFileSync(0,'utf8'))));`)],
  ['判断满足条件的三位数', F(`function count(){const r=[];for(let i=100;i<=999;i++){const a=String(i).split('').map(Number);if(a[0]!==a[1]&&a[1]!==a[2]&&a[0]!==a[2])r.push(i);}return r;}\nmodule.exports={count};\nif(require.main===module)console.log(count().join(' '));`)],
  ['递归实现顺序输出整数', F(`function print(n){return String(n);}\nmodule.exports={print};\nif(require.main===module)console.log(print(Number(require('fs').readFileSync(0,'utf8'))));`)],
  ['十进制转换二进制', F(`function dectobin(n){return n===0?'0':n.toString(2);}\nmodule.exports={dectobin};\nif(require.main===module)console.log(dectobin(Number(require('fs').readFileSync(0,'utf8'))));`)],
  ['递归求Fabonacci数列', F(`function fib(n){return n<=2?1:fib(n-1)+fib(n-2);}\nmodule.exports={fib};\nif(require.main===module)console.log(fib(Number(require('fs').readFileSync(0,'utf8'))));`)],
  ['递归计算Ackermenn函数', F(`function Ack(m,n){if(m===0)return n+1;if(n===0)return Ack(m-1,1);return Ack(m-1,Ack(m,n-1));}\nmodule.exports={Ack};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(Ack(a[0],a[1]));}`)],
  ['递归实现指数函数', F(`function fn(x,n){return n===0?1:x*fn(x,n-1);}\nmodule.exports={fn};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(fn(a[0],a[1]));}`)],
  ['递归求简单交错幂级数的部分和', F(`function fn(x,n){if(n===0)return 0;return (n%2?1:-1)*x**n+fn(x,n-1);}\nmodule.exports={fn};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number);console.log(fn(a[0],a[1]).toFixed(2));}`)],
  ['递归求阶乘和', F(`function fn(n){return n<=0?0:n*factorial(n)+fn(n-1);} function factorial(n){return n<=1?1:n*factorial(n-1);}\nmodule.exports={fn};\nif(require.main===module)console.log(fn(Number(require('fs').readFileSync(0,'utf8'))));`)],
  ['查找星期', F(`function getWeekday(n){return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][n%7];}\nmodule.exports={getWeekday};\nif(require.main===module)console.log(getWeekday(Number(require('fs').readFileSync(0,'utf8'))));`)],
  ['输出月份英文名', F(`function get月名(n){return ['','January','February','March','April','May','June','July','August','September','October','November','December'][n]||'wrong input';}\nmodule.exports={get月名};\nif(require.main===module)console.log(get月名(Number(require('fs').readFileSync(0,'utf8'))));`)],
  ['计算最长的字符串长度', F(`function max_len(a){return Math.max(...a.map(x=>x.length));}\nmodule.exports={max_len};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/);console.log(max_len(a));}`)],
  ['字符串的连接', F(`function str_cat(a,b){return a+b;}\nmodule.exports={str_cat};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\n/);console.log(str_cat(a[0],a[1]||''));}`)],
  ['指定位置输出字符串', F(`function substr(s,m,n){return s.slice(m-1,m-1+n);}\nmodule.exports={substr};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\n/);const p=a[1].split(/\\s+/).map(Number);console.log(substr(a[0],p[0],p[1]));}`)],
  ['查找子串', F(`function search(s,t){return s.indexOf(t);}\nmodule.exports={search};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\n/);console.log(search(a[0],a[1]||''));}`)],
  ['奇数值结点链表', F(`function getOdd(list){return list.filter(x=>x%2!==0);}\nmodule.exports={getOdd};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number),n=a[0];console.log(getOdd(a.slice(1,n+1)).join(' '));}`)],
  ['单链表结点删除', F(`function deleteValue(list,x){return list.filter(v=>v!==x);}\nmodule.exports={deleteValue};\nif(require.main===module){const a=require('fs').readFileSync(0,'utf8').trim().split(/\\s+/).map(Number),n=a[0];console.log(deleteValue(a.slice(1,n+1),a[n+1]).join(' '));}`)],
];

function findSource(category, name) {
  const table = category === '编程题' ? programs : functions;
  const hit = table.find(([key]) => name.includes(key));
  if (!hit) throw new Error(`未找到题目实现：${category}/${name}`);
  return hit[1];
}

function main() {
  fs.rmSync(outRoot, { recursive: true, force: true });
  fs.mkdirSync(outRoot, { recursive: true });
  const categories = ['编程题', '函数题'];
  let total = 0;
  for (const category of categories) {
    const sourceDir = path.join(root, category);
    const targetDir = path.join(outRoot, category);
    fs.mkdirSync(targetDir, { recursive: true });
    for (const file of fs.readdirSync(sourceDir).filter(x => x.endsWith('.md')).sort()) {
      const name = path.basename(file, '.md');
      const dir = path.join(targetDir, name);
      fs.mkdirSync(dir, { recursive: true });
      fs.copyFileSync(path.join(sourceDir, file), path.join(dir, '题目.md'));
      fs.writeFileSync(path.join(dir, 'solution.js'), findSource(category, name));
      total++;
    }
  }
  fs.writeFileSync(path.join(outRoot, 'README.md'), `# JavaScript 题目集\n\n共整理 ${total} 道题。每道题位于对应题型下的同名文件夹中，包含：\n\n- 题目.md：原题内容\n- solution.js：JavaScript 实现，可通过 node solution.js 运行\n\n编程题按标准输入输出实现；函数题导出题目要求的函数，同时提供命令行测试入口。\n`);
  console.log(`已生成 ${total} 道题。`);
}

main();
require('./corrections').apply();
