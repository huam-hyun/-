// const fs = require('fs')
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const input1 = `3 5
42101
22100
22101`
const input2 = `2 2
12
34`
const input3 = `2 4
1255
3455`
const input4 = `1 10
1234567890`
const input5 = `4 6
000001
000010
000100
001000`
const inputs = [input1, input2, input3, input4, input5]

const solution = (input) => {
  input = input.split('\n')
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
  
  return (max + 1) ** 2
}

inputs.forEach((input) => console.log(solution(input)))