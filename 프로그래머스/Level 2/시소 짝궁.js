/**
 * 2, 3, 4M 시소가 있을 때 균형을 이루는 짝의 개수를 구해라
 * @param {int[]} weights 
 * @returns int
 */

// 성공
// 메모이제이션으로 지금까지 나온 weight를 저장해둔다
function solution(weights) {
    let answer = 0
    const memo = {}
    
    for (const weight of weights) {
        answer += memo[weight] || 0
        answer += (memo[(weight * 2) / 3] || 0) + (memo[(weight * 3) / 2] || 0)
        answer += (memo[(weight * 3) / 4] || 0) + (memo[(weight * 4) / 3] || 0)
        answer += (memo[(weight * 4) / 2] || 0) + (memo[(weight * 2) / 4] || 0)
        memo[weight] = memo[weight] + 1 || 1
    }
    
    return answer
}