function solution(numLog) {
    const map = {
        1: 'w',
        '-1': 's',
        10: 'd',
        '-10': 'a',
    }
    let answer = ''
    for (let i = 1; i < numLog.length; i++) {
        answer += map[numLog[i] - numLog[i - 1]]
    }
    return answer
}