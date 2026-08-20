'use strict';
function dist(x1, y1, x2, y2) { return Math.hypot(x1 - x2, y1 - y2); }
module.exports = { dist };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number); console.log('dist = ' + dist(...a).toFixed(2)); }