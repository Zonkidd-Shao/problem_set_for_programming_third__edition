'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), m = a[0], n = a[1], out = [];
for (let i = 0; i < m; i++) out.push(a.slice(2 + i * n, 2 + (i + 1) * n).reduce((x, y) => x + y, 0));
console.log(out.join('\n'));