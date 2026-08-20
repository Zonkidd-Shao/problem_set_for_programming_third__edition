'use strict';
function sign(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; }
module.exports = { sign };
if (require.main === module) { const x = Number(require('fs').readFileSync(0, 'utf8')); console.log('sign(' + x + ') = ' + sign(x)); }