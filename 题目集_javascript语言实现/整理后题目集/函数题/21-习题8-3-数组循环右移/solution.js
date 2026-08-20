'use strict';
function ArrayShift(a, n, m) { m %= n; const shifted = a.slice(n - m).concat(a.slice(0, n - m)); for (let i = 0; i < n; i++) a[i] = shifted[i]; return a; }
module.exports = { ArrayShift };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), n = a[0], m = a[1]; console.log(ArrayShift(a.slice(2, 2 + n), n, m).join(' ')); }