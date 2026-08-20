'use strict';
function fn(x, n) { if (n <= 0) return 0; return (n % 2 ? 1 : -1) * x ** n + fn(x, n - 1); }
module.exports = { fn };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(fn(a[0], a[1]).toFixed(2)); }