'use strict';
function fib(n) { let a = 0, b = 1; for (let i = 0; i < n; i++) [a, b] = [b, a + b]; return a; }
function PrintFN(m, n) { const out = []; for (let i = 0; fib(i) <= n; i++) if (fib(i) >= m) out.push(fib(i)); return out.length ? out.join(' ') : 'No Fibonacci number'; }
module.exports = { fib, PrintFN };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), out = ['fib(' + a[2] + ') = ' + fib(a[2]), PrintFN(a[0], a[1])]; console.log(out.join('\n')); }