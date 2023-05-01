/**
 * 1231이 만들어지면 하나의 햄버거를 만든다.
 * 재료를 순서대로 사용해서 만들어지는 햄버거의 수를 구해라
 * @param {int[]} ingredient 
 * @returns 재료 배열에서 만들 수 있는 햄버거 개수 반환
 */

// 성공
// 스택을 사용해서 1231이 모이면 배열에서 4만큼 삭제 후 answer++
// 배열 길이 - 4까지만 반복한다
function solution(ingredient) {
    let answer = 0, i = 0
    
    while (i < ingredient.length - 3) {
        if (ingredient[i] === 1 && ingredient[i + 1] === 2 && ingredient[i + 2] === 3 && ingredient[i + 3] === 1) {
            ingredient.splice(i, 4)
            answer++
            if (i > 2) {
                i -= 3
            } else {
                i = 0
            }
        } else {
            i++
        }
    }
    
    return answer
}