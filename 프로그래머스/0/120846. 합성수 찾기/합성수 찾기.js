function solution(n) {
    const answer = new Set([])
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = 2; j * i <= n; j++) {
            answer.add(i * j)
        }
    }

    return answer.size
}