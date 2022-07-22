const data = require('fs').readFileSync('dev/stdin').toString().split("\n")[1]

let nums = data.split('').map(e => +e)

console.log(nums.reduce((pre, cur) => pre + cur, 0))