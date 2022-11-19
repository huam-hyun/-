// 성공
// 가능한 모든 사이클을 찾아주었다
// 첫 번째 while문: used 배열에 안쓰인 값(false)이 있다면 계속해서 사이클을 찾는다
// 두 번째 while문: 다음 값의 used가 true일 때 까지 박스를 추가한다
// 찾은 groups를 내림차순 정렬 후 길이가 2미만이면 0 아니면 최댓값 두개를 곱한다

function solution(cards) {
    let used = new Array(cards.length).fill(false);
    const groups = [];
    
    while(used.includes(false)){
        let next_i = used.indexOf(false);
        let num = 0;
        
        while(!used[next_i]){
            num++;
            used[next_i] = true;
            
            next_i = cards[next_i] - 1;
        }
        groups.push(num);
    }
    
    groups.sort((a, b) => b - a);
    
    return groups.length < 2 ? 0 : groups[0] * groups[1];
}