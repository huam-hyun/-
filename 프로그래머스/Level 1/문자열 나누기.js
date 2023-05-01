/**
 * 왼쪽에서 문자열을 읽으면서 첫 글자를 x라고 했을 때, x인 글자와 x가 아닌 글자의 개수가 같으면 하나의 문자열을 자른다.
 * 만약 문자열이 끝났다면 규칙에 상관없이 문자열을 자른다
 * 해당 규책을 적용했을 때 s를 몇 개의 문자열로 나눌 수 있는지 구해라
 * @param {string} s 
 * @returns 규칙을 적용하여 가능한 문자열 개수 반환
 */

// 성공
// 첫 글자 start, 첫 글자와 같은 글자와 다른 글자를 센다
// start가 비었을 경우 문자열이 잘려 첫 글자일 때이다
// 해당 글자를 start로 정하고 같은 글자를 +1
// 글자가 start일 경우 nums.start++ 아닐 경우 nums.diff++
// 추가 후 nums.start와 nums.diff를 비교해 같을 경우 문자열을 자른다
function solution(s) {
    let answer = 0, start = ''
    const nums = {
        diff: 0,
        start: 0,
    }
    
    for (let i = 0; i < s.length; i++) {
        if (start === '') {
            start = s[i]
            nums.start = 1
        } else if(s[i] === start) {
            nums.start++
        } else {
            nums.diff++
        }
        
        if (nums.start === nums.diff) {
            start = ''
            nums.diff = 0
            nums.start = 0
            answer++
        }
    }
    
    if (nums.diff || nums.start) answer++
    
    return answer
}