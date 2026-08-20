'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [a, b] = data.trim().split(/\s+/).map(Number);
console.log(a + ' + ' + b + ' = ' + (a + b));
console.log(a + ' - ' + b + ' = ' + (a - b));
console.log(a + ' * ' + b + ' = ' + (a * b));
console.log(a + ' / ' + b + ' = ' + Math.trunc(a / b));