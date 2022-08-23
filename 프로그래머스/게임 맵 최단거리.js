// 테스트 케이스 통과, 효율성 테스트 1, 3, 4실패

const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]

function solution(maps) {
    const end = [maps.length - 1, maps[0].length - 1]
    const answer = findShortest('0 0', maps)
    
    return answer[end[0]][end[1]]
}

function findShortest(start, map){
    let needVisit = [start]
    let visited = []
    let dist = 1
    
    while(needVisit.length){
        const length = needVisit.length
        for(let i = 0; i < length; i++){
            const node = needVisit.shift()
            const [row, col] = node.split(' ').map(Number)

            if(!visited.includes(node)){
                distance[row][col] = dist
                map[row][col] = 0
                visited.push(node)
                
                needVisit.push(...getNear(row, col, map))
            }
        }
        dist++
        if(needVisit.includes(`${map.length} ${map[0].length}`)) break
    }
    
    return dist
}

function getNear(row, col, map){
    let nearNode = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]
    let avail = []
    
    nearNode.forEach(e => {
        if(e[0] < 0 || e[1] < 0 || e[0] === map.length || e[1] === map[0].length){
            return
        }else{
            if(map[e[0]][e[1]] === 1){
                avail.push(`${e[0]} ${e[1]}`)
            }
        }
    })
    
    return avail
}

console.log(solution(maps))