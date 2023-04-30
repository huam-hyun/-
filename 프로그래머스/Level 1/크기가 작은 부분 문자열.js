/**
 * t에서 p 길이를 가진 부분 문자열 중 p보다 작은 부분 문자열 개수를 구하라
 * @param {string} t 
 * @param {string} p 
 * @returns 크기가 작은 부분 문자열 개수
 */

// 성공
// p개씩 잘라서 크기 비교 후 answer++
function solution(t, p) {
    let answer = 0
    
    for (let i = 0; i < t.length - p.length + 1; i++) {
        const num = +t.slice(i, i + p.length)
        
        if (num <= +p) answer++
    }
    
    return answer
}