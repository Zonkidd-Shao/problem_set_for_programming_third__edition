'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim());
let sum = 0;
for (let i = 1; i <= n; i++) sum += (i % 2 ? 1 : -1) * i / (2 * i - 1);
console.log(sum.toFixed(3));