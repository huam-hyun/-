// 성공
function solution(n) {
    const sqrt = Math.sqrt(n)
    return Math.floor(sqrt) === sqrt ? (sqrt + 1) ** 2 : -1
}