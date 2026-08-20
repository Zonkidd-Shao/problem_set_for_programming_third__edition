'use strict';
function dectobin(n) { return n === 0 ? '0' : n.toString(2); }
module.exports = { dectobin };
if (require.main === module) console.log(dectobin(Number(require('fs').readFileSync(0, 'utf8'))));