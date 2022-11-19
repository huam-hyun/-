// 성공
// 맨 처음엔 문제를 제대로 이해하지 못했다
// 경비병이 감시 중일 때는 기다렸다 갈 수 있는 줄 알았는데 그냥 1초에 1m씩 계속 움직이는 거였다

function solution(distance, scope, times) {
    let answer = 0;
    
    for(let i = 1; i <= distance; i++){
        answer++;
        
        const avail = scope.every((v, idx) => {          
            const active = times[idx][0];
            const sleep = times[idx][1];
            const total = active + sleep;
            const state = i % total;
            
            if(state > 0 && state <= active){
                v.sort((a, b) => a - b);
                return i >= v[0] && i <= v[1] ? false : true    
            }else{
                return true;
            }
        })
        
        if(!avail) break;
    }
    
    return answer;
}