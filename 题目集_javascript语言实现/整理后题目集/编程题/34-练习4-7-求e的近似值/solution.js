'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim());
let sum = 1, factorial = 1;
for (let i = 1; i <= n; i++) { factorial *= i; sum += 1 / factorial; }
console.log(sum.toFixed(8));