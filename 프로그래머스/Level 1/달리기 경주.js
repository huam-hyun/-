/**
 * 등수 순서대로 players를 주고 추월하는 선수의 이름을 담은 배열 callings를 주었을 때
 * callings에 따른 결과 등수를 담은 배열을 반환하여라
 * @param {string[]} players 
 * @param {string[]} callings 
 * @returns 결과 등수 players 이름 배열
 */

// 성공
// 객체를 두 개 사용하여 등수에 따른 이름과 이름에 따른 등수를 저장
// 이름을 통해 두 사람의 등수와 등수의 이름을 교환
// 0~player 마지막까지 순서대로 결과 배열에 push 후 반환
function solution(players, callings) {
    const rank = {}
    const player = {}
    const answer = []
    
    for (let i = 0; i < players.length; i++) {
        rank[players[i]] = i
        player[i] = players[i]
    }
    
    for (const call of callings) {
        const beforeRank = rank[call]
        const frontPlayer = player[beforeRank - 1]
        
        rank[call] = rank[frontPlayer]
        rank[frontPlayer] = beforeRank
        player[beforeRank] = frontPlayer
        player[beforeRank - 1] = call
    }

    for (let i = 0; i < players.length; i++) {
        answer.push(player[i])
    }
    
    return answer
}