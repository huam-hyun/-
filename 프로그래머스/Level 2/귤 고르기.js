// 성공
// k가 0보다 같거나 작아질 때 까지 갯수가 가장 많은 귤의 갯수를 빼준다
// k가 0보다 같거나 작아질 때가 가장 적은 종류의 귤을 담았을 때이다

function solution(k, tangerine) {
    let answer = 0;
    const kind = new Map();
    
    tangerine.forEach(e => {
        kind.set(e, (kind.get(e) ?? 0) + 1);
    });
    
    const keys = [...kind.keys()].sort((a, b) => kind.get(b) - kind.get(a));
    
    for(let i = 0; i < keys.length; i++){
        if(k <= 0) break;
        
        k -= kind.get(keys[i]);
        answer++;
    }
    
    return answer;
}