function solution(n, m, x, y, r, c, k) {
    const getDistance = (row, col) => Math.abs(row - r) + Math.abs(col - c)
    const isAvailableTo = (row, col, remain) => {
        const distance = getDistance(row, col)

        return row < 1 || row > n || col < 1 || col > m
            ? false
            : distance <= remain
    }
    const dlru = {
        d: [1, 0],
        l: [0, -1],
        r: [0, 1],
        u: [-1, 0],
    }
    let answer = ''
    let loc = [x, y]
    
    if (getDistance(x, y) > k || getDistance(x, y) % 2 !== k % 2) {
        return 'impossible'
    }
    
    while (k) {
        for (const direction in dlru) {
            const [dy, dx] = dlru[direction]
            const [row, col] = [loc[0] + dy, loc[1] + dx]
            if (isAvailableTo(row, col, k - 1)) {
                answer += direction
                loc = [row, col]
                k -= 1
                break
            }
        }
    }
    
    return answer
}