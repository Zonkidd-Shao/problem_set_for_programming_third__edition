'use strict';
function deletem(list, m) { return list.filter(node => (node.data ?? node) !== m); }
function printlist(list) { return list.map(node => node.data ?? node).join(' '); }
module.exports = { deletem, printlist };
if (require.main === module) { const lines = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/), values = (lines[0] || '').trim().split(/\s+/).map(Number).filter(x => x !== -1), m = Number((lines[1] || '').trim()); console.log(values.filter(x => x !== m).join(' ')); }