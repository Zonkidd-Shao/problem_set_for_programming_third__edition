'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [km, wait] = data.trim().split(/\s+/).map(Number);
let fee = 10;
if (km > 3 && km <= 10) fee += (km - 3) * 2;
else if (km > 10) fee += 7 * 2 + (km - 10) * 3;
fee += Math.floor(wait / 5) * 2;
console.log(Math.round(fee));