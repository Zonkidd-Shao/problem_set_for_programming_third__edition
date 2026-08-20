'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), n = a[0], m = a[n + 1], x = a.slice(1, n + 1), y = a.slice(n + 2, n + 2 + m), set = new Set(y); console.log(x.filter(v => !set.has(v)).concat(y.filter(v => !x.includes(v))).filter((v,i,z) => z.indexOf(v) === i).join(' '));