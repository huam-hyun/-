// 1차 시도
// 테스트케이스 6, 12~29 실패

// 2차 시도
// 테스트케이스 6, 11~13, 15~17, 20~28, 32 실패

// 3차 시도
// 성공
// bfs로 node들을 순회하면서 최단 거리를 distance에 저장
// 기준에 맞는 distance의 갯수를 반환함

// 3차 시도 코드
function solution(N, road, K){
    let village = new Graph(N)
    village.findShortest(road)
    // console.log(village.distance)
    
    return village.distance.filter(e => e <= K).length
    
    function Graph(N){
        this.nodes = N
        this.distance = Array.from(new Array(N+1)).fill(Infinity)
        this.distance[1] = 0
        
        this.findShortest = (roads) =>{
            let needVisit = [1]
            let visited = []
            
            while(needVisit.length){
                const node = needVisit.shift()
                const road = roads.filter(e => e[0] === node || e[1] === node)
                if(!visited.includes(node)){
                    visited.push(node)
                    
                    const next = road.map(e => e[0] === node ? e[1] : e[0])
                    
                    needVisit.push(...next)
                }
                road.forEach(e => {
                    let [a, b, dist] = e
                    
                    if(a === node){
                        this.distance[b] = this.distance[a] + dist < this.distance[b] ? this.distance[a] + dist : this.distance[b]
                    }else{
                        this.distance[a] = this.distance[b] + dist < this.distance[a] ? this.distance[b] + dist : this.distance[a]
                    }
                })
            }
        }
    }
}

const N = 5, K = 3
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]]

function solution2(N, road, K){
    let answer = 0
    // 최단거리
    let far = []
    let nextVisit = 1
    let visited = [1]

    for(let i = 0; i <= N; i++){
        far[i] = Infinity
    }
    far[1] = 0

    while(nextVisit){
        let checkRoad = road.filter(e => e[0] === nextVisit || e[1] === nextVisit).sort((a, b) => a[2] - b[2])
        console.log(nextVisit)
        console.log(checkRoad)
        checkRoad.forEach(e =>{
            const [from, to, length] = e
            if(from === nextVisit){
                far[to] = far[from] + length < far[to] ? far[from] + length : far[to]
            }else{
                far[from] = far[to] + length < far[from] ? far[to] + length : far[from]
            }
        })
        
        let candidate = checkRoad.filter(e => !visited.includes(e[0]) || !visited.includes(e[1]))
        // console.log(nextVisit + '\n' + candidate)
        candidate = candidate.map(e => e[0] === nextVisit ? e[1] : e[0]).filter(e => !visited.includes(e))
        nextVisit = candidate[0]
        visited.push(nextVisit)
    }

    far.shift()
    console.log(far)

    return far.filter(e => e <= K).length
}

function solution(N, road, K) {
    let answer = 0;
    const graph = {}
    for(let i = 1; i <= N; i++){
        graph[i] = 0
    }

    for(let i = 1; i <= N; i++){
        let temp = road.filter(e => e[0] === i || e[1] === i)
        // road = road.filter(e => !temp.includes(e))

        temp.forEach(e => {
            const [from, to, distance] = e

            if(from === i){
                if(!graph[to]){
                    graph[to] = graph[from] + distance
                    return
                }
                graph[to] = graph[from] + distance < graph[to] ? graph[from] + distance : graph[to]
                // console.log(graph[to])
            }else{
                if(!graph[from]){
                    graph[from] = graph[to] + distance
                    return
                }
                graph[from] = graph[to] + distance < graph[from] ? graph[to] + distance : graph[from]
                // console.log(graph[from])
            }
        })
    }
    graph[1] = 0

    for(let i = 1; i <= N; i++){
        if(graph[i] <= K){
            answer++
        }
    }
    
    return answer;
}

console.log(solution2(N, road, K))

