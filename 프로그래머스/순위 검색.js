// 테스트 케이스 성공, 효율성 테스트 실패
// 찾아본 결과 이진탐색과 해시를 통해 푸는 문제다
// 해시를 공부한 후 다시 풀어보기

const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]

function solution(info, query){
    let answer = []

    for(let i = 0; i < query.length; i++){
        const score = +query[i].split(' ').pop()
        let regExp = query[i].replace(/\sand\s/g, '\\s').replace(/-/g, '\\D+')
        regExp = regExp.replace(/\s\d+/, '')

        console.log(regExp)

        let temp = info.filter(e => e.match(new RegExp(regExp))).filter(e => +e.split(' ').pop() >= score)
        answer.push(temp.length)
    }

    return answer
}

console.log(solution(info, query))