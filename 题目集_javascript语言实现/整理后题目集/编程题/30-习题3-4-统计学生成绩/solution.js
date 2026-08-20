'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number); const n = a[0], c = [0,0,0,0,0]; for (const x of a.slice(1, n + 1)) c[x >= 90 ? 0 : x >= 80 ? 1 : x >= 70 ? 2 : x >= 60 ? 3 : 4]++; console.log(c.join(' '));