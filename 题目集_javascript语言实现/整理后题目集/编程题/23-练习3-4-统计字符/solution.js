'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const s = data.replace(/\n$/, '');
let letter = 0, blank = 0, digit = 0, other = 0;
for (const c of s.slice(0, 10)) {
  if (/[A-Za-z]/.test(c)) letter++;
  else if (c === ' ' || c === '\n') blank++;
  else if (/[0-9]/.test(c)) digit++;
  else other++;
}
console.log('letter = ' + letter + ', blank = ' + blank + ', digit = ' + digit + ', other = ' + other);