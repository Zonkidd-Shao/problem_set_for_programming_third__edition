'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [m, n] = data.trim().split(/\s+/).map(Number);
let sum = 0;
for (let i = m; i <= n; i++) sum += i * i + 1 / i;
console.log('sum = ' + sum.toFixed(6));