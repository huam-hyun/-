const citations = [3, 0, 6, 1, 5]

function solution(citations){
    let answer = 0

    citations.sort((a, b) => {return b - a})

    for(let i = 0; i < citations.length; i++){
        if(citations[i] <= i + 1 && citations[i] >= citations.length - (i + 1)){
            // citations[i]보다 더 인용된 논문수 = index + 1
            // citations[i]보다 덜 인용된 논문 수 = citations.length - (index + 1)
            answer = citations[i]
            break
        }
    }

    return answer
}

console.log(solution(citations))