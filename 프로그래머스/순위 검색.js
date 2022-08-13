// 테스트 케이스 성공, 효율성 테스트 실패
// 찾아본 결과 이진탐색과 해시를 통해 푸는 문제다
// 해시를 공부한 후 다시 풀어보기

// 2차 시도 성공
// info에 있는 내용들을 점수를 제외하고 key로 사용, 점수를 해당 key의 배열로 저장 + 오름차순 정렬
// query에서 점수를 제외한 나머지 조건들로 key를 비교, 조건에 해당하면 해당 key를 가지고 배열에서 기준 점수보다 높은 값들의 갯수를 셈
// filter로 하면 O(n)으로 시간 초과됨. 이분 탐색으로 O(log2 N)시간을 줄임

const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]

// 2차 시도 코드
function solution(info, query){
    let answer = Array.from(query).fill(0)
    const infos = {}
    
    info.forEach(e => {
        let infoArray = e.split(' ')
        let score = +infoArray.pop()
        const infoString = infoArray.join(' ')
        !infos[infoString] ? infos[infoString] = [score] : infos[infoString].push(score)
    })
    for(const key in infos){infos[key].sort((a, b) => a - b)}
    
    query.forEach((e, i) =>{
        let condition = e.replace(/\sand\s/g, ' ').split(' ').filter(e => e !== '-')
        const minScore = +condition.pop()
        
        for(const key in infos){
            let avail = true
            for(let i = 0; i < condition.length; i++){
                if(!key.includes(condition[i])){
                    avail = false
                    break
                }
            }
            if(avail){
                let left = 0
                let right = infos[key].length - 1
                
                while(left <= right){
                    const mid = Math.floor((left + right) / 2)
                    
                    if(infos[key][mid] === minScore){
                        left = mid
                        break
                    }else if(infos[key][mid] < minScore){
                        left = mid + 1
                    }else{
                        right = mid - 1
                    }
                }
                while(infos[key][left - 1] >= minScore || left > infos[key].length){
                    left--
                }
                answer[i] += infos[key].length - left
            }
        }    
    })
    return answer
}

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