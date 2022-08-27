// 실패, 정확성 53.6점
// 수정중

function solution(n, info) {
    let answer = [];
    let lion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let lionScore = 0
    let apeechScore = 0
    
    // 어피치가 쏘지 않은 곳에 하나씩 세팅
    for(let i = 0; i < info.length && n > 0; i++){
        if(info[i]){
            apeechScore += (10 - i)
            continue
        }
        lion[i]++
        lionScore += (10 - i)
        n--
    }
    // 하나씩 맞추고 남은 화살은 전부 0점에 세팅
    lion[10] += n
    
    while(true){
        // 최솟값 === 어피치가 쏜 화살 중에 점수에 가장 적게 박힌 화살 갯수
        const min = Math.min(...info.filter((e, i) => e > 0 && info[i] > lion[i]))
        // 최솟값 index, indexOf로 같은 값이 있다면 가장 높은 점수의 index가 나오도록 함
        const minIndex = info.indexOf(min)
        // 한번 한 곳은 0으로 만듦 어차피 lion이 쏜 화살이 더 많아지니 상관없음
        info[minIndex] = 0
        // 최솟값 점수부터 그 아래 점수들의 화살 갯수
        const arrowNums = lion.slice(minIndex).reduce((pre, cur) => pre + cur, 0)
        
        // 어피치가 가장 적게 쏜 화살보다 라이언 과녁에서 이동 가능한 화살 갯수가 적다면
        // 라이언 과녁에서 이동 가능한 화살 갯수는 min + 1 이상이어야 한다
        if(min >= arrowNums){
            break
        }
        // 현재 라이언의 화살 위치
        const currentBoard = [...lion]
        // 현재 점수 차이
        const currentGap = lionScore - apeechScore
        // 라이언 과녁에서 이동해야 하는 화살의 갯수
        let remain = min + 1
        
        while(remain > 0){
            // node.js에서 findLastIndex가 지원되지 않아서 reduce로 구현함
            const index = lion.reduce((p, c, i) => {
                if(c > 0 && i > minIndex){
                    return i
                }else{
                    return p
                }
            } , -1)
            
            if(remain <= lion[index]){
                lion[index] -= remain
                lion[minIndex] += remain
                remain = 0
                break
            }else{
                remain -= lion[index]
                lion[minIndex] += lion[index]
                lion[index] = 0
            }
        }
        
        apeechScore = 0
        lionScore = 0
        for(let i = 0; i <= 10; i++){
            if(info[i] >= lion[i] && info[i] > 0){
                apeechScore += (10 - i)
            }else if(info[i] < lion[i] && lion[i] > 0){
                lionScore += (10 - i)
            }
        }
        if(lionScore - apeechScore <= currentGap){
            lion = currentBoard
            break
        }
    }
    // console.log(lionScore)
    // console.log(apeechScore)
    
    return lionScore <= apeechScore ? [-1] : lion
}