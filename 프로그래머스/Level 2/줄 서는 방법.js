// 성공
// k가 factorial 의 배수일 때 예외 처리를 해줘야 하는데 안해줘서 테스트케이스 4, 14 실패가 나왔다
// 예외 처리후 성공

function solution(n, k) {
    let answer = [];
    let factorial = [1, 1];
    let use = [];
    
    for(let i = 1; i <= n; i++) use[i] = i;
    for(let i = 2; i < n; i++) factorial[i] = factorial[i - 1] * i;

    while(answer.length < n){
        if(k === 0) k = n - answer.length;
        
        const fac = factorial.pop();
        const order = Math.ceil(k / fac);
        
        answer.push(use[order]);
        use.splice(order, 1);
        
        if(k % fac === 0) k = fac;
        else k %= fac;
    }
    
    return answer;
}