'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [v, limit] = data.trim().split(/\s+/).map(Number);
const rate = Math.round((v - limit) / limit * 100);
if (rate < 10) console.log('OK');
else if (rate >= 50) console.log('Exceed ' + rate + '%. License Revoked');
else console.log('Exceed ' + rate + '%. Ticket 200');