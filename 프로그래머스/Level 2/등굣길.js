// dp문제
// 아래와 오른쪽으로 밖에 이동할 수 없다.
// 따라서 현재 위치에서 왼쪽, 위에 위치로 갈 수 있는 길의 갯수를 합치면 현재 위치로 이동할 수 있는 길의 갯수가 된다.
// 물웅덩이 위치만 false로 표시하고 차례대로 해당 방식을 그대로 적용하면 된다.

function solution(m, n, puddles) {
    const field = new Array(n).fill(0).map(() => new Array(m).fill(0))
    puddles = puddles.forEach((puddle) => {
        const [col, row] = puddle
        field[row - 1][col - 1] = false
    })
    field[0][0] = 1

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (field[i][j] === false || (i === 0 && j === 0)) {
                continue
            }
            const up = field[i - 1]?.[j] || 0
            const left = field[i]?.[j - 1] || 0
            field[i][j] = (up + left) % 1000000007
        }
    }

    return field[n - 1][m - 1]
}