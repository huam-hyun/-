// let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
// let input = '7\n3 10\n5 20\n1 10\n1 20\n2 15\n4 40\n2 200'.split("\n");
const n = 12;
const input = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [1, 2], [3, 4], [5, 6], [7, 8], [1, 2], [3, 4], [2, 3]];
// input = input.map(e => e.split(' ').map(e => +e));

let dp = new Array(n + 1).fill(0);
let max = 0;

for(let i = 0; i < n; i++){
    max = Math.max(max, dp[i]);

    const [time, cost] = input[i];

    if(i + time <= n) dp[i + time] = Math.max(dp[i + time], max + cost);
}

console.log(Math.max(...dp));