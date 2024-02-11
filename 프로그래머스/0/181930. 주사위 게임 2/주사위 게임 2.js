function solution(a, b, c) {
    let answer = a + b + c
    if (a === b || b === c || a === c) {
        answer *= (a ** 2 + b ** 2 + c ** 2)
    }
    if (a === b && b === c) {
        answer *= (a ** 3 + b ** 3 + c ** 3)
    }
    return answer
}