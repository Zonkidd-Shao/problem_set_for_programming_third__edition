'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), n = a[0], v = a.slice(1), rowMax = [], colMin = Array(n).fill(Infinity);
for (let i = 0; i < n; i++) { rowMax[i] = Math.max(...v.slice(i * n, (i + 1) * n)); for (let j = 0; j < n; j++) colMin[j] = Math.min(colMin[j], v[i * n + j]); }
let answer = 'NONE';
for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (v[i * n + j] === rowMax[i] && v[i * n + j] === colMin[j]) answer = i + ' ' + j;
console.log(answer);