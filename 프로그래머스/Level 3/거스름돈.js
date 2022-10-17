// 이거 점화식 만든 사람은 정말 대단한거 같다
// ㅎㄷㄷ

function solution(n, money) {
    let ways = new Array(n + 1).fill(0);
    
    ways[0] = 1;
    
    for(let i = 0; i < money.length; i++){
        for(let j = money[i]; j < ways.length; j++){
            ways[j] += ways[j - money[i]];
        }
    }
    
    return ways[n];
}