'use strict';
function splitfloat(x) { return { intpart: Math.trunc(x), fracpart: x - Math.trunc(x) }; }
module.exports = { splitfloat };
if (require.main === module) { const r = splitfloat(Number(require('fs').readFileSync(0, 'utf8'))); console.log('The integer part is ' + r.intpart + '\nThe fractional part is ' + r.fracpart.toFixed(3)); }