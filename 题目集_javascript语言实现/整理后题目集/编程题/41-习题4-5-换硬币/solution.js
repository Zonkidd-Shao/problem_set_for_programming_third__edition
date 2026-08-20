'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const x = Number(data.trim()), out = [];
let count = 0;
for (let fen5 = Math.floor((x - 3) / 5); fen5 >= 1; fen5--) {
  for (let fen2 = Math.floor((x - 5 * fen5 - 1) / 2); fen2 >= 1; fen2--) {
    const fen1 = x - 5 * fen5 - 2 * fen2;
    if (fen1 >= 1) { count++; out.push('fen5:' + fen5 + ', fen2:' + fen2 + ', fen1:' + fen1 + ', total:' + (fen5 + fen2 + fen1)); }
  }
}
out.push('count = ' + count);
console.log(out.join('\n'));