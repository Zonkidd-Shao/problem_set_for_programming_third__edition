'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim()), rows = [];
for (let i = 1; i <= n; i += 2) rows.push(' '.repeat(n - i) + Array(i).fill('*').join(' ') + ' ');
for (let i = n - 2; i >= 1; i -= 2) rows.push(' '.repeat(n - i) + Array(i).fill('*').join(' ') + ' ');
if (rows.length) rows[rows.length - 1] = rows[rows.length - 1].trimEnd();
console.log(rows.join('\n'));