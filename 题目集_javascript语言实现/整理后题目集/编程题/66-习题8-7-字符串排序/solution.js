'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const words = data.trim().split(/\s+/).sort();
console.log('After sorted:\n' + words.join('\n'));