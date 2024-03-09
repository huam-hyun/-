function solution(scores) {
    const wonho = scores[0]
    let maxScore = 0
    let answer = 1
    
    scores.sort((a, b) => {
            return b[0] === a[0]
                ? a[1] - b[1]
                : b[0] - a[0]
        })
    
    for (const score of scores) {
        if (score[1] < maxScore) {
            if (score === wonho) return -1
        } else {
            if (wonho[0] + wonho[1] < score[0] + score[1]) answer++
            maxScore = Math.max(maxScore, score[1])
        }
    }
    
    return answer
}