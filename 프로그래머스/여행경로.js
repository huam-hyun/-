const tickets1 = [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]
const tickets2 = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]

function solution(tickets) {
    let answer = [];
    const airport = []

    for(let i = 0; i < tickets.length; i++){
        let [start, dest] = tickets[i]

        if(airport[start]){
            airport[start].push(dest)
            // 알파벳 순으로 정렬
            airport[start].sort((a, b) => {return a - b})
        }else{
            airport[start] = [dest]
        }
    }

    console.log(airport)

    answer = dfs(["ICN"], [], airport, tickets.length)

    return answer;
}

function dfs(ticket, visited){
    while(ticket.length){
        const current = needVisit.shift()

        visited.push(current)
        if(!graph[current]){
            if(visited.length === ticketNum + 1){
                console.log(visited)
                return visited
            }else{
                return
            }
        }
        needVisit = graph[current]
        

        dfs(needVisit, visited, graph, ticketNum) 
    }
    return visited
}

console.log(solution(tickets1))
console.log(solution(tickets2))