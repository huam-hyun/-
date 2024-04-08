function solution(a, b, c, d) {
    const set = new Set([a, b, c, d])
    let answer = 0

    if (set.size === 1) {
        return 1111 * a
    }
    if (set.size === 2) {
        let conditions = [0, a + b + c + d]
        const [x, y] = [...set]
        for (const n of set) {
            conditions[0] += n
            conditions[1] -= n
        }
        if (conditions[1] === conditions[0]) {
            return conditions[0] * Math.abs(x - y)
        }
        return (conditions[1] === 2 * x ? x * 10 + y : y * 10 + x) ** 2
    }
    if (set.size === 3) {
        const conditions = [1, a + b + c + d]
        for (const n of set) {
            conditions[0] *= n
            conditions[1] -= n
        }
        return conditions[0] / conditions[1]
    }
    return Math.min(a, b, c, d)
}