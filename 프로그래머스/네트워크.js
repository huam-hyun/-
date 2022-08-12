// 성공

// new Array에는 map함수가 작동하지 않는걸 까먹어서 조금 헤멨다
// new Array(n).map(e => +e)

function solution(n, computers) {
    let answer = 1
    let computer = Array.from(computers).map((e, i) => i)
    let visited = []
    let needVisit = [0]
    
    while(visited.length !== n){
        if(!needVisit.length){
            answer++
            needVisit = [computer.filter(e => !visited.includes(e))[0]]
        }
        
        const com = needVisit.pop()
        
        if(!visited.includes(com)){
            visited.push(com)
            let connected = []
            
            computers[com].forEach((e, i) =>{
                if(e === 1 && !visited.includes(i)){
                    connected.push(i)
                }
            })
            
            needVisit = [...needVisit, ...connected]
        }
    }
    
    return answer;
}