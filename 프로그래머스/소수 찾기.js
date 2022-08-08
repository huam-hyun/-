// 성공
function solution(n) {
    let answer = 0;
    
    for(let i = 2; i <= n; i++){
        if(isPrime(i)){
            answer++
        }
    }
    
    function isPrime(n){
        if(n === 2 || n === 3){
            return n
        }
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0){
                return false
            }
        }
        return true
    }
    
    return answer;
}