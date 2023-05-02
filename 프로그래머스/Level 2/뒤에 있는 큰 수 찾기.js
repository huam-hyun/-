/**
 * 현재 위치에서 뒤에있는 수 중 가장 가까운 큰 수의 위치를 구해라
 * @param {int[]} numbers 
 * @returns 해당 위치에서 가장 가까운 큰 수의 위치를 반환해라
 */

// 성공
// -1로 채운 배열을 만든다
// i는 뒤에서 2번째부터 앞으로 반복, j는 i + 1부터 뒤로 반복
// 1. i위치 수가 j위치 수보다 작으면 j위치 수가 가장 가까운 큰수
// 2. i위치 수가 j위치 수보다 크거나 같으면
// 2.1 j위치의 큰 수가 -1일 경우 그 뒤로 더 큰 수는 없으므로 i위치는 무조건 -1
// 2.2 j위치의 큰 수가 i위치의 수보다 클 경우 j위치의 큰 수가 i위치의 큰 수
function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1)
    
    for(let i = numbers.length - 2; i >= 0 ; i--) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] < numbers[j]) {
                answer[i] = numbers[j]
                break
            } else if(numbers[i] >= numbers[j]) {
                if(answer[j] == -1) {
                    answer[i] = -1
                    break
                } else if(numbers[i] < answer[j]) {
                    answer[i] = answer[j]
                    break
                }
            }
        }
    }  
    
    return answer
}