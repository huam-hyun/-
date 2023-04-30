/**
 * 현재 문자열 s와 무시할 문자열 skip을 주고 각 글자를 index만큼 뒤로 보냈을 때 결과 문자열을 반환해라
 * @param {string} s 
 * @param {string} skip 
 * @param {int} index 
 * @returns skip이 완료된 문자열 반환
 */

// 성공
// skip일 때는 remain에 +1을 해 줘서 그만큼 반복문 실행
function solution(s, skip, index) {
    let answer = '', alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for (let i = 0; i < s.length; i++) {
        const idx = alphabet.indexOf(s[i])
        let remain = index
        
        for (let j = 1; j <= remain; j++) {
            if (skip.includes(alphabet[(idx + j) % 26])) remain++
        }
        answer += alphabet[(idx + remain) % 26]
    }
    
    return answer
}