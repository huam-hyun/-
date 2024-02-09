const fs = require('fs')
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const trees = M.split(' ').map(Number)

const [two, sum] = trees.reduce((p, c) => {
    p[0] += Math.floor(c / 2)
    p[1] += c
    return p
}, [0, 0])
  
if (sum % 3 !== 0) {
    console.log('NO')
} else {
    sum / 3 <= two
        ? console.log('YES')
        : console.log('NO')
}