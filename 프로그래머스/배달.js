// 테스트케이스 6, 12~29 실패

const N = 5, K = 3
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]]

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

console.log(solution(N, road, K))

