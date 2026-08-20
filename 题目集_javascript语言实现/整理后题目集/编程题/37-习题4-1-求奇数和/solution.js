'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const values = data.trim().split(/\s+/).map(Number);
let sum = 0;
for (const x of values) { if (x <= 0) break; if (x % 2 !== 0) sum += x; }
console.log(sum);