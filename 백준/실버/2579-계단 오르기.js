// const input = '6\n10\n20\n15\n25\n10\n20'.split("\n").map(e => +e);
// const input = '1\n10'.split("\n").map(e => +e);
const input = '3\n40\n50\n60'.split("\n").map(e => +e);
const n = input[0];

// 한칸 뛸 때, 두칸 뛸 때
let ways1 = new Array(n + 1).fill(0);
let ways2 = new Array(n + 1).fill(0);
ways1[1] = ways2[1] = input[1];
ways2[2] = input[2];

for(let i = 1; i < n; i++){
    ways1[i + 1] = ways2[i] + input[i + 1];
    ways2[i + 2] = Math.max(ways2[i] + input[i + 2], ways1[i] + input[i + 2]);
}

console.log(Math.max(ways1[n], ways2[n]));