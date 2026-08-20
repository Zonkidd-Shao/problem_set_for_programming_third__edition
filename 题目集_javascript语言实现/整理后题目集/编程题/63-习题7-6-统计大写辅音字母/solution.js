'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const s = data.replace(/\r?\n$/, ''); console.log([...s].filter(c => /[A-Z]/.test(c) && !'AEIOU'.includes(c)).length);