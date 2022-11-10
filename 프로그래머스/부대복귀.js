// Level3 실패
// 테스트케이스 11 ~ 15 시간초과
// BFS로 최단 거리를 구했지만 시간이 부족하다

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