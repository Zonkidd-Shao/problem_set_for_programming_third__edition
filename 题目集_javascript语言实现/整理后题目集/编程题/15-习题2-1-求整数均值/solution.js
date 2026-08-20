'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number);
const sum = a.reduce((x, y) => x + y, 0);
console.log('Sum = ' + sum + '; Average = ' + (sum / a.length).toFixed(1));