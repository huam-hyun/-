/**
 * 단어가 순서대로 쌓여있는 카드 뭉치 2개에서 goal 문장을 완성할 수 있는지를 반환
 * 단 카드뭉치에서 단어를 1개이상 쓰지 않으면 넘어갈 수 없다
 * 대신 같은 단어는 들어있지 않다
 * @param {string[]} cards1 
 * @param {string[]} cards2 
 * @param {string[]} goal 
 * @returns 단어 완성 가능 여부
 */

// 성공
// 투포인터를 사용하여 해결
function solution(cards1, cards2, goal) {
    let lp = 0, rp = 0
    
    for (const word of goal) {
        if (cards1[lp] === word) lp++
        else if (cards2[rp] === word) rp++
        else return 'No'
    }
    
    return 'Yes'
}