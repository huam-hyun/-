// 성공
// n을 가지고 0과 1 사이의 분수를 찾는 문제
// 서로소일 경우에만 answer에 답을 push해 주면 된다
// 서로소 : 최대공약수가 1인 두 수
// GCD는 유클리드 호제법으로 구할 수 있다
// 두 수 num1, 2가 있을 때 작은 수와 큰 수의 나머지 연산을 한 결과 값(num1 % num2)을 작은 수(num2)와 다시 같은 방식으로 연산한다
// 작은 수가 0이 되면 나머지 수가 최대공약수이다

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
    const answer = [];
    const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

    for(let i = 1; i < n; i++){
        for(let j = i + 1; j < n + 1; j++){
            if(getGCD(i, j) === 1) answer.push(`${i}/${j}`);
        }
    }

    return answer;
};