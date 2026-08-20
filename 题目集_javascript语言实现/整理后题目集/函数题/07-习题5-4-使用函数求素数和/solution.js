'use strict';
function prime(p) { if (p < 2) return 0; for (let i = 2; i * i <= p; i++) if (p % i === 0) return 0; return 1; }
function PrimeSum(m, n) { let s = 0; for (let i = m; i <= n; i++) if (prime(i)) s += i; return s; }
module.exports = { prime, PrimeSum };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), p = []; for (let i = a[0]; i <= a[1]; i++) if (prime(i)) p.push(i); console.log('Sum of ( ' + p.join(' ') + ' ) = ' + PrimeSum(a[0], a[1])); }