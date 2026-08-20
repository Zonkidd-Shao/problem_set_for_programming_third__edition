'use strict';
function StringCount(s) { let a = 0, b = 0, c = 0, d = 0; for (const x of s) { if (/[A-Za-z]/.test(x)) a++; else if (x === ' ' || x === '\n') b++; else if (/[0-9]/.test(x)) c++; else d++; } return [a, b, c, d]; }
module.exports = { StringCount };
if (require.main === module) { const r = StringCount(require('fs').readFileSync(0, 'utf8').replace(/\n+$/, '')); console.log('letter = ' + r[0] + ', blank = ' + r[1] + ', digit = ' + r[2] + ', other = ' + r[3]); }