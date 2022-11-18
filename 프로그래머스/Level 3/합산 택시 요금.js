// 성공
// 완전 탐색으로 각 노드들 간 최단거리를 구한다
function solution(n, s, a, b, fares) {
    let answer = Infinity;
    let road = new Array(n).fill(0).map(e => new Array(n).fill(Infinity));
    
    for(const fare of fares){
        const [from, to, cost] = fare;
        
        road[from - 1][to - 1] = road[to - 1][from - 1] = cost;
    }
    for(let i = 0; i < n; i++) road[i][i] = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            for(let k = 0; k < n; k++){
                road[j][k] = Math.min(road[j][k], road[j][i] + road[i][k]);
            }
        }
    }
    answer = road[s - 1][a - 1] + road[s - 1][b - 1];

    for(let i = 0; i < n; i++){
        answer = Math.min(answer, road[s - 1][i] + road[i][a - 1] + road[i][b - 1]);
    }
    
    return answer;
}