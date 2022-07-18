// 1부터 갯수 계산하면 피보나치 수열이 나온다

function solution(n) {
    let answer = 0;
    let a = 2, b = 1;
    for(let i = 2; i < n; i++){
        answer = (a + b) % 1000000007;
        b = a;
        a = answer;
    }
    return answer;
}

console.log(solution(4))