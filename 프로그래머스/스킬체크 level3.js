// 총점 71.8 실패

// 1번
// 정답
function solution(tickets) {
    let path = []
    
    findPath(tickets, ['ICN'], 'ICN')
    path.sort()
    
    return path[0]
    
    function findPath(remainTicket, currentPath, currentLocation){
        // 남아있는 티켓이 없으면
        if(!remainTicket.length){
            path.push(currentPath)
            return '경로 완성'
        }
        
        // 사용 가능한 티켓 확인
        const availableTicket = remainTicket.filter(e => e[0] === currentLocation)
        
        if(!availableTicket.length){
            return '이 경로는 아님'
        }
        
        for(let i = 0; i < availableTicket.length; i++){
            const remain = remainTicket.filter(e => e !== availableTicket[i])
            const nextLocation = availableTicket[i][1]
            const current = [...currentPath, nextLocation]
            findPath(remain, current, nextLocation)
        }
    }
}

// 2차 시도
// 성공!
// 2번은 풀어본 문제가 나와서 쉽게 통과된거 같다
// 내 실력으로 통과한거 같지 않은 느낌이다
// 1번
function solution(n, results) {
    let answer = 0;
    const mans = new Man(n)
    mans.results(results)
    for(let i = 1; i <= n; i++){
        mans.loop(i)
    }
    for(let key in mans.record){
        if(mans.record[key].win.length + mans.record[key].lose.length === n - 1){
            answer++
        }
    }
    
    function Man(n){
        this.record = {}
        for(let i = 1; i <= n; i++){
            this.record[i] = {win: [], lose: []}
        }
        
        // 경기 결과 반영
        this.results = (results) =>{
            results.forEach(e => {
                this.record[e[0]].win.push(e[1])
                this.record[e[1]].lose.push(e[0])
            })
        }
        
        // 자신이 이긴 선수가 이긴 선수들을 포함시킴
        // 자신이 진 선수가 진 선수들을 포함시킴
        this.loop = (startNode) =>{
            let winVisit = [...this.record[startNode].win]
            let winVisited = []
            let loseVisit = [...this.record[startNode].lose]
            let loseVisited = []
            
            while(winVisit.length || loseVisit.length){
                const winNode = winVisit.length ? winVisit.shift() : startNode
                const loseNode = loseVisit.length ? loseVisit.shift() : startNode
                
                if(!winVisited.includes(winNode) && winNode !== startNode){
                    winVisited.push(winNode)
                    winVisit = [...winVisit, ...this.record[winNode].win]
                }
                if(!loseVisited.includes(loseNode) && loseNode !== startNode){
                    loseVisited.push(loseNode)
                    loseVisit = [...loseVisit, ...this.record[loseNode].lose]
                }
            }
            
            this.record[startNode].win = [...winVisited]
            this.record[startNode].lose = [...loseVisited]
        }
    }
    
    return answer;
}

// 2번
function solution(n, times) {
    let answer = 0;
    // 최소 가장 짧게 걸리는 시간, 최대 가장 길게 걸리는 시간 * n
    let left = 0, right = Math.max(...times) * n
    
    while(left <= right){
        // 최소와 최대의 평균 시간 = 딱 중간
        const mid = Math.floor((left + right) / 2)
        
        // 해당 시간동안 처리가능한 사람의 수
        const peoples = times.reduce((pre, cur) => Math.floor(mid / cur) + pre, 0)
        
        if(peoples < n){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    
    return left;
}