'use strict';
function funcos(e, x) { let sum = 1, term = 1, k = 1; do { term *= -x * x / ((2 * k - 1) * (2 * k)); sum += term; k++; } while (Math.abs(term) >= e); return sum; }
module.exports = { funcos };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('cos(' + a[1].toFixed(2) + ') = ' + funcos(a[0], a[1]).toFixed(6)); }