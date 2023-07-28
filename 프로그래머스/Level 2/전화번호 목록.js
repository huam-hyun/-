// 해시 문제
// 등록된 전화번호를 잘라서 해시로 저장해두고
// 마지막에 각 전화번호로 번호가 해시에 저장돼 있는지 확인후
// 있을 경우에 false를 반환하면 된다.

function solution(phone_book) {
    let answer = true
    const dict = {}
    
    phone_book.forEach((phone_number) => {
        for (let i = 1; i < phone_number.length; i++) {
            dict[phone_number.slice(0, i)] = true
        }
    })
    
    phone_book.forEach((phone_number) => {
        if (dict[phone_number]) {
            answer = false
        }
    })
    
    return answer
}