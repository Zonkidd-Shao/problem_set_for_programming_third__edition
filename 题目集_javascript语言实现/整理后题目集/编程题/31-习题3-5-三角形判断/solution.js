'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number);
const sides = [
  Math.hypot(a[0] - a[2], a[1] - a[3]),
  Math.hypot(a[0] - a[4], a[1] - a[5]),
  Math.hypot(a[2] - a[4], a[3] - a[5])
];
const area = Math.abs((a[2] - a[0]) * (a[5] - a[1]) - (a[3] - a[1]) * (a[4] - a[0])) / 2;
if (area < 1e-12) console.log('Impossible');
else console.log('L = ' + sides.reduce((x, y) => x + y, 0).toFixed(2) + ', A = ' + area.toFixed(2));