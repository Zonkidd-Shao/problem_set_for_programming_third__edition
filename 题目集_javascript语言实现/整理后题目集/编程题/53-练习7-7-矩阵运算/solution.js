'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), n = a[0], matrix = a.slice(1);
let sum = 0;
for (let i = 0; i < n - 1; i++) for (let j = 0; j < n - 1; j++) if (i + j !== n - 1) sum += matrix[i * n + j];
console.log(sum);