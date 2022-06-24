const board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]
const length = board.length
const moves = [1,5,3,5,1,2,1,4] 
const boardPointer = {}

function solution(board, moves) {
    let answer = 0;
    let dollStack = []
    let row = 0

    // 열 별로 포인터 설정
    for(let i = 0; i < length; i++){
        let j = 0
        while(board[j][i] === 0 && j < length){
            j++
            boardPointer[i] = j
        }
    }

    moves.forEach(e => {
        const doll = getDoll(e)
        if(doll){
            dollStack.push(doll)
        }
        while(dollStack.length >= 2){
            const doll1 = dollStack.pop()
            const doll2 = dollStack.pop()

            if(doll1 === doll2){ 
                answer += 2
            }else{
                dollStack.push(doll2)
                dollStack.push(doll1)
                break
            }
        }
    })

    return answer;
}

function getDoll(craneLocation){
    // 크레인이 뽑을 위치
    const col = craneLocation - 1
    // 크레인이 뽑을 인형의 높이
    const row = boardPointer[col]

    // 뽑을 위치에 인형이 없다면
    if(row === length){
        return
    }

    // 인형 뽑아간 부분의 포인터 증가
    boardPointer[col]++

    return board[row][col]
}

console.log(solution(board, moves))