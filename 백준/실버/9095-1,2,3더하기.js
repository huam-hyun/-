const input = '3\n4\n7\n10'.split('\n');
const n = +input[0];
const max = Math.max(...input.slice(1));
let ways = new Array(n + 1).fill(0);

ways[0] = ways[1] = 1; ways[2] = 2;

for(let i = 3; i <= +max; i++){
    ways[i] = ways[i - 1] + ways[i - 2] + ways[i - 3];
}

for(let i = 1; i <= n; i++){
    console.log(ways[+input[i]]);
}