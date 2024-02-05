const fs = require('fs')
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
let max = 0
  
for(let i = 0; i < N - max; i++) {
  for(let j = 0; j < M - max; j++) {
    const num = input[i][j]
      
    for(let k = max + 1; i + k < N && j + k < M; k++) {
      if ([input[i + k][j], input[i][j + k], input[i + k][j + k]]
        .every((value) => value === num)
      ) {
        max = k
      }
    }
  }
}

console.log((max + 1) ** 2)