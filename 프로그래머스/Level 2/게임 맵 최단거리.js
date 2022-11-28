// 테스트 케이스 통과, 효율성 테스트 1, 3, 4실패

// 2차 시도 성공, BFS로 풀었다

const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]

// 2차 시도
function solution(maps) {
    const map = new Map();
    const end = `${maps.length - 1} ${maps[0].length - 1}`
    let needVisit = ['0 0'];
    let dist = 1;
    
    maps[0][0] = 0;
    
    while(needVisit.length){
        const length = needVisit.length;
        
        for(let i = 0; i < length; i++){
            const cur = needVisit.shift();
            const[y, x] = cur.split(' ').map(e => +e);

            map.set(cur, Math.min(map.get(cur) ?? Infinity, dist));

            const near = getNear(x, y, maps);
            
            near.forEach(e => {
                const [y, x] = e.split(' ').map(e => +e);
                
                maps[y][x] = 0;
            })

            needVisit = [...needVisit, ...near];
        }
        dist++;
    }

    return map.get(end) ?? -1;
}

function getNear(x, y, map){
    const near = [[y, x - 1], [y, x + 1], [y - 1, x], [y + 1, x]].filter(e => map[e[0]]?.[e[1]] === 1);
    
    return near.map(e => e.join(' '));
}

// 1차 시도
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