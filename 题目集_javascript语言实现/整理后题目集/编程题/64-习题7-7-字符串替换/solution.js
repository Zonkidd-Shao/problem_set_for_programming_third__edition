'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
console.log(data.replace(/\r?\n$/, '').split('').map(c => /[A-Z]/.test(c) ? String.fromCharCode('Z'.charCodeAt(0) - (c.charCodeAt(0) - 65)) : c).join(''));