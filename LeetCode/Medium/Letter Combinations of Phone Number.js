// 성공
// 모든 알파벳 조합을 구하면 되는 문제
// 최대 digits길이가 4였기 때문에 중첩 for문으로도 느리지 않겠다고 생각했다
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length < 1) return [];

    const map = {
        2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl',
        6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
    };
    let answer = [];

    for(let i = 0; i < digits.length; i++){
        const temp = [];
        const alphabet = map[digits[i]];
        
        if(answer.length < 1){
            answer = alphabet.split('');
            continue;
        }

        for(let j = 0; j < alphabet.length; j++){
            for(let k = 0; k < answer.length; k++){
                temp.push(`${answer[k]}${alphabet[j]}`);
            }
        }

        answer = temp;
    }

    return answer;
};