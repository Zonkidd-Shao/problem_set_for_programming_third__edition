'use strict';
function calc_pow(x, n) { return n === 0 ? 1 : x * calc_pow(x, n - 1); }
module.exports = { calc_pow };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(calc_pow(a[0], a[1])); }