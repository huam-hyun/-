// 성공
// 원의 방정식으로 y최댓값을 찾아 준 후 answer에 가능한 점의 갯수를 더해준다

function solution(k, d) {
    // 반지름이 d인 호 안에 점 중 좌표가 k의 배수인 점의 갯수
    let answer = 0;
    
    for(let i = 0; i <= d; i += k){
        const max = Math.sqrt(d ** 2 - i ** 2);
        
        answer += Math.floor(max / k) + 1;
    }
    
    return answer;
}