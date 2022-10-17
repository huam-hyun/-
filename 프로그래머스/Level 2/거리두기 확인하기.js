// 성공!
// 1차 시도 실패 : 좌, 우, 상 쪽만 확인을 했다.
// 아래는 살펴보지 않아도 계속해서 확인하면서 안되는 경우가 알아서 나올 줄 알았으나 그게 아니었나보다

// 2차 시도 성공 : 상, 하, 좌, 우를 모두 확인하도록 했다
// 상, 하, 좌, 우 중 P가 나오면 0, X가 나오면 continue, O가 나오면 한번 더 주위를 확인하도록 했다

function solution(places) {
    let answer = [];
    
    places.forEach(e =>{
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                // 사람일 경우에만 만족하는지 체크
                if(e[i][j] === 'P'){
                    if(checkDist(i, j, e)){
                        answer.push(0)
                        return
                    }
                }
            }
        }
        answer.push(1)
    })
    
    return answer;
}

function checkDist(row, col, place){
    // 현재 위치에서 주변에 있는 방들
    const check = getNear(row, col)

    for(let i = 0; i < check.length; i++){
        // P일 경우에는 맨해튼 거리 만족 x
        if(place[check[i][0]][check[i][1]] === 'P'){
            return true
        // O일 경우에는 한번 더 체크해봐야 함
        }else if(place[check[i][0]][check[i][1]] === 'O'){
            // 주변에 하나라도 'P'가 있다면 맨해튼 거리 만족 X
            if(getNear(check[i][0], check[i][1], row, col).some(e => place[e[0]][e[1]] === 'P')){
                return true
            }
        }
        // X일 경우에는 무조건 만족함 continue
    }
    // 조건에 만족되는게 하나도 없다면 false -> answer.push(1)
    return false
}

// 주변 대기실 위치를 찾는 함수
// 맨 처음 위치와 row, col중 하나라도 0~4사이의 수가 아닌 것들을 제거하고 나머지를 반환한다
function getNear(row, col, exceptRow, exceptCol){
    return [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]].filter(e => e[0] >= 0 && e[1] >= 0 && e[0] < 5 && e[1] < 5 && (e[0] !== exceptRow || e[1] !== exceptCol))
}

const places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]

console.log(solution(places))