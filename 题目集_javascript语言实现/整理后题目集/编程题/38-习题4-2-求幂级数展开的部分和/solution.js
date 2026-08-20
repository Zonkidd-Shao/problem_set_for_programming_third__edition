'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const x = Number(data.trim());
let sum = 1, term = 1, k = 1;
do { term *= x / k; sum += term; k++; } while (Math.abs(term) >= 0.00001);
console.log(sum.toFixed(4));