// 성공
// 재귀를 이용한 풀이법

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    if(s.length <= k) return s;

    let sum = 0;
    let next = '';
    for(let i = 1; i <= s.length; i++){
        sum += +s[i - 1];

        if(i % k === 0 || i === s.length){
            next += sum + '';
            sum = 0;
        }
    }

    return digitSum(next, k);
};