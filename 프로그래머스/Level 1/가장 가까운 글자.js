/**
 * s에서 글자마다 왼쪽에서 가장 가까운 글자까지의 거리를 순서대로 가진 배열을 반환해라
 * @param {string} s 
 * @returns int[] 가장 가까운 같은 글자의 거리를 가진 배열
 */


// 성공
// 객체로 마지막 index 저장 후 없으면 -1, 있으면 i - lastIndex push
function solution(s) {
    let answer = []
    const lastIndex = {}
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        
        if (lastIndex[char] === undefined) {
            answer.push(-1)
        } else {
            answer.push(i - lastIndex[char])
        }
        lastIndex[char] = i
    }
    
    return answer
}