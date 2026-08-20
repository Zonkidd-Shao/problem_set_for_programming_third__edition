'use strict';
function prime(p) { if (p < 2) return 0; for (let i = 2; i * i <= p; i++) if (p % i === 0) return 0; return 1; }
function Goldbach(n) { for (let p = 3; p <= n / 2; p += 2) if (prime(p) && prime(n - p)) return n + '=' + p + '+' + (n - p); return ''; }
module.exports = { prime, Goldbach };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), lines = []; if (prime(a[0])) lines.push(a[0] + ' is a prime number'); let start = Math.max(6, a[0]); if (start % 2) start++; let line = ''; for (let n = start, i = 0; n <= a[1]; n += 2, i++) { line += Goldbach(n) + (i % 5 === 4 ? '\n' : ', '); if (i % 5 === 4) { lines.push(line.trimEnd()); line = ''; } } if (line) lines.push(line); console.log(lines.join('\n')); }