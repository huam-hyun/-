/**
 * 두 원의 중심은 원점이다. r1, r2사이의 정수인 점의 개수를 구해라
 * @param {int} r1 
 * @param {int} r2 
 * @returns 반지름이 r1, r2인 두 원 사이의 점의 개수를 구해라
 */

// 성공
// 제1 사분면에서의 개수 * 4를 하기 위해 x = 1 ~ r2 까지일 때 점의 개수만 구한다
// 해당 x 위치에서 점의 최솟값은 Math.ceil(Math.sqrt(r1 ** 2 - x ** 2))
// Math.ceil인 이유는 정수일 경우 해당 점을 포함하기 때문 1 -> 1, 0.9 -> 1
// 해당 x 위치에서 점위 최댓값은 Math.floor(Math.sqrt(r2 ** 2 - x ** 2))
// Math.floor인 이유는 소수일 경우 해당 점을 포함하지 않기 때문 1.1 -> 1, 1 -> 1
// 최댓값 - 최솟값 + 1 이 해당 x좌표에서 점의 개수이다
function solution(r1, r2) {
    let answer = 0
     
    for (let i = 1; i <= r2; i++) {
        const MIN = Math.ceil(Math.sqrt(r1 ** 2 - i ** 2)) || 0
        const MAX = Math.floor(Math.sqrt(r2 ** 2 - i ** 2))

        answer += MAX - MIN + 1
    }
    
    return answer * 4   
}