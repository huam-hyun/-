// 성공

// 방법
// 맨 아래의 원판을 목표 위치로 옮기기 위해서는 그 위 원판들을 여분 위치로 옮긴 다음 옮기면 된다. 그리고 여분 위치의 원판들을 다시 목표 위치로 옮기면 끝!
// ex) 원판이 두개일 때 : 1번 원판을 1 -> 2 로, 2번 원판을 1 -> 3 으로, 그리고 다시 1번 원판을 2 -> 3 으로 옮기면 된다.
// 이 방식을 재귀 함수로 만들면 모든 이동을 구할 수 있다.

function solution(n) {
    let answer = [];
    let hanoi = []
    let temp = []
    // let nums = new Array(n)
    // nums = nums.map((e, i) => i + 1)
    hanoi.push(...getMoving(1, 3, n))
    
    for(let i = 0; i < hanoi.length; i++){
        temp.push(hanoi[i])
        
        if(i % 2){
            answer.push([...temp])
            temp = []
        }
    }
    
    return answer;
}

function getMoving(from, to, nums){
    if(nums === 1){
        return [from, to]
    }
    
    const first = getMoving(from, (6 - from - to), nums - 1)
    const middle = getMoving(from, to, 1)
    const last = getMoving((6 - from - to), to, nums - 1)
    
    return [...first, ...middle, ...last]
}