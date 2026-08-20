'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
console.log(Math.trunc(5 * (150 - 32) / 9));