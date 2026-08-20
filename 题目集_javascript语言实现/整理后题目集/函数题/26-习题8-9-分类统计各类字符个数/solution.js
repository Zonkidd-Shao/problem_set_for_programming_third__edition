'use strict';
function StringCount(s) { let upper = 0, lower = 0, blank = 0, digit = 0, other = 0; for (const c of s) { if (/[A-Z]/.test(c)) upper++; else if (/[a-z]/.test(c)) lower++; else if (c === ' ') blank++; else if (/[0-9]/.test(c)) digit++; else other++; } return { upper, lower, blank, digit, other }; }
module.exports = { StringCount };
if (require.main === module) { const r = StringCount(require('fs').readFileSync(0, 'utf8').replace(/\n+$/, '')); console.log([r.upper, r.lower, r.blank, r.digit, r.other].join(' ')); }