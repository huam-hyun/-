const board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]
const board2 = 	[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
const board3 = 	[[3, 2, 1], [3, 2, 1], [3, 2, 1]]
const moves2 = [1, 2, 3, 3, 2, 1]
const moves = [1,5,3,5,1,2,1,4] 

function solution(board, moves) {
    console.log(board)
    const length = board.length
    let answer = 0;
    // 잡힌 인형이 들어있는 스택
    let catched = []
    const boardPointer = {}

    // 포인터 정렬
    // 해당 열(i)에 인형이 없으면 접근시 undefined가 나옴
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(board[j][i] !== 0){
                boardPointer[i] = j
                break
            }
        }
    }

    while(moves.length){
        // 인덱스는 moves - 1
        const loc = moves.shift() - 1
        // 움직인 곳의 포인터가 있으면 가져오고 없으면 x
        const doll = boardPointer[loc] !== undefined ? board[boardPointer[loc]][loc] : 0

        // 움직인 곳에 인형이 있으면
        if(doll){
            if(catched[catched.length-1] === doll){
                catched.pop()
                answer += 2
            }else{
                catched.push(doll)
            }

            // 뽑은 곳의 포인터를 하나 증가시킴
            if(boardPointer[loc] === length - 1){
                boardPointer[loc] = undefined
            }else{
                boardPointer[loc]++
            }
        }
    }

    return answer;
}

// console.log(solution(board, moves))
// console.log(solution(board2, moves))
console.log(solution(board3, moves2))