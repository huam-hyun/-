// 성공
/*
    문제
    1. 0시부터 N - 1시까지 고객들의 방문 여부가 문자열 형태로 주어진다(customers)
    2. 가게가 열려 있을 때 손님이 오지 않으면 패널티 1점을 부여한다
    3. 가게가 닫혀 있을 때 손님이 오면 패널티 1점을 부여한다
    4. 패널티가 최소가 되는 close시간을 리턴해라

    해결법
    1. 변수
    - N === customers길이
    - penalty === 0시에 문을 닫았을 때 i시의 패널티 점수
    - answer === 패널티 점수가 최소가 되는 시간
    - min === 최소 패널티 점수

    2. 해결법
    - i시의 패널티 점수 === i - 1시 까지 오픈 패널티 + N - 1시까지 클로즈 패널티
    - i시의 오픈 패널티 점수 구하는 법 === i + 1 - (i시의 클로즈 패널티 점수)
    - 가게를 닫지 않았을 때 패널티가 최소가 될 수 있으므로 N시까지 비교해야 한다
    - 패널티 점수가 최소가 되는 부분을 answer에 저장한 후 리턴한다
*/ 

/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    if(!customers.includes('Y')) return 0;

    const N = customers.length;
    const penalty = [customers[0] === 'N' ? 0 : 1];
    let answer = N;
    let min = N;

    for(let i = 1; i < N + 1 ; i++){
        penalty[i] = penalty[i - 1] + (customers[i] === 'Y' ? 1 : 0);
    }

    for(let i = 0; i < N + 1; i++){
        const TOTAL_PENALTY = i - (penalty[i - 1] || 0) + penalty[N - 1] - (penalty[i - 1] || 0);
        
        if(TOTAL_PENALTY < min){
            min = TOTAL_PENALTY;
            answer = i;
        }
    }

    return answer;
};