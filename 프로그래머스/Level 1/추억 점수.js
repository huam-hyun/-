/**
 * 이름과 추억 점수를 담은 배열을 줬을 때 사진의 추억점수의 합을 순서대로 출력해라
 * @param {string[]} name 
 * @param {int[]} yearning 
 * @param {array[string[]]} photo 
 * @returns 추억 점수를 담은 배열
 */

// 성공
// 추억 점수를 score 배열에 저장해 두고 photo에 있는 사람마다 점수를 모두 더해준 뒤 answer에 push한다
function solution(name, yearning, photo) {
    const answer = []
    const score = {}
    
    for(let i = 0; i < name.length; i++) {
        score[name[i]] = yearning[i]
    }
    
    for(const array of photo) {
        const sum = array.reduce((p, c) => p + (score[c] || 0), 0)
        answer.push(sum)
    }
    
    return answer
}