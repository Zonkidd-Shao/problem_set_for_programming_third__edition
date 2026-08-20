'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [m, n] = data.trim().split(/\s+/).map(Number);
let result = 1;
const k = Math.min(m, n - m);
for (let i = 1; i <= k; i++) result = result * (n - k + i) / i;
console.log('result = ' + Math.round(result));