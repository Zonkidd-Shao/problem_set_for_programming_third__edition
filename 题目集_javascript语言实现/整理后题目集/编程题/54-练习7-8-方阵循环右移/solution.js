'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), m = a[0], n = a[1], matrix = a.slice(2), out = [];
for (let i = 0; i < n; i++) { const row = matrix.slice(i * n, (i + 1) * n), shifted = row.slice(n - m % n).concat(row.slice(0, n - m % n)); out.push(shifted.join(' ') + ' '); }
console.log(out.join('\n'));