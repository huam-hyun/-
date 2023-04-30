/**
 * 점수 = 박스에 담은 과일 수(m) * 담긴 과일 중 최소 점수
 * 점수 총 합의 최댓값을 구해라
 * @param {int} k 
 * @param {int} m 
 * @param {int[]} score 
 * @returns 과일 점수의 최댓값을 구해라
 */

// 성공
// 역순으로 정렬해서 가장 m개 단위로 m * (m의 배수 위치 점수)를 정답에 더함
// 가장 큰 점수를 얻기 위해서는 가장 큰 과일끼리 같이 넣어야 하기 때문
function solution(k, m, score) {
    var answer = 0
    
    score.sort((a, b) => b - a)

    for (let i = 1; i * m - 1 < score.length; i++) {
        answer += score[i * m - 1] * m
    }
    
    return answer
}