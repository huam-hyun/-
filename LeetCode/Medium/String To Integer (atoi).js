// 성공
// trimStart로 왼쪽 공백을 제거하고 정규 표현식으로 원하는 문자열을 찾았다

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const regexp = new RegExp(/^[-+]{0,1}[\d]+/);
    const answer = s.trimStart().match(regexp);

    if(answer === null) return 0;

    if(+answer < -(2 ** 31)) return -(2 ** 31);
    else if(+answer > 2 ** 31 - 1) return 2 ** 31 - 1;
    return +answer;
};

// 성공
// 2번째 구현
// 더 빠른 방법을 찾아보기 위해 다시 구현해보았다

/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    const newS = s.trimStart();
    const N = newS.length;
    let answer = newS[0];

    for(let i = 1; i < N; i++){
        const letter = newS[i];

        if(letter === '+' || letter === '-'){
            break;
        }else if(!'0123456789'.includes(letter)){
            break;
        }
        answer += letter;
    }

    answer = +answer;

    if(answer < -(2 ** 31)) return -(2 ** 31);
    else if(answer > 2 ** 31 - 1) return 2 ** 31 - 1;
    else if(isNaN(answer)) return 0;
    return answer;
};