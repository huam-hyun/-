// 성공
// BigInt를 사용해서 js 정수형 최댓값을 벗어 날 경우의 수를 처리해주야 정답으로 인정된다

// const input = +require('fs').readFileSync('dev/stdin');  // 백준 제출시
const input = 17;

let dp = [0, 1, 1];

for(let i = 3; i <= input; i++) dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);

console.log(dp[input]);