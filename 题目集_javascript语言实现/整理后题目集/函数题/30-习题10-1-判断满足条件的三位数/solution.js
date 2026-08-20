'use strict';
function search(n) { let count = 0; for (let x = 101; x <= n; x++) { const d = String(x).split('').map(Number), square = Math.sqrt(x); if (Number.isInteger(square) && (d[0] === d[1] || d[1] === d[2] || d[0] === d[2])) count++; } return count; }
module.exports = { search };
if (require.main === module) { const n = Number(require('fs').readFileSync(0, 'utf8')); console.log('count=' + search(n)); }