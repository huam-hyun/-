/**
 * 오늘 날짜와 타입 별 유효기간, 개인정보를 통해 유효기간 끝난 번호를 return 하는 함수
 * @param {string} today 
 * @param {string[]} terms 
 * @param {string[]} privacies 
 * @returns 개인정보 수집 유효기간이 끝난 번호를 return해라
 */


// 성공
// type별로 객체를 통해 유효기간 저장
// new Date를 통해 날짜 비교
function solution(today, terms, privacies) {
    let answer = []
    const duration = {}
    
    for (const term of terms) {
        const [type, month] = term.split(' ')
        duration[type] = +month
    }
    
    const getExpireDate = (privacy, type) => {
        let [year, month, day] = privacy.split('.').map(Number)
        
        month += duration[type]
        
        if (month > 12) {
            const extraYear = Math.ceil(month / 12) - 1
            year += extraYear
            month -= 12 * extraYear
        }
        
        return `${year}.${month}.${day}`
    }
    
    for (let i = 0; i < privacies.length; i++) {
        const privacy = privacies[i]

        if (new Date(getExpireDate(...privacy.split(' '))) <= new Date(today)) {
            answer.push(i + 1)
        }
    }
    
    return answer
}