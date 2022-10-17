// 1차 시도
// 열에서 가장 큰 수 2개를 가지고 모든 경우의 수를 살펴보았다
// 시간이 너무 오래걸려서 실패

// 2차 시도
// 열 별로 현재 행까지 가능한 최대값을 저장한 후 마지막 열에서의 최댓값을 가져온다
// 성공

function solution(land) {
    let before = [0, 0, 0, 0]
    let current = [0, 0, 0, 0]
    
    for(let i = 0; i < land.length; i++){
        current = [...sum(land[i], [...before])]
        before = [...current]
    }
        
    function sum(row, sumArray){
        let temp = [...row]
        for(let i = 0; i < sumArray.length; i++){
            temp[i] = temp[i] + Math.max(...sumArray.slice(0, i), ...sumArray.slice(i + 1))
        }
        return temp
    }
    return Math.max(...current)
}