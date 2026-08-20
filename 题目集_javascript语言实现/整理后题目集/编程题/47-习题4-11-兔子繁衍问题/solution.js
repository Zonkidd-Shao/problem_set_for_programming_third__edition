'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim());
let month = 2, previous = 1, rabbits = 1;
while (rabbits < n) { [previous, rabbits] = [rabbits, previous + rabbits]; month++; }
console.log(n <= 1 ? 1 : month);