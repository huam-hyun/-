// 2차 성공


// 2차 시도
// 정답을 저장할 전역변수
const answer = {
    gap: 0,
    board: [-1]
}
function solution(n, info) {
    for(let i = 0; i <= 10; i++){
        answer.gap -= info[i] ? (10 - i) : 0
    }
    let ryan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    getMax([...ryan], info, answer.gap, n, 0)
    
    return answer.gap > 0 ? answer.board : [-1]
}

function getMax(ryanBoard, apeechBoard, diff, remain, index){
    // 남은 화살이 없을 경우 정답을 비교한다
    if(remain === 0){
        // 현재 정답에 저장된 경우의 차이보다 현재 경우의 차이가 더 크면
        if(answer.gap < diff){
            // answer를 현재 diff와 board로 교체한다
            answer.gap = diff
            answer.board = ryanBoard
        // 만약 차이가 똑같다면
        }else if(answer.gap === diff){
            const answerScore = answer.board.reduce((p, c, i) => p + (c > 0 ? c : 0) * (10 - i), 0)
            const ryanScore = ryanBoard.reduce((p, c, i) => p + (c > 0 ? c : 0) * (10 - i), 0)
            
            // 과녁에 박힌 화살의 점수를 비교해서 더 적은 것으로 교체한다
            if(answerScore >  ryanScore){
                answer.board = ryanBoard
            }
        }
        return
    // index === 10이면 0점이니까 점수에 상관없이 모두 꽂는다
    }else if(index === 10){
        ryanBoard[10] += remain
        if(answer.gap <= diff){
            answer.gap = diff
            answer.board = ryanBoard
        }
        return
    }

    let take
    // 점수를 뺏지 않은 상황이 있을 수도 있다
    // 어피치의 점수를 뺏을 수 있다면 뺏은 경우의 board를 take에 저장한다
    if(remain > apeechBoard[index]){
        take = [...ryanBoard]
        take[index] += apeechBoard[index] + 1
    }
    
    // skip했을 때 점수 차이는 diff와 같다
    let takeDiff = 0
    // take가 undefined가 아니라면 해당 경우에 점수 차이를 구한다
    if(take){
        for(let i = 0; i <= 10; i++){
            // take했을 때 점수 차이
            if(take[i] > apeechBoard[i]){
                takeDiff += (10 - i)
            }else if(take[i] < apeechBoard[i]){
                takeDiff -= (10 - i)
            }
        }
    }
    
    // take가 있다면 점수를 뺏은 경우와 뺏지 않고 그대로 지나간 경우 모두 찾아본다
    if(take){
        getMax([...take], apeechBoard, takeDiff, remain - (apeechBoard[index] + 1), index + 1)
    }
    // take가 없다면 점수를 뺏지 않고 그대로 다음 과녁으로 넘어가서 재귀한다
    getMax([...ryanBoard], apeechBoard, diff, remain, index + 1)
}


// 1차 시도
// function solution(n, info) {
//     let lion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     let lionScore = 0
//     let apeechScore = 0
//     let exception = []
    
//     // 어피치가 쏘지 않은 곳에 하나씩 세팅
//     for(let i = 0; i < info.length && n > 0; i++){
//         if(info[i]){
//             apeechScore += (10 - i)
//             continue
//         }
//         lion[i]++
//         lionScore += (10 - i)
//         n--
//     }
//     // 하나씩 맞추고 남은 화살은 전부 0점에 세팅
//     lion[10] += n
    
//     while(true){
//         // 최솟값 === 어피치가 쏜 화살 중에 점수에 가장 적게 박힌 화살 갯수
//         const min = Math.min(...info.filter((e, i) => e > 0 && info[i] > lion[i]))
//         // 최솟값 index, indexOf로 같은 값이 있다면 가장 높은 점수의 index가 나오도록 함
//         const minIndex = info.indexOf(min)
//         // 한번 한 곳은 0으로 만듦 어차피 lion이 쏜 화살이 더 많아지니 상관없음
//         info[minIndex] = 0
//         // 최솟값 점수부터 그 아래 점수들의 화살 갯수
//         const arrowNums = lion.slice(minIndex).reduce((pre, cur) => pre + cur, 0)
        
//         // 어피치가 가장 적게 쏜 화살보다 라이언 과녁에서 이동 가능한 화살 갯수가 적다면
//         // 라이언 과녁에서 이동 가능한 화살 갯수는 min + 1 이상이어야 한다
//         if(min >= arrowNums){
//             break
//         }
//         // 현재 라이언의 화살 위치
//         const currentBoard = [...lion]
//         // 현재 점수 차이
//         const currentGap = lionScore - apeechScore
//         // 라이언 과녁에서 이동해야 하는 화살의 갯수
//         let remain = min + 1
        
//         while(remain > 0){
//             // node.js에서 findLastIndex가 지원되지 않아서 reduce로 구현함
//             const index = lion.reduce((p, c, i) => {
//                 if(c > 0 && i > minIndex){
//                     return i
//                 }else{
//                     return p
//                 }
//             } , -1)
            
//             if(remain <= lion[index]){
//                 lion[index] -= remain
//                 lion[minIndex] += remain
//                 remain = 0
//                 break
//             }else{
//                 remain -= lion[index]
//                 lion[minIndex] += lion[index]
//                 lion[index] = 0
//             }
//         }
        
//         apeechScore = 0
//         lionScore = 0
//         for(let i = 0; i <= 10; i++){
//             if(info[i] >= lion[i] && info[i] > 0){
//                 apeechScore += (10 - i)
//             }else if(info[i] < lion[i] && lion[i] > 0){
//                 lionScore += (10 - i)
//             }
//         }
//         if(lionScore - apeechScore <= currentGap){
//             lion = currentBoard
//             break
//         }
//     }
//     // console.log(lionScore)
//     // console.log(apeechScore)
    
//     return lionScore <= apeechScore ? [-1] : lion
// }