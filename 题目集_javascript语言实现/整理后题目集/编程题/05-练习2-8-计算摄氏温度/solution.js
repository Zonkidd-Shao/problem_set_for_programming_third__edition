'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const f = Number(data.trim());
console.log('Celsius = ' + Math.trunc(5 * (f - 32) / 9));