'use strict';
function printdigits(n) { return String(Math.abs(n)).split('').join('\n'); }
module.exports = { printdigits };
if (require.main === module) console.log(printdigits(Number(require('fs').readFileSync(0, 'utf8'))));