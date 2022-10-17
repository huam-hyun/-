const arr = [5, 9, 7, 10]
const divisor = 5

function solution(arr, divisor){
    let answer = []

    answer = arr.filter(e => e % divisor === 0).sort((a, b)=> {return a - b})

    return answer.length ? answer : [-1]
}

console.log(solution(arr, divisor))