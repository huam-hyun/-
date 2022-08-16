const case1 = ["1", "-", "3", "+", "5", "-", "8"]
const case2 = ["5", "-", "3", "+", "1", "+", "2", "-", "4"]
const case3 = ["5", "-", "10", "+", "1", "+", "2", "-", "4"]
const case4 = ["12", "-", "45", "-", "62", "+", "2", "+", "98", "-", "15"]

function solution(arr) {
    let answer = -1;
    
    answer = getMax([...arr], -Infinity, Infinity)
    
    return answer;
}

function getMax(arr, max, min){
    console.log(arr)
    // A op1 B만 남았을 경우
    if(arr.length <= 3){
        return eval(arr.join(''))
    }
    
    // A ops B
    const [A, op1, B, op2, C] = arr.splice(-5, 5)
    const lFirst = eval(eval(A + op1 + B) + op2 + C)
    const rFirst = eval(A + op1 + eval(B + op2 + C))
    min = Math.min(min, lFirst, rFirst)
    max = Math.max(max, lFirst, rFirst)
    const op3 = arr[arr.length - 1]
    
    if(op3 === '+'){
        // 커야 좋음
        return getMax([...arr, max], max, min)
    }else if(op3 === '-'){
        // 최소 최대 다 확인해봐야 함
        return Math.max(getMax([...arr, max], max, min), getMax([...arr, min], max, min))
    }else{
        // op3이 undefined인 경우 == 식이 끝난 경우
        return lFirst <= rFirst ? rFirst : lFirst
    }
}

// console.log(solution(case1))
// console.log(solution(case2))
// console.log(solution(case3))
console.log(solution(case4))