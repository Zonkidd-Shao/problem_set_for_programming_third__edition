'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const x = Number(data.trim());
const y = x === 0 ? 0 : 1 / x;
console.log('f(' + x.toFixed(1) + ') = ' + y.toFixed(1));