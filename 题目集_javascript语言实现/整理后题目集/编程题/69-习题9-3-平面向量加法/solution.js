'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number);
console.log('(' + (a[0] + a[2]).toFixed(1) + ', ' + (a[1] + a[3]).toFixed(1) + ')');