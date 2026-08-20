'use strict';
function CountDigit(number, digit) { const s = String(Math.abs(number)); return number === 0 && digit === 0 ? 1 : [...s].filter(c => Number(c) === digit).length; }
module.exports = { CountDigit };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('Number of digit ' + a[1] + ' in ' + a[0] + ': ' + CountDigit(a[0], a[1])); }