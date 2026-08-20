'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [y, m, d] = (data.trim().match(/\d+/g) || []).map(Number); const leap = y % 400 === 0 || y % 4 === 0 && y % 100 !== 0; const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; console.log(days.slice(0, m - 1).reduce((a, b) => a + b, 0) + d);