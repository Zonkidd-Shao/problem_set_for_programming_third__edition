'use strict';
function Shift(s) { return s.slice(3) + s.slice(0, 3); }
module.exports = { Shift };
if (require.main === module) console.log(Shift(require('fs').readFileSync(0, 'utf8').trim()));