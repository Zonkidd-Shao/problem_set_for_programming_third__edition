'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim());
let sum = 0;
for (let i = 1; i <= n; i++) sum += Math.sqrt(i);
console.log('sum = ' + sum.toFixed(2));