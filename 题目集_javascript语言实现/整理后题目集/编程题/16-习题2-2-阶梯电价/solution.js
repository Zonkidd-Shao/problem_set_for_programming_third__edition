'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const kwh = Number(data.trim());
const cost = kwh <= 50 ? kwh * 0.53 : 50 * 0.53 + (kwh - 50) * 0.58;
console.log('cost = ' + cost.toFixed(2));