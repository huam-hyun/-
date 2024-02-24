function solution(land) {
    const row = land.length
    const col = land[0].length
    const dydx = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    const oilSize = {}
    let oilGroup = 2
    let answer = 0
    
    const getOilTiles = (visit) => {
        const newVisit = []

        while (visit.length) {
            const [row, col] = visit.pop()
            dydx.forEach(([dy, dx]) => {
                const [r, c] = [row + dy, col + dx]
                if (land[r]?.[c] !== 1) {
                    return
                }
                land[r][c] = oilGroup
                oilSize[oilGroup]++
                newVisit.push([r, c])
            })
        }
        if (newVisit.length) getOilTiles(newVisit)
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (land[i][j] === 1) {
                land[i][j] = oilGroup
                oilSize[oilGroup] = 1
                getOilTiles([[i, j]], oilGroup)
                oilGroup++
            }
        }
    }

    for (let i = 0; i < land[0].length; i++) {
        const oils = [...new Set(land.map((row) => row[i]))]
        answer = Math.max(
            answer,
            oils.reduce((p, c) => p + (oilSize[c] || 0), 0)
        )
    }

    return answer
}