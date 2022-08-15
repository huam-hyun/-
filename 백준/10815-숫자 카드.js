const input = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`

let [N, Ns, M, Ms] = input.split('\n')
let answer = ''

Ns = Ns.split(' ').sort((a, b) => a - b).map(e => +e)
Ms = Ms.split(' ').map(e => +e)

Ms.forEach(e =>{
    let left = 0
    let right = N - 1
    let exist = false

    while(left <= right){
        const mid = Math.floor((left + right) / 2)

        if(Ns[mid] === e){
            exist = true
            break
        }else if(Ns[mid] < e){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    answer += exist ? '1 ' : '0 '
})

console.log(answer)