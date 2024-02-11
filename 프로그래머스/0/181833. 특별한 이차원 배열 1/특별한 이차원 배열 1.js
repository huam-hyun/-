function solution(n) {
    return Array.from({ length: n }, (_, i) => {
        return Array.from({ length: n }, (_, j) => {
            return j === i ? 1 : 0
        })
    })
}