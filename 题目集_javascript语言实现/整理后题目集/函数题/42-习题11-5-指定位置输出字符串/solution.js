'use strict';
function match(s, ch1, ch2) { const start = s.indexOf(ch1); if (start < 0) return ''; const end = s.indexOf(ch2, start); return s.slice(start, end < 0 ? s.length : end + 1); }
module.exports = { match };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/), p = (a[1] || '  '); const start = (a[0] || '').indexOf(p[0]), r = match(a[0] || '', p[0], p[2]); console.log(r); console.log(start < 0 ? '' : (a[0] || '').slice(start)); }