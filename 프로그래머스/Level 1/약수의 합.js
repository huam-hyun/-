// 성공
function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= n / 2; i++){
        answer += n % i ? 0 : i
    }
    
    return answer + n;
}