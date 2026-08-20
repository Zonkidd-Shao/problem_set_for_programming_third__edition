'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number);
const n = a[0], scores = a.slice(1, n + 1);
console.log('average = ' + (scores.reduce((x, y) => x + y, 0) / n).toFixed(1));
console.log('count = ' + scores.filter(x => x >= 60).length);