'use strict';
function pyramid(n) { return Array.from({length: n}, (_, i) => ' '.repeat(n - i - 1) + Array(i + 1).fill(i + 1).join(' ') + ' ').join('\n'); }
module.exports = { pyramid };
if (require.main === module) console.log(pyramid(Number(require('fs').readFileSync(0, 'utf8'))));