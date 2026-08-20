'use strict';
function getindex(s) { return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(s); }
module.exports = { getindex };
if (require.main === module) { const n = getindex(require('fs').readFileSync(0, 'utf8').trim()); console.log(n < 0 ? 'wrong input!' : n); }