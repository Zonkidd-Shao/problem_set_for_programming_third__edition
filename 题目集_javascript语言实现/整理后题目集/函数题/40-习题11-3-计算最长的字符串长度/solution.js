'use strict';
function max_len(s, n = s.length) { return Math.max(...s.slice(0, n).map(x => x.length)); }
module.exports = { max_len };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/), n = Number(a[0]); console.log(max_len(a.slice(1), n)); }