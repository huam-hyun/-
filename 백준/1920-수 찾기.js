// 이분탐색
const input = '5\n4 1 5 2 11\n5\n1 3 7 9 5'
// let input = require('fs').readFileSync('dev/stdin').split('\n')

let answer = ''
let [N, Narray, M, Marray] = input.split('\n')
Narray = Narray.split(' ').map(e => +e).sort((a, b) => a - b)
Marray = Marray.split(' ').map(e => +e)

Marray.forEach(e =>{
    let left = 0
    let right = N - 1
    let res = 0

    while(left <= right){
        const mid = Math.floor((left + right) / 2)

        if(e === Narray[mid]){
            res = 1
            break
        }else if(e < Narray[mid]){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    answer += `${res}\n`
})

console.log(answer)