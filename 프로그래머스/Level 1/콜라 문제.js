/**
 * a개의 빈병을 줬을 때 b개의 콜라를 주는 가게가 있다.
 * n개의 빈병이 있을 때 받을 수 있는 총 콜라의 개수를 구해라
 * @param {int} a 
 * @param {int} b 
 * @param {int} n 
 * @returns 돌려받은 총 콜라병의 개수
 */

// 성공
// 현재 개수를 a로 나눴을 때 나머지가 여분의 빈병 수
// 현재 개수를 a로 나눴을 때 몫 * b가 받을 콜라병 수
// 다음 개수 = 돌려받은 콜라병 수 + 빈병 수
function solution(a, b, n) {
    let answer = 0
    
    while (n >= a) {
        const remain = n % a
        const payback = Math.floor(n / a) * b
        
        answer += payback
        n = payback + remain
    }
    
    return answer
}