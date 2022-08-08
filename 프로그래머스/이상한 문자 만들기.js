// 성공
function solution(s) {
    return s.split(" ")
        .map(e => e.replace(/\D/g, (x, i) => i % 2 ? x.toLowerCase() : x.toUpperCase()))
        .join(' ')
}