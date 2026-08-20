'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const s = data.trim().split('=')[0]; if (!s) process.exit(); const nums = s.split(/[+\-*/]/).map(Number), ops = s.match(/[+\-*/]/g) || []; let r = nums[0]; for (let i = 0; i < ops.length; i++) { const b = nums[i + 1]; if (ops[i] === '+') r += b; else if (ops[i] === '-') r -= b; else if (ops[i] === '*') r *= b; else { if (b === 0) { console.log('ERROR'); process.exit(); } r /= b; } } console.log(r);