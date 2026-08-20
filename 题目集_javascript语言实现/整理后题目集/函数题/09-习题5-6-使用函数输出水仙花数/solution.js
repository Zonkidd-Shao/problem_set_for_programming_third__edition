'use strict';
function narcissistic(number) { const s = String(number), n = s.length; return n >= 3 && [...s].reduce((sum, d) => sum + Number(d) ** n, 0) === number ? 1 : 0; }
function PrintN(m, n) { const out = []; for (let x = m + 1; x < n; x++) if (narcissistic(x)) out.push(x); return out.join('\n'); }
module.exports = { narcissistic, PrintN };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); const out = []; if (narcissistic(a[0])) out.push(a[0] + ' is a narcissistic number'); const middle = PrintN(a[0], a[1]); if (middle) out.push(middle); if (narcissistic(a[1])) out.push(a[1] + ' is a narcissistic number'); console.log(out.join('\n')); }