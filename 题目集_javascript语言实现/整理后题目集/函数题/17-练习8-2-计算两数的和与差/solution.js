'use strict';
function sum_diff(op1, op2) { return { sum: op1 + op2, diff: op1 - op2 }; }
module.exports = { sum_diff };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), r = sum_diff(a[0], a[1]); console.log('The sum is ' + r.sum.toFixed(2) + '\nThe diff is ' + r.diff.toFixed(2)); }