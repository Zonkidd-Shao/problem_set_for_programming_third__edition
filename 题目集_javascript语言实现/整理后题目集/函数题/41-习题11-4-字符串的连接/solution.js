'use strict';
function str_cat(s, t) { return s + t; }
module.exports = { str_cat };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\n/), r = str_cat(a[0], a[1] || ''); console.log(r + '\n' + r); }