'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const x = Number(data.trim());
const y = x >= 0 ? Math.sqrt(x) : x * x + 2 * x - 2;
console.log('f(' + x.toFixed(2) + ') = ' + y.toFixed(2));