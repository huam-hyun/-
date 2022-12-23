// 성공
// 패턴 p를 내가 찾고자 하는 정규 표현식으로 바꿔서 결과를 return해 주었다
// 다른 사람들의 풀이를 보니 dp를 이용한 풀이를 사용하면 더 빠르게 풀 수 있었다

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    const pattern = p.replace(/[\D]\*/g, e => e === '.*' ? '.{0,}' : `[${e.split('')[0]}]{0,}`);
    const regexp = new RegExp(`^${pattern}$`);

    return regexp.test(s);
};