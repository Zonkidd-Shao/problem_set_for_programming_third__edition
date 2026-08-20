'use strict';
const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').replace(/\r/g, '');
const [h,m,s] = data.trim().split(/\s+/)[0].split(':').map(Number), n = Number(data.trim().split(/\s+/)[1] || 0); let t = (h*3600+m*60+s+n) % 86400; const f = x => String(x).padStart(2,'0'); console.log(f(Math.floor(t/3600))+':'+f(Math.floor(t%3600/60))+':'+f(t%60));