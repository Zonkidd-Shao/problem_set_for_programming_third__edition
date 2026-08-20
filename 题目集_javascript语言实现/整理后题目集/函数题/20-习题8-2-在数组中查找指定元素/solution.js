'use strict';
function search(list, n, x) { for (let i = 0; i < n; i++) if (list[i] === x) return i; return -1; }
module.exports = { search };
if (require.main === module) { const lines = require('fs').readFileSync(0, 'utf8').trim().split(/\n/), n = Number(lines[0]), list = lines[1].trim().split(/\s+/).map(Number), x = Number(lines[2]); const i = search(list, n, x); console.log(i < 0 ? 'Not found' : 'index = ' + i); }