'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), n = a[0], v = a.slice(1, n + 1), avg = v.reduce((x, y) => x + y, 0) / n;
console.log('average = ' + avg.toFixed(2) + '\nmax = ' + Math.max(...v).toFixed(2) + '\nmin = ' + Math.min(...v).toFixed(2));