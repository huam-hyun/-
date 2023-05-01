/**
 * 'aya', 'ye', 'woo', 'ma'를 발음 할수 있지만 같은 단어를 연속으로 발음하진 못한다
 * 그랬을 때 babbling에서 발음 가능한 개수를 출력해라
 * @param {string[]} babbling 
 * @returns 발음 할수 있는 babbling의 개수 출력
 */

// 성공
// 같은 단어가 2개 이상이면 불가능 하니 문자열을 비운다
// 이외의 경우 단어를 모두 '*'로 교체한다
// 그냥 ''로 할 경우 붙여졌을 때 다른 단어가 만들어 질 수 있기 때문에 '*'로 치환한다
function solution(babbling) {
    const avail = ['aya', 'ye', 'woo', 'ma']
    let answer = 0

    for (const word of avail) {
        for (let i = 0; i < babbling.length; i++) {
            const bab = babbling[i]
            
            if (bab === '') continue
            else if (bab.includes(word.repeat(2))) {
                babbling[i] = ''
                continue
            } else {
                babbling[i] = bab.replaceAll(word, '*')
            }
        }
    }
    for (const bab of babbling) {
        if (bab === '' || bab.match(/[^*]/)) continue
        answer++
    }
    return answer
}