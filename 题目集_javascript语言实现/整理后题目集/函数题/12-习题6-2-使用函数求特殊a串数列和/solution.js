'use strict';
function fn(a, n) { let value = 0; for (let i = 0; i < n; i++) value = value * 10 + a; return value; }
function SumA(a, n) { let sum = 0; for (let i = 1; i <= n; i++) sum += fn(a, i); return sum; }
module.exports = { fn, SumA };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('fn(' + a[0] + ', ' + a[1] + ') = ' + fn(a[0], a[1]) + '\ns = ' + SumA(a[0], a[1])); }