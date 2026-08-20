'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [a0, b0] = data.trim().split(/\s+/).map(Number); let a = Math.abs(a0), b = Math.abs(b0); while (b) [a, b] = [b, a % b]; console.log(a + ' ' + Math.abs(a0 * b0) / a);