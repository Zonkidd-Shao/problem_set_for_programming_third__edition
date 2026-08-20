'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number);
const lower = a[0], upper = a[1];
if (lower > upper) console.log('Invalid.');
else {
  const lines = ['fahr celsius'];
  for (let f = lower; f <= upper; f += 2) lines.push(f + '   ' + (5 * (f - 32) / 9).toFixed(1));
  console.log(lines.join('\n'));
}