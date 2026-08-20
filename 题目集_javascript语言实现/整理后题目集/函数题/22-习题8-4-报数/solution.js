'use strict';
function CountOff(n, m, out = []) { const people = Array.from({length: n}, (_, i) => i), alive = people.slice(); let order = 1, index = 0; while (alive.length) { index = (index + m - 1) % alive.length; out[alive[index]] = order++; alive.splice(index, 1); } return out; }
module.exports = { CountOff };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), out = CountOff(a[0], a[1]); console.log(out.join(' ')); }