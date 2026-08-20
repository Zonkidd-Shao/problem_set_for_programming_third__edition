'use strict';
function strmcpy(t, m, s) { return m > t.length ? '' : t.slice(m - 1); }
module.exports = { strmcpy };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/), m = Number(a[0]); console.log(strmcpy(a[1] || '', m, '')); }