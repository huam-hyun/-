// const fs = require('fs')
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n')
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
const inputs = Array.from({ length: 1023 }, (_, i) => i)

const solution = (input) => {
  if (input < 10) {
    return input
  }
  // 한 자리 수일 경우는 제외했으니 input에서도 빼줌
  input -= 10
  const dp = Array.from({ length: 10 }, () => [])
  dp[0] = new Array(10).fill(1)
  // 몇 자리 수
  let tensDigit = 1
  // 시작 숫자
  let num = 0

  while (input >= 0) {
    // num으로 시작했을 때 tensDigit 자리수가 가질 수 있는 숫자의 갯수
    // 0으로 시작할 경우 한자리 수일때만 1이고 나머지는 0
    const nums = dp[tensDigit][num] = num === 0
      ? dp[tensDigit][num] || 0
      : dp[tensDigit][num - 1] + dp[tensDigit - 1][num - 1]

    // 현재 가능한 숫자의 갯수가 정답까지 남은 갯수보다 많으면
    // num으로 시작하는 현재 자리수에 정답이 있음
    if (nums > input) {
      return makeNumber(tensDigit, num, input, dp)
    }
    // 남은 갯수에서 현재 가능한 갯수를 뺀다
    input -= nums
    // 9로 시작할 경우 다음에 시작할 숫자는 0이고 자리수를 하나 증가시킨다
    // 아닐 경우 시작할 숫자만 증가시킨다
    if (num === 9) {
      num = 0
      tensDigit++
    } else {
      num++
    }
    // 감소하는 수의 최대 자릿수는 10개니까 그 이상일 경우 정답이 없다
    // '9876543210'
    if (tensDigit > 9) return -1
  }
}

inputs.forEach((input) => console.log(solution(input)))