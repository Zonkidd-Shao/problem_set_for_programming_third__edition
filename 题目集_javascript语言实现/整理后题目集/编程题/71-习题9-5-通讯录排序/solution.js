'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const lines = data.replace(/\r/g, '').trim().split('\n'), n = Number(lines[0]), people = [];
for (let i = 0; i < n; i++) { const p = lines[i + 1].trim().split(/\s+/); people.push({name: p[0], birth: p[1], phone: p.slice(2).join(' ')}); }
people.sort((a, b) => a.birth.localeCompare(b.birth));
console.log(people.map(p => p.name + ' ' + p.birth + ' ' + p.phone).join('\n'));