'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [m, n] = data.trim().split(/\s+/).map(Number);
const prime = x => x > 1 && Array.from({length: Math.floor(Math.sqrt(x)) - 1}, (_, i) => i + 2).every(d => x % d !== 0);
let count = 0, sum = 0;
for (let i = m; i <= n; i++) if (prime(i)) { count++; sum += i; }
console.log(count + ' ' + sum);