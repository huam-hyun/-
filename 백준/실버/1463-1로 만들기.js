// const fs = require('fs');
const input = 10; //+fs.readFileSync('dev/stdin');
let dp = new Array(input + 1).fill(Infinity);
let idx = 1;
dp[idx] = 0;

while(idx < input){
    dp[idx + 1] = Math.min(dp[idx + 1], dp[idx] + 1);
    dp[idx * 2] = Math.min(dp[idx * 2], dp[idx] + 1);
    dp[idx * 3] = Math.min(dp[idx * 3], dp[idx] + 1);
    
    idx++;
}

console.log(dp[input]);