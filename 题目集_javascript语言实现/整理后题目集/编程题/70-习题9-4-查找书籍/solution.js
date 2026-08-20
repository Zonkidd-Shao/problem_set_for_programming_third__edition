'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const lines = data.replace(/\r/g, '').trim().split('\n'), n = Number(lines[0]), books = [];
for (let i = 0; i < n; i++) books.push({name: lines[1 + i * 2], price: Number(lines[2 + i * 2])});
const high = books.reduce((a, b) => a.price > b.price ? a : b), low = books.reduce((a, b) => a.price < b.price ? a : b);
console.log(high.price.toFixed(2) + ', ' + high.name + '\n' + low.price.toFixed(2) + ', ' + low.name);