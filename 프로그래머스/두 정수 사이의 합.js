const a = 3, b = 3

function solution(a, b){
    let answer = 0

    if(a > b){
        let temp = b
        b = a
        a = temp
    }

    for(let i = a; i <= b; i++){
        answer += i
    }

    return answer
}

console.log(solution(a, b))