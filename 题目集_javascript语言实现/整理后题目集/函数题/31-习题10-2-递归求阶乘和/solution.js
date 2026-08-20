'use strict';
function fact(n) { return n <= 1 ? 1 : n * fact(n - 1); }
function factsum(n) { return n <= 0 ? 0 : fact(n) + factsum(n - 1); }
module.exports = { fact, factsum };
if (require.main === module) { const n = Number(require('fs').readFileSync(0, 'utf8')); console.log('fact(' + n + ') = ' + fact(n) + '\nsum = ' + factsum(n)); }