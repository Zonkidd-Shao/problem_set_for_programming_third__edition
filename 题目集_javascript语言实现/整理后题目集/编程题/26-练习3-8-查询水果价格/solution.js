'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const prices = {1: 3, 2: 2.5, 3: 4.1, 4: 10.2};
const lines = ['[1] apple', '[2] pear', '[3] orange', '[4] grape', '[0] exit'];
let queries = 0;
for (const n of data.trim().split(/\s+/).map(Number)) {
  if (n === 0 || queries >= 5) break;
  queries++;
  lines.push('price = ' + (prices[n] || 0).toFixed(2));
}
console.log(lines.join('\n'));