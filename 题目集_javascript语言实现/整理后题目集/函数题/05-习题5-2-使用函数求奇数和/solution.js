'use strict';
function even(n) { return n % 2 === 0 ? 1 : 0; }
function OddSum(list, n = list.length) { return list.slice(0, n).reduce((s, x) => s + (even(x) ? 0 : x), 0); }
module.exports = { even, OddSum };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), values = a.slice(1, a[0] + 1), odds = values.filter(x => x % 2 !== 0); console.log('Sum of ( ' + odds.join(' ') + ' ) = ' + OddSum(values, a[0])); }