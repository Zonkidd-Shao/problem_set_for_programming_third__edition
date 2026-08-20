'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const n = Number(data.trim()); let peaches = 1; for (let i = 1; i < n; i++) peaches = (peaches + 1) * 2; console.log(peaches);