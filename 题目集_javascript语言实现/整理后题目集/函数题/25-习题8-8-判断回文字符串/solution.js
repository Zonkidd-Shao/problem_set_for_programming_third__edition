'use strict';
function palindrome(s) { return s === s.split('').reverse().join(''); }
module.exports = { palindrome };
if (require.main === module) { const s = require('fs').readFileSync(0, 'utf8').trim(); console.log((palindrome(s) ? 'Yes' : 'No') + '\n' + s); }