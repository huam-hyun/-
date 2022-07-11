// 테스트 케이스 통과, 효율성 테스트 1, 3, 4실패

const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]

function solution(maps) {
    let answer = 0;
    
    answer = bfs("0 0", maps)
    
    return answer;
    
}

function bfs(firstNode, maps){
    let depth = 0
    let needVisit = []
    let visited = []
    needVisit.push(firstNode)
    
    while(needVisit.length){
        const height = maps.length
        const width = maps[0].length
        let route = []
        const dest = `${height - 1} ${width - 1}`
        maps[0][0] = 0
        
        for(let i = 0; i < needVisit.length; i++){
            const node = needVisit[i]
            let [row, col] = node.split(' ').map(e => +e)
            
            if(!visited.includes(node)){
                visited.push(node)
            }
            
            // 주변에 갈 수 있는 길이 있는지 확인
            if((row - 1) >= 0 && maps[row-1][col]){
                route.push(`${row-1} ${col}`)
                maps[row-1][col] = 0
            }
            if((row + 1) < height && maps[row+1][col]){
                route.push(`${row+1} ${col}`)
                maps[row+1][col] = 0
            }
            if((col - 1) >= 0 && maps[row][col-1]){
                route.push(`${row} ${col-1}`)
                maps[row][col-1] = 0
            }
            if((col + 1) < width && maps[row][col+1]){
                route.push(`${row} ${col+1}`)
                maps[row][col+1] = 0
            }
        }
        depth++

        needVisit = [...route]
        route = []
        if(needVisit.includes(dest)){
            return depth + 1
        }
    }
    return -1
}

console.log(solution(maps))