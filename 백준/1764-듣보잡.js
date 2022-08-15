const input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`.split('\n')
const [N, M] = input.shift().split(' ').map(Number)
const Ns = input.slice(0, N)
const Ms = input.slice(N)
const setN = new Set(Ns)
const setM = new Set(Ms)
let answer = 0
let common = []

if(N <= M){
    Ns.forEach(e =>{
        if(setM.has(e)){
            answer++
            common.push(e)
        }
    })
}else{
    Ms.forEach(e =>{
        if(setN.has(e)){
            answer++
            common.push(e)
        }
    })
}

console.log(`${answer}\n${common.sort().join('\n')}`)