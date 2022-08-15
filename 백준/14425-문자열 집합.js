const input = `5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink`.split('\n')

const [N, M] = input[0].split(' ').map(e => +e)
const Ns = new Set(input.slice(1, N + 1))
const Ms = input.slice(N + 1)
let answer = 0

for(const i of Ms){
    if(Ns.has(i)){
        answer++
    }
}

console.log(answer)