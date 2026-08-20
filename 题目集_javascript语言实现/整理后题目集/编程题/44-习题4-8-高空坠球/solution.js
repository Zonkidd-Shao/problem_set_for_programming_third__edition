'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [h0, n] = data.trim().split(/\s+/).map(Number); let h = h0, d = 0; for (let i = 1; i <= n; i++) { d += i === 1 ? h : 2 * h; h /= 2; } console.log(d.toFixed(1) + ' ' + h.toFixed(1));