'use strict';
function f(n) { return n <= 1 ? n : f(n - 1) + f(n - 2); }
module.exports = { f };
if (require.main === module) console.log(f(Number(require('fs').readFileSync(0, 'utf8'))));