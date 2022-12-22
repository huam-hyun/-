// 성공
// \/\/ 형태로 그림을 다시 그려서 패턴을 파악했다
// 1. 지그재그로 나타냈을 때 첫 줄과 마지막 줄은 항상 같은 간격으로 이어져 있다
// 2. 그 이외의 줄은 (첫 줄의 간격 - 이번 글자와 다음 글자의 간격)의 간격으로 이어져 있다
// 첫 줄과 마지막 줄의 간격 max, 그 이외의 줄 간격은 max - i * 2로 시작

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if(numRows === 1) return s;

    const max = 2 * numRows - 2;
    let answer = '';

    for(let i = 0; i < numRows; i++){
        if(i === 0 || i === numRows - 1){
            for(let j = i; j < s.length; j += max){
                answer += s[j];
            }
        }else{
            let move = 2 * i;

            for(let j = i; j < s.length; j += move){
                answer += s[j];
                move = max - move;
            }
        }
    }

    return answer;
};