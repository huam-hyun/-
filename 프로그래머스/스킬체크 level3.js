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

// 2번
