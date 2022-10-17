// AAAAA(5) -> AAAAE(6) : +1
// AAAA(4) -> AAAE(10)  : +6
// AAA(3) -> AAE(34)    : +31
// 여기까지 찾아본 결과 나온 결론
// 다음 자리 바꾸는데 걸리는 수 = 이전 수 * 5 + 1

// AA(2) -> AE(158)     : +156
// A(1) -> E(782)       : +781

function solution(word){
    const length = word.length
    let answer = length
    let numForNext = 781
    const wordMap = {
        A : 0,
        E : 1,
        I : 2,
        O : 3,
        U : 4
    }

    for(let i = 0; i < length; i++){
        answer += numForNext * wordMap[word[i]]
        numForNext = (numForNext - 1) / 5
    }

    return answer
}

console.log(solution('AAE'))