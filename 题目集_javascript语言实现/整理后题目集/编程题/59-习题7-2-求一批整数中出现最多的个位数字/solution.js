'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), n = a[0], count = Array(10).fill(0);
for (const x of a.slice(1, n + 1)) for (const d of String(Math.abs(x))) count[Number(d)]++;
const max = Math.max(...count), digits = count.map((v, i) => v === max ? i : '').filter(x => x !== '');
console.log(max + ': ' + digits.join(' '));