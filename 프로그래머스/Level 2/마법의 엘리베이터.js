// 성공
// 일의 자리가 5일때 십의 자리까지 생각해 주어야 예외가 생기지 않는다

function solution(storey) {
    let answer = 0;
    
    while(storey){
        const one = storey % 10;
        
        if(one > 5){
            storey += 10;
            answer += 10 - one;
        }else if(one === 5 && storey / 10 % 10 > 5){
            storey += 10;
            answer += 10 - one;
        }else{
            answer += one;
        }
        
        storey = Math.floor(storey / 10);
    }
    
    return answer;
}