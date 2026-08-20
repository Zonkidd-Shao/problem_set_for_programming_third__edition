'use strict';
function getmonth(n) { return ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][n] || null; }
module.exports = { getmonth };
if (require.main === module) { const result = getmonth(Number(require('fs').readFileSync(0, 'utf8'))); console.log(result || 'wrong input!'); }