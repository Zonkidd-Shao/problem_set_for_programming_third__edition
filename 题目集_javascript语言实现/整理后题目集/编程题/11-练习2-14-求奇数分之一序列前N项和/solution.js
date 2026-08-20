'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim());
let s = 0;
for (let i = 0; i < n; i++) s += 1 / (2 * i + 1);
console.log('sum = ' + s.toFixed(6));