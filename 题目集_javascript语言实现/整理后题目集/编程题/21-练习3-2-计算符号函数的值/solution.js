'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const x = Number(data.trim());
console.log('sign(' + x + ') = ' + (x > 0 ? 1 : x < 0 ? -1 : 0));