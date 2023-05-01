/**
 * 부분수열에서 합이 k인 가장 짧고 시작점이 빠른 부분 수열의 위치를 구해라
 * @param {int[]} sequence 
 * @param {int} k 
 * @returns 부분수열 중에서 합이 k인 가장 짧은 길이의 부분 수열 시작과 끝을 반환
 */

// 성공
// 2포인터와 부분합을 통해 구현
// 우측 포인터가 sequence를 벗어나기 전까지만 반복
// 부분합이 k보다 작으면 우측 포인터++
// 부분합이 k보다 크면 좌측 포인터++
// 부분합이 k일 경우 현재 결과값의 길이가 현재 부분 수열의 길이보다 클 경우면 정답 변경
function solution(sequence, k) {
    let answer = [0, sequence.length], left = 0, right = 0
    const sum = [sequence[0]]
    
    for (let i = 1; i < sequence.length; i++) {
        sum[i] = sum[i - 1] + sequence[i]
    }

    while(right < sequence.length) {
        const sub = sum[right] - (sum[left - 1] || 0)
        if (sub < k) {
            right++
        } else if (sub === k) {
            if (right - left < answer[1] - answer[0]) {
                answer = [left, right]
            }
            left++
        } else {
            left++
        }
    }
    
    return answer
}