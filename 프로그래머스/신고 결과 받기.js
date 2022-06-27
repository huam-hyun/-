const id_list = ["muzi", "frodo", "apeach", "neo"]
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
const k = 2

function solution(id_list, report, k) {
    let answer = []
    const reporter = {}
    const message = {}
    
    id_list.forEach(e => {
        reporter[e] = []
        message[e] = 0
    })

    // 신고 받은 사람을 키로 신고한 사람을 배열에 저장
    report.forEach(e => {
        const [from, to] = e.split(' ')
        if(!reporter[to].includes(from)){   // 중복 제거
            reporter[to].push(from)
        }
    })

    // 신고 받은 사람의 배열의 길이가 k 이상이면 answer++
    id_list.forEach((e, i) => {
        if(reporter[e].length >= k){
            reporter[e].forEach(e => message[e]++)
        }
    })
    
    return answer = Object.values(message)
}

console.log(solution(id_list, report, k))