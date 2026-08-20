'use strict';
function Ack(m, n) { if (m === 0) return n + 1; if (n === 0) return Ack(m - 1, 1); return Ack(m - 1, Ack(m, n - 1)); }
module.exports = { Ack };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log(Ack(a[0], a[1])); }