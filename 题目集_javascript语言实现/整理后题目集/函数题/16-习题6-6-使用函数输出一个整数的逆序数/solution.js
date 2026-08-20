'use strict';
function reverse(n){const sign=n<0?-1:1;return sign*Number(String(Math.abs(n)).split('').reverse().join(''));}
module.exports={reverse};
if(require.main===module)console.log(reverse(Number(require('fs').readFileSync(0,'utf8'))));