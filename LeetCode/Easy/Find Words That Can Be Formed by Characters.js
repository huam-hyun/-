// 성공
// 첫 시도에는 O(n^2)으로 풀어서 시간이 굉장히 느렸다
// 시간이 빠른 사람들의 방법을 참조해서 코드를 만들었다
// word를 chars와 대조해서 있으면 chars의 글자를 지운다
// 만약 word의 글자가 없다면 재배치 할수 없는 문자열이고, 모두 있다면 재배치 할수 있는 문자열이다

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let answer = 0;

    words.forEach(word => {
        let temp = chars;
        const _word = word.split('');

        const avail = _word.every(e => {
            if(temp.includes(e)){
                temp = temp.replace(e, '');
                return true;
            }else{
                return false;
            }
        });

        if(avail) answer += word.length;
    })

    return answer;
};