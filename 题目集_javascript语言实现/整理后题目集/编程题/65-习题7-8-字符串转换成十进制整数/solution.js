'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const s = data.trim().split('#')[0], firstHex = s.search(/[0-9a-fA-F]/), negative = firstHex >= 0 && s.slice(0, firstHex).includes('-'), digits = (s.match(/[0-9a-fA-F]/g) || []).join('');
console.log((negative ? -1 : 1) * parseInt(digits || '0', 16));