// 성공
// 한쪽으로 토핑을 몬 후에 왼쪽부터 하나씩 올라가면서 경우의 수 찾음
// 왼쪽Set에서 처음 발견했을 경우 왼쪽 Kind + 1
// 오른쪽Set에서 갯수가 0이 되면 오른쪽 Kind - 1
// 왼쪽 Kind === 오른쪽 Kind 일 때 answer++

function solution(topping) {
    let answer = 0;
    let leftSet = {};
    let rightSet = {};
    let leftKind = 0;
    let rightKind = new Set(topping).size;
    
    // 초기 Set
    topping.forEach(e => rightSet[e] = rightSet[e] + 1 || 1);
    
    // 왼쪽부터 한 칸씩 잘라보며 체크 
    topping.forEach(e => {
        if(leftSet[e] === undefined){
            leftSet[e] = 1;
            leftKind++;
        }else{
            leftSet[e]++;
        }
        if(--rightSet[e] === 0) rightKind--;
        
        if(leftKind === rightKind) answer++;
    })
    
    return answer;
}