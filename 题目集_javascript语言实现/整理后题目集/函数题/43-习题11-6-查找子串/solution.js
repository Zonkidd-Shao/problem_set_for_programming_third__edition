'use strict';
function search(s, t) { const i = s.indexOf(t); return i < 0 ? -1 : i; }
module.exports = { search };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/); console.log(search(a[0] || '', a[1] || '')); }