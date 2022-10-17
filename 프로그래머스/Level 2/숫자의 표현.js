// 성공
// n ~ m 까지의 합 공식 = (n + m) * (m - n + 1) / 2 = sum
// 이 공식으로 m을 정의하면 m(m + 1) = 2 * sum + n(n - 1)이 나온다
// 첫 for문으로 m(m + 1)인 수를 만들어두고
// 두번째 for문으로 2 * sum + n(n - 1)가 m(m + 1)인 수라면 answer++를 해준다

function solution(n) {
    let answer = 1;
    const dic = {};
    
    for(let i = 1; i < n; i++){
        const multiple = i * (i + 1);
        
        dic[multiple] = true;
    }
    
    for(let i = 1; i <= n / 2; i++){
        const m = 2 * n + i ** 2 - i;

        if(dic[m] === true){
            answer++;
        }
    }
    
    return answer;
}