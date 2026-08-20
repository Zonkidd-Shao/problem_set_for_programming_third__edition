'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), n = a[0], v = a.slice(1, n + 1); let i = 0; for (let j = 1; j < v.length; j++) if (v[j] > v[i]) i = j; console.log(v[i] + ' ' + i);