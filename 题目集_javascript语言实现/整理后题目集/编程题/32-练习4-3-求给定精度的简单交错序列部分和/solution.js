'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const eps = Number(data.trim());
let sum = 0, i = 0, term;
do { term = (i++ % 2 ? -1 : 1) / (3 * (i - 1) + 1); sum += term; } while (Math.abs(term) > eps);
console.log('sum = ' + sum.toFixed(6));