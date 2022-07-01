const tickets1 = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
const tickets2 = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]
let availablePath = []

function solution(tickets) {
    let answer = [];

    dfs("ICN", tickets, [])

    availablePath.sort()

    return answer = ["ICN"].concat(availablePath[0])
}

// 출발지, 남은 티켓, 사용한 티켓
function dfs(from, ticket, used){
    if(!ticket.length){
        // ticket이 없다
        used = used.map(e => e[1])
        availablePath.push(used)
    }

    // from이 출발인 티켓
    let dest = ticket.filter(e => e[0] === from)

    if(!dest.length){
        // ticket은 남았는데 다음으로 갈 티켓이 없으면 이 경로가 아님
        return
    }
    
    while(dest.length){
        let useTicket = dest.shift()

        // 여러개일 경우 기존 ticket과 used에서 삭제/추가를 해야돼서 변수 사용
        // 사용한 티켓 삭제
        let remainTicket = ticket.slice()
        remainTicket.splice(remainTicket.indexOf(useTicket), 1)
        // 사용한 티켓 추가
        let tempUsed = used.length ? used.slice() : []
        tempUsed.push(useTicket)

        // 목적지가 다음 출발지가 된다
        const path = dfs(useTicket[1], remainTicket, tempUsed)
    }
}

// console.log(solution(tickets1))
console.log(solution(tickets2))