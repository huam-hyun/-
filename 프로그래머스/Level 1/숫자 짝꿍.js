/**
 * X, Y를 구성하는 문자열 중 공통된 숫자들을 구해서 해당 숫자들로 만들 수 있는 가장 큰 수를 구해라
 * @param {string} X 
 * @param {string} Y 
 * @returns X, Y의 공통 숫자를 가지고 만들 수 있는 가장 큰 수를 반환
 */

// 성공
// 반복문을 통해 X, Y의 숫자별 개수를 구한다
// 9부터 0까지 숫자별 개수 중 작은 값을 숫자와 연속해서 answer에 더한다
// answer가 0으로 시작하면 '0'이란 뜻이다
function solution(X, Y) {
    const Xnum = {}, Ynum = {}
    let answer = ''
    
    for (let i = 0; i < X.length; i++){
        const num = X[i]
        
        Xnum[num] = Xnum[num] + 1 || 1
    }
    for (let i = 0; i < Y.length; i++){
        const num = Y[i]
        
        Ynum[num] = Ynum[num] + 1 || 1
    }
    
    for (let i = 9; i >= 0; i--) {
        answer += `${i}`.repeat(Math.min(Xnum[i], Ynum[i]))
    }
    
    if (answer[0] === '0') answer = '0'
    
    return answer.length ? answer : '-1'
}