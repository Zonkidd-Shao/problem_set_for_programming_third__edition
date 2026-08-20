'use strict';
function sum(m, n) { let s = 0; for (let i = m; i <= n; i++) s += i; return s; }
module.exports = { sum };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('sum = ' + sum(a[0], a[1])); }