// 테스트케이스 6, 효율성 실패

// 2차 시도 성공

const board = [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]
const board2 = [[0,0,1,1],[1,1,1,1]]

// function solution(board)
// {
//     let answer = 0;
//     let row = board.length
//     let col = board[0].length

//     for(let i = 0; i < row; i++){
//         for(let j = 0; j < col; j++){
//             if(board[i][j] === 0){
//                 continue;
//             }
//             const maxSize = findSquare(i, j)
//             answer = answer < maxSize ? maxSize : answer
//         }
//     }

//     function findSquare(a, b){
//         // 기본 한변 길이
//         let length = 1

//         while(a + length < row && b + length < col){
//             for(let i = a; i < a + length; i++){
//                 if(board[i][b + length] === 0){
//                     return length ** 2
//                 }
//             }
//             for(let i = b; i < b + length; i++){
//                 if(board[a + length][i] === 0){
//                     return length ** 2
//                 }
//             }
//             length++
//         }
//         return length ** 2
//     }

//     return answer;
// }

function solution(board){
    let answer = 0
    
    let max = new Array(1001).fill(0)
    max = max.map(e => [...new Array(1001).fill(0)])

    const row = board.length
    const col = board[0].length

    for(let i = 1; i <= row; i++){
        for(let j = 1; j <= col; j++){
            if(board[i-1][j-1] !== 0){
                max[i][j] = Math.min(max[i][j-1], max[i-1][j-1], max[i-1][j]) + 1
                answer = answer < max[i][j] ? max[i][j] : answer
            }
        }
    }

    return answer ** 2
}

console.log(solution(board))
console.log(solution(board2))