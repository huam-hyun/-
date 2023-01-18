// 성공
/*
    문제
    1. 2비트 문자열 s가 주어진다
    2. 문자열 s를 전부 0으로 바꾸거나 연속된 1로 끝나는 문자열(ex. '00111', '00011', ...)로 만들어야 한다
    3. s를 주어진 조건으로 만드는 최소 횟수를 반환해라

    풀이
    1. 변수
    - N === 문자열 길이
    - makeTrue === 0 ~ i번째 까지 1로 바꾼 횟수
    - answer === 정답

    2. 해결법
    - s를 i번째부터 1로 만드는 횟수 === i - 1까지 0으로 + i번째부터 1로 만드는 횟수
    - i번째에 0으로 만드는 횟수 === i + 1 - makeTrue[i];
    - 횟수 === i - makeTrue[i - 1] + makeTrue[N - 1] - makeTrue[i];
    - 0부터 N까지 횟수가 최소가 되는 값을 찾아 리턴한다
 */

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    if(!s.includes('0') || !s.includes('1')) return 0;

    const N = s.length;
    const makeTrue = [s[0] === '0' ? 1 : 0];
    let answer = N;

    for(let i = 1; i < N + 1; i++){
        makeTrue[i] = makeTrue[i - 1] + (s[i] === '0' ? 1 : 0);
    }

    for(let i = 0; i < N + 1; i++){
        const NEED = i - (makeTrue[i - 1] || 0) + makeTrue[N - 1] - makeTrue[i] || 0;

        if(NEED < answer) answer = NEED;
    }

    return answer;
};