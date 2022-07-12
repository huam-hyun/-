// 테스트케이스 1, 4, 5, 6, 8, 9 실패 9는 시간초과
// 시간도 너무 오래걸리고 구현도 잘못한 것 같다

// 2차 시기 테스트케이스 3만 통과
// 1차 시기보다 효율성은 늘어났지만 테스트 케이스를 하나밖에 못함

// 3차 시기 테스트케이스 7, 8, 9 시간초과 효율성만 줄이면 된다
// 2차 시기 실패 이유 : edge를 작은 노드에서 큰 노드로 가도록 정렬함
// 1번에서 출발한다고 무조건 작은 노드에서 큰 노드 방향으로 가지 않음
// ex) [1, 2]가 없으면 [4, 2]방향으로 가게 된다

// 4차시도
// 성공!

// 1번 노드에서 가장 멀리 떨어진 노드의 개수를 출력
const edge1 = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]
const edge2 = [[1, 2], [1, 4], [1, 5], [2, 3], [5, 2], [2, 4], [2, 6], [3, 5], [3, 6]]
const n = 6

function solution(n, edge) {
    let answer = [];
    let nextNode = [1]
    let visited = [1]

    while(nextNode.length){
        // nextNode를 모두 방문하니 visited에 nextNode 추가
        visited = [...visited, ...nextNode]

        // 다음 nextNode는 edge에서 출발 노드에 현재 nextNode중 하나가 포함되고 목적지 노드가 visited에 없는애들
        // + Set으로 중복 제거
        // nextNode가 0이되면 반복문이 종료되니 마지막 상태를 answer에 저장
        answer = [...nextNode]
        
        // nextNode는 edge에서 nextNode가 포함된 모든 간선의 반대쪽 노드
        nextNode = edge.filter(e => nextNode.includes(e[0]) || nextNode.includes(e[1])).map(e => nextNode.includes(e[0]) ? e[1] : e[0])
        // 이미 방문한 노드 제거 + Set으로 중복제거
        nextNode = [...new Set(nextNode.filter(e => !visited.includes(e)))]
        
        console.log(nextNode)
    }

    // answer 길이가 답
    return answer.length
}

console.log(solution(n, edge1))
console.log(solution(6, edge2))