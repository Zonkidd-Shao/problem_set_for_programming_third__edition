'use strict';
function sum(n) { return n <= 0 ? 0 : n + sum(n - 1); }
module.exports = { sum };
if (require.main === module) console.log(sum(Number(require('fs').readFileSync(0, 'utf8'))));