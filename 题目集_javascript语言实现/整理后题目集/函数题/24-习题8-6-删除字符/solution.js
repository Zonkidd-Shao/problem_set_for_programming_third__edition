'use strict';
function delchar(str, c) { return str.split(c).join(''); }
module.exports = { delchar };
if (require.main === module) { const a = require('fs').readFileSync(0, 'utf8').replace(/\r/g, '').split(/\n/); console.log(delchar(a[1] || '', (a[0] || '')[0])); }