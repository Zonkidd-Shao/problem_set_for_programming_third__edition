'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const t = Number(data.trim()); console.log((0.5 * 10 * t * t).toFixed(2));