// 성공
// bfs를 통해 시작 선수가 이긴 선수가 없을 때까지 순회하면서 win에 추가
// + 시작 선수가 이긴 선수는 이긴 선수의 lose에 시작 선수를 추가
// 각 선수들은 Set을 사용하여 add를 하여도 중복이 없도록 함
// 모든 선수를 시작 선수로 하여 모든 경우를 확인 한 후
// 각 선수의 win과 lose의 size를 더하여 n - 1이 나오면 순위를 알 수 있다.

function solution(n, results) {
    let answer = 0;
    // 선수들을 해당 번호로 구분하기 위해 n + 1로 배열을 만들어 줌
    // 0번은 마지막에 버림, 1 ~ n 까지 사용
    let players = Array.from(new Array(n + 1))
    
    // fill을 사용할 경우 객체의 주소를 공유하는 문제가 발생하여
    // for문으로 각 선수들에게 각각 객체를 만들어 줌
    for(let i = 1; i <= n; i++){
        players[i] = {win : new Set(), lose: new Set()}
    }
    
    // 모든 선수를 시작 선수로 하여 모든 경우를 확인함
    for(let i = 1; i <= n; i++){
        getWins(i)
    }
    
    // players의 0번 인덱스에는 아무것도 없기(undefined) 때문에 버림
    players = players.slice(1)

    // 각 선수들의 win과 lose의 수를 더하여 n - 1이 나올 경우 선수의 순위를 알 수 있음
    players.forEach(e => {
        e['win'].size + e['lose'].size === n - 1 ? answer++ : 0
    })
    
    // 선수들의 win과 lose를 구하기 위한 bfs 함수
    function getWins(start){
        let needVisit = [start]
        let visited = []

        while(needVisit.length){
            const player = needVisit.shift()

            if(!visited.includes(player)){
                visited.push(player)

                // player가 이긴 사람들
                // 이후에는 player가 이긴 사람들이 이긴 사람들이 나온다
                // map을 통해 이긴 사람들만 나오게 함
                const wins = results.filter(e => e[0] === player).map(e => e[1])

                // player의 win에 이긴 사람들을 추가
                // 이긴 사람들의 lose에 player를 추가
                // 처음에 player[player].win.add(e)를 했다가 무언가 잘못됐음을 느꼈다
                // 내가 알고 싶은건 맨 처음 start가 이긴 사람들이기 때문에 player[start].win.add(e)로 바꿔주었다
                // 마찬가지로 players[e].lose.add(player)에서 players[e].lose.add(start)로 바꿔주었다
                wins.forEach(e => {
                    players[start].win.add(e)
                    players[e].lose.add(start)
                })

                // 다음으로 순회할 선수들을 needVisit에 추가
                needVisit.push(...wins)
            }
        }
    }
    
    return answer
}