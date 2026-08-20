'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), target = a[0], max = a[1], out = [];
for (let i = 0; i < max && i + 2 < a.length; i++) {
  const guess = a[i + 2];
  if (guess < 0) break;
  if (guess === target) { out.push('Good Guess!'); break; }
  out.push(guess > target ? 'Too big' : 'Too small');
}
console.log(out.join('\n'));