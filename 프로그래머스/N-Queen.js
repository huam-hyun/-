// 1차 성공

function solution(n) {
    let answer = 0;
    let board = Array.from(new Array(n)).map(e => new Array(n).fill(0))
    // console.log(board[4][0])
    setQueen(0, board)
    
    function setQueen(row, board){
        if(row === n){
            answer++
            return
        }
        for(let i = 0; i < n; i++){
            const curBoard = board.map(e => [...e])
            // console.log(curBoard)
            if(curBoard[row][i] === 0){
                const nextBoard = setBoard(row, i, curBoard)

                // if setBoard return false = continue else set next Queen
                nextBoard ? setQueen(row + 1, nextBoard) : false
            }
        }
    }
    
    function setBoard(row, queenLoc, board){
        board[row].fill(1)
        board[row][queenLoc] = 'Q'
        for(let i = row + 1; i < n; i++){
            board[i][queenLoc] = 1
            const gap = i - row
            if(board[i][queenLoc + gap] === 0){
                board[i][queenLoc + gap] = 1
            }
            if(board[i][queenLoc - gap] === 0){
                board[i][queenLoc - gap] = 1
            }
            if(!board[i].includes(0)){
                // next row hasn't 0
                return false
            }
        }
        
        return board
    }
    
    return answer;
}