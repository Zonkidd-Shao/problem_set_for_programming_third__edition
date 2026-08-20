'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const end = Number(data.trim());
if (end < 2001 || end > 2100) console.log('Invalid year!');
else {
  const years = [];
  for (let y = 2001; y <= end; y++) if (y % 400 === 0 || y % 4 === 0 && y % 100 !== 0) years.push(y);
  console.log(years.length ? years.join('\n') : 'None');
}