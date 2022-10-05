// 성공
// 알고보니 피보나치 수열 문제였다...

function solution(n) {
    let answer = [0, 1, 2];
    
    for(let i = 3; i <= n; i++){
        answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
    }
    
    return answer[n];
}