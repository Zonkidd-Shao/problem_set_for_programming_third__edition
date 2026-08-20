'use strict';
function getodd(list) { return list.filter(node => (node.data ?? node) % 2 !== 0); }
function printlist(list) { return list.map(node => node.data ?? node).join(' '); }
module.exports = { getodd, printlist };
if (require.main === module) { const values = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number).filter(x => x !== -1), odd = values.filter(x => x % 2 !== 0), even = values.filter(x => x % 2 === 0); console.log(odd.map(x => x + ' ').join('') + '\n' + even.map(x => x + ' ').join('')); }