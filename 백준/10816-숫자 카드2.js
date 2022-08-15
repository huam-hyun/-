const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.split('\n')
let [N, Ns, M, Ms] = input
Ns = Ns.split(' ').map(e => +e)
Ms = Ms.split(' ').map(e => +e)
const Map = {}
answer = ''

for(const i of Ns){
    Map[i] ? Map[i]++ : Map[i] = 1
}

for(const i of Ms){
    answer += Map[i] ? Map[i] + ' ' : '0 '
}

console.log(answer)