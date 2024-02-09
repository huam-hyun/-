const fs = require('fs')
let input = +fs.readFileSync("/dev/stdin").toString().trim()

const makeNumber = (tensDigit, num, remain, dp) => {
  if (remain === 0) {
    return tensDigit === 0
      ? String(num)
      : String(num) + Array.from({ length: tensDigit }, (_, i) => i).reverse().join('')
  }
  const nums = dp[tensDigit][num]
  return nums > remain
    ? String(num) + makeNumber(tensDigit - 1, 0, remain, dp) // 다음 단위로
    : makeNumber(tensDigit, num + 1, remain - nums, dp) // 다음 숫자로
}

if (input < 10) {
    console.log(input)
    return
}
input -= 10
const dp = Array.from({ length: 10 }, () => [])
dp[0] = new Array(10).fill(1)
let tensDigit = 1
let num = 0

while (input >= 0) {
  const nums = dp[tensDigit][num] = num === 0
    ? dp[tensDigit][num] || 0
    : dp[tensDigit][num - 1] + dp[tensDigit - 1][num - 1]

  if (nums > input) {
    console.log(makeNumber(tensDigit, num, input, dp))
    break
  }
  input -= nums
  if (num === 9) {
    num = 0
    tensDigit++
  } else {
    num++
  }
  if (tensDigit > 9) {
      console.log(-1)
      break
  }
}