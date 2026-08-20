'use strict';
function multiply(x, y) { return { real: x.real * y.real - x.imag * y.imag, imag: x.real * y.imag + x.imag * y.real }; }
module.exports = { multiply };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), r = multiply({real: a[0], imag: a[1]}, {real: a[2], imag: a[3]}); console.log('(' + a[0] + '+' + a[1] + 'i) * (' + a[2] + '+' + a[3] + 'i) = ' + r.real + ' + ' + r.imag + 'i'); }