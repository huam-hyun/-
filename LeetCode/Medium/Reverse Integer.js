// 성공
// 수를 string으로 바꿔 거꾸로 만들고 범위보다 크면 0으로 만들어줬다

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    const minus = x < 0 ? -1 : 1;
    const answer = Math.abs(x).toString().split('').reverse().join('');

    return (+answer > 2 ** 31 - 1 ? 0 : +answer) * minus;
};