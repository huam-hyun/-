// 성공

function solution(n) {
    let fibo = [0, 1, 1]
    
    if(n <= 2){
        return fibo[n]
    }
    for(let i = 3; i <= n; i++){
        fibo[i] = (fibo[i-1] + fibo[i-2]) % 1234567
    }
    
    return fibo[n]
}