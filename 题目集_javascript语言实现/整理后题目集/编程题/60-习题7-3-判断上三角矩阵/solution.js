'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const a = data.trim().split(/\s+/).map(Number), t = a[0]; let k = 1, out = []; for (let z = 0; z < t; z++) { const n = a[k++]; let ok = true; for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (i > j && a[k + i*n + j] !== 0) ok = false; k += n*n; out.push(ok ? 'YES' : 'NO'); } console.log(out.join('\n'));