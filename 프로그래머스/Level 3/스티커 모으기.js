// 다른 사람의 코드를 참고했습니다.
// dp에 대한 이해가 필요한 것 같다. 여러 문제를 더 살펴봐야겠다

function solution(sticker) {
    const length = sticker.length;
    let dp1 = new Array(length + 2).fill(0);
    let dp2 = new Array(length + 2).fill(0);
    
    if(length === 1){
        return sticker[0]
    }
    
    // 첫 스티커를 뗀 경우
    for(let i = 2; i < length + 1; i++){
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + sticker[i-2]);
    }
    
    // 첫 스티커를 안 뗀 경우
    for(let i = 3; i < length + 2; i++){
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + sticker[i-2]);
    }
    
    return Math.max(dp1[length], dp2[length + 1])
}