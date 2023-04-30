/**
 * 1 ~ number까지의 숫자의 약수 개수를 구하는데, limit을 넘을 경우 power로 계산해서 총 합을 구하라
 * @param {int} number 
 * @param {int} limit 
 * @param {int} power 
 * @returns limit을 넘을 경우는 power를 사용, 약수 개수의 총 합
 */

// 성공
// n부터 n * j가 number보다 작은 곳에 +1씩 해가며 약수 개수를 쌓음
// weight가 limit보다 크면 power, 작으면 weight로 해서 합을 구함
function solution(number, limit, power) {
    let answer = 0
    const divisor = new Array(number).fill(1)

    for (let i = 1; i < number; i++) {
        for (let j = 1; (i + 1) * j <= number; j++) {
            divisor[(i + 1) * j - 1]++
        }
    }

    for (const weight of divisor) {
        answer += weight > limit ? power : weight
    }
    
    return answer
}