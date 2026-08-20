'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim()); let a = 2, b = 1, s = 0; for (let i = 0; i < n; i++) { s += a / b; [a, b] = [a + b, a]; } console.log(s.toFixed(2));