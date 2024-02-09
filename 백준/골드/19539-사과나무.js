// const fs = require('fs')
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const solution = (input) => {
  const [N, M] = input.split('\n')
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
}

solution('6\n1 1 1 3 3 3')
solution('13\n0 7 0 7 12 7 6 1 0 12 1 6 1')