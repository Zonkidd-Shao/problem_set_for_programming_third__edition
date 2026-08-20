'use strict';
function factorsum(number) { let sum = number > 1 ? 1 : 0; for (let i = 2; i * i <= number; i++) if (number % i === 0) sum += i + (i * i === number ? 0 : number / i); return sum; }
function PrintPN(m, n) { const out = []; for (let x = m; x <= n; x++) if (factorsum(x) === x) { const f = []; for (let i = 1; i < x; i++) if (x % i === 0) f.push(i); out.push(x + ' = ' + f.join(' + ')); } return out.length ? out.join('\n') : 'No perfect number'; }
module.exports = { factorsum, PrintPN };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number), out = []; if (factorsum(a[0]) === a[0]) out.push(a[0] + ' is a perfect number'); out.push(PrintPN(a[0], a[1])); console.log(out.join('\n')); }