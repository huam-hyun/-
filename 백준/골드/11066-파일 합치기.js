// const [n, ...inputs] = require('fs').readFileSync('dev/stdin').toString().split('\n');
// 15\n1 21 3 4 5 35 5 4 3 5 98 21 14 17 32
const [n, ...inputs] = '2\n4\n40 30 30 50\n15\n1 21 3 4 5 35 5 4 3 5 98 21 14 17 32'.split('\n');
let answer = [];
for(let i = 0; i < n; i++){
    const nums = +inputs[2 * i];
    const input = inputs[2 * i + 1].split(' ').map(Number);
    const dp = new Array(nums).fill(0).map(e => new Array(nums).fill(Infinity));
    const sum = [input[0]];

    for(let i = 1; i < nums; i++){
        sum.push(sum[i - 1] + input[i]);
    }

    for(let i = 0; i < nums; i++) dp[i][i] = input[i];
    
    for(let i = 0; i < nums - 1; i++){
        dp[i][i + 1] = input[i] + input[i + 1];
    }

    for(let i = 0; i < nums; i++){
        for(let j = 0; i + j < nums; j++){
            for(let k = i; k < i + j; k++){
                const sum_calc = sum[i + j] - (i !== 0 ? sum[i - 1] : 0);
                
                dp[i][i + j] = Math.min(dp[i][i + j], dp[i][k] + dp[k + 1][i + j] + sum_calc);
            }
        }
    }
    console.log(dp[0])
    console.log(dp[0][nums-1]);
}