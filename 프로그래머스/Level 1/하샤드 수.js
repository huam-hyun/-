// 성공
function solution(x) {
    return x % (x+'').split('').reduce((pre, cur) => pre + +cur, 0) ? false : true
}