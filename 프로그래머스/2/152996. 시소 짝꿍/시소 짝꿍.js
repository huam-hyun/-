function solution(weights) {
    let answer = 0
    const memo = {}
    // memo를 통해 weight 정보를 저장합니다.
    for (const weight of weights) {
        answer += memo[weight] || 0
        // 2m, 3m 쌍 확인
        answer += (memo[(weight * 2) / 3] || 0) + (memo[(weight * 3) / 2] || 0)
        // 3m, 4m 쌍 확인
        answer += (memo[(weight * 3) / 4] || 0) + (memo[(weight * 4) / 3] || 0)
        // 4m, 2m 쌍 확인
        answer += (memo[(weight * 4) / 2] || 0) + (memo[(weight * 2) / 4] || 0)
        memo[weight] = memo[weight] + 1 || 1
    }
    
    return answer
}