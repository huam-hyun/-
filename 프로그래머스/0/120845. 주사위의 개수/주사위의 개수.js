function solution(box, n) {
    return box.reduce((p, c) => p * Math.floor(c / n), 1)
}