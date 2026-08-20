'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim());
let f = 1, sum = 0;
for (let i = 1; i <= n; i++) { f *= i; sum += f; }
console.log(sum);