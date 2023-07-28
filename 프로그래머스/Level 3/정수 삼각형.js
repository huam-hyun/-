// 성공
// dp문제
// 맨 위에서 부터 차례대로 dp를 쌓아가며 더했을때 더 큰 수를 저장한다
// 마지막 배열에서 가장 큰 값이 정답이다.
// Level3인데 Level2 정도 되는 문제인거 같다.

function solution(triangle) {
    const dp = triangle.reduce((p, c) => {
        const next = []
        c.forEach((num, i) => {
            next[i] = Math.max((p[i] ?? 0) + num, (p[i - 1] ?? 0) + num)
        })
        return next
    }, [])
    
    return Math.max(...dp)
}