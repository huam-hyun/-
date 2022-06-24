//체스판 다시 칠하기
let input1 = `8 8
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW`
const whiteFirst = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW'
]
const blackFirst = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'
]
let input = input1.split('\n')  //백준 제출시 input1과 input바꿈
let boardSize = input.shift().split(' ').map(x => +x)
let changeNum = []

for(let i = 0; i <= boardSize[0] - 8; i++){
    for(let j = 0; j <= boardSize[1] - 8; j++){
        changeNum.push(compareWhiteFirst(i, j))
        changeNum.push(compareBlackFirst(i, j))
    }
}

console.log(changeNum.sort((a, b)=>{return a-b})[0])

function compareWhiteFirst(y, x){
    let cnt = 0

    for(let i = y; i < y + 8; i++){
        for(let j = x; j < x + 8; j++){
            if(input[i][j] !== whiteFirst[i - y][j - x])
            cnt++
        }
    }
    return cnt
}
function compareBlackFirst(y, x){
    let cnt = 0

    for(let i = y; i < y + 8; i++){
        for(let j = x; j < x + 8; j++){
            if(input[i][j] !== blackFirst[i - y][j - x])
            cnt++
        }
    }
    return cnt
}