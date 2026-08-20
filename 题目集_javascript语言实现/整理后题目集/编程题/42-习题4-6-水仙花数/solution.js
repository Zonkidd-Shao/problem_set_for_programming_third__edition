'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim()), out = [], power = x => String(x).split('').reduce((s, d) => s + Number(d) ** n, 0);
for (let i = 10 ** (n - 1); i < 10 ** n; i++) if (power(i) === i) out.push(i);
console.log(out.join('\n'));