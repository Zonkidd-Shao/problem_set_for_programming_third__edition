'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [a, n] = data.trim().split(/\s+/).map(Number);
let term = 0, sum = 0;
for (let i = 0; i < n; i++) { term = term * 10 + a; sum += term; }
console.log('s = ' + sum);