// 1차 시도 실패
// 테스트케이스 11 ~ 16 시간초과
// BFS로 최단 거리를 구했지만 시간이 부족하다

// 2차 시도 성공
// 아무래도 첫 시도 때 avail을 구하는 과정이 오래걸렸던 모양이다
// graph를 통해 미리 avail을 구해놓고 사용하니 시간이 많이 단축되어 성공했다

// 2차 시도 성공
function solution(n, roads, sources, destination) {
    let visited = new Array(n);
    let needVisit = [destination];
    const shortest = new Array(n);
    const graph = {};
    
    for(let [from, to] of roads){
        graph[from] ? graph[from].push(to) : graph[from] = [to];
        graph[to] ? graph[to].push(from) : graph[to] = [from];
    }

    shortest[destination - 1] = 0;
    visited[destination - 1] = true;
    
    while(needVisit.length){
        // BFS를 통해 최단 길이 구함
        const cur = needVisit.shift();    
        const avail = graph[cur];
            
        avail.forEach(e => {
            if(!visited[e - 1]){
                visited[e - 1] = true;
                needVisit.push(e);
                shortest[e - 1] = shortest[cur - 1] + 1;
            }
        });
    }

    return sources.map(e => shortest[e - 1] ?? -1);
}

// 1차 시도 실패
function solution(n, roads, sources, destination) {
    let visited = [];
    let needVisit = [destination];
    const shortest = new Map();
    shortest.set(destination, 0);
    
    while(needVisit.length){
        // BFS를 통해 최단 길이 구함
        const cur = needVisit.pop();
            
        if(!visited.includes(cur)){
            const avail = roads.filter(e => e.includes(cur)).map(v => v[0] === cur ? v[1] : v[0]);

            visited.push(cur);
            needVisit = [...avail, ...needVisit];
            
            avail.forEach(e => {
                if(shortest.has(e)) return;
                shortest.set(e, shortest.get(cur) + 1); 
            })            
        }
    }
    
    return sources.map(e => shortest.get(e) !== undefined ? shortest.get(e) : -1);
}