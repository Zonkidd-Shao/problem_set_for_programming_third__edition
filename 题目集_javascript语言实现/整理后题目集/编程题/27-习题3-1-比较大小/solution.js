'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
console.log(data.trim().split(/\s+/).map(Number).sort((a, b) => a - b).join('->'));