function solution(n, m) {
    let answer = [];
    const bigger = Math.max(n, m)
    
    for(let i = 1; i <= bigger / 2; i++){
        if(n % i === 0 && m % i === 0){
            answer[0] = i
        }
    }
    answer[1] = n * m / answer[0]
    
    return answer
}