'use strict';
function max(a, b) { return a > b ? a : b; }
module.exports = { max };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('max = ' + max(a[0], a[1])); }