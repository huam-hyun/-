// 성공
function solution(s) {
    return s.match(/\D/) || (s.length !== 6 && s.length !== 4)  ? false : true
}