// 1차 시도 테스트케이스 1~10, 12~15 실패
// 2차 시도 성공

// 틀린 이유
// 역순으로 정렬 -> for문으로 순회하며 i+1 >= citations[i]로 뒀는데
// i+1 <= citations[i]가 맞는 거였다

const citations = [3, 0, 6, 1, 5]

function solution(citations){
    let answer = 0

    citations.sort((a, b)=>{return b - a})

    for(let i = 0; i+1 <=citations[i]; i++){
        answer = i + 1
    }

    return answer
}

console.log(solution(citations))