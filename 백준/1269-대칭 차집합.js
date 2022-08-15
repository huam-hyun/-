const input = `3 5
1 2 4
2 3 4 5 6`.split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const setN = {}
const setM = {}
let common = 0

for(const i of input[0].split(' ').map(Number)){
    setN[i] ? setN[i]++ : setN[i] = 1
}
for(const i of input[1].split(' ').map(Number)){
    setM[i] ? setM[i]++ : setM[i] = 1
}

for(const i in setN){
    if(setM[i]){
        common += setN[i] < setM[i] ? 2 * setN[i] : 2 * setM[i]
    }
}

console.log(N + M - common)