// 성공
function solution(n){
    return (''+n).split('').reduce((pre, cur) => pre + +cur, 0)
}