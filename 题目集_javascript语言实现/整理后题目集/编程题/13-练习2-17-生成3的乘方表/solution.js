'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim());
const lines = [];
for (let i = 0, p = 1; i <= n; i++, p *= 3) lines.push('pow(3,' + i + ') = ' + p);
console.log(lines.join('\n'));