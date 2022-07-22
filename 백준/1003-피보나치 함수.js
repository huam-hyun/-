// const input = require("fs").readFileSync('dev/stdin').toString().split("\n")
const input = '3\n0\n1\n3'.split("\n").map(e => +e)
// const input = `2
// 6
// 22`.split('\n').map(e => +e)
const length = input.shift()
const fiboCnt = {
    0 : "1 0",
    1 : "0 1"
}
const max = Math.max(...input)


for(let i = 2; i <= max; i++){
    const left = fiboCnt[i - 1].split(" ").map(e => +e)
    const right = fiboCnt[i - 2].split(" ").map(e => +e)

    fiboCnt[i] = `${left[0] + right[0]} ${left[1] + right[1]}`
}

input.forEach(e => console.log(fiboCnt[e])) 
