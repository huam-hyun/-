// const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
// const input = '6\n10 30 10 20 20 10'.split('\n');
const input = '5\n7 5 3 1 10'.split("\n");
const n = +input[0];
const list = ('1001 ' + input[1]).split(' ').map(e => +e);
let dp = new Array(n + 1).fill(0);

for(let i = 1; i <= n; i++){
    const num = list[i];
    let max = 0;

    for(let j = 0; j < i; j++){
        if(list[j] > num){
            max = dp[j] > max ? dp[j] : max;
        }
    }
    dp[i] = max + 1;
}

console.log(Math.max(...dp));