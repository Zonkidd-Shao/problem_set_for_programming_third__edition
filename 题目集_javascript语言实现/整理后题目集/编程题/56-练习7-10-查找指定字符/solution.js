'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const lines = data.split('\n'), ch = (lines[0] || '').trim()[0], text = (lines[1] || '').replace(/\r$/, ''), index = text.indexOf(ch);
console.log(index < 0 ? 'Not Found' : 'index = ' + (index + 1));