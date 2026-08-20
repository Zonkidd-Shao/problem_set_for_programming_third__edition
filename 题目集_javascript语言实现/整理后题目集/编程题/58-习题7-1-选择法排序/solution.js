'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), n = a[0], v = a.slice(1, n + 1);
for (let i = 0; i < n - 1; i++) { let k = i; for (let j = i + 1; j < n; j++) if (v[j] > v[k]) k = j; [v[i], v[k]] = [v[k], v[i]]; }
console.log(v.join(' '));