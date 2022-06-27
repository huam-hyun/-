// 미완
const str1 = 'FRANCE'
const str2 = 'french'

console.log(solution(str1, str2))

function solution(str1, str2) {
    let answer = 0;
    let set1 = []
    let set2 = []

    // 문자열 Set 만들기
    for(let i = 1; i < str1.length; i++){
        if(str1[i-1].match(/[^a-zA-z]/) || str1[i].match(/[^a-zA-z]/)){
            continue
        }
        set1.push(str1[i-1] + str1[i])
    }
    for(let i = 1; i < str2.length; i++){
        if(str2[i-1].match(/[^a-zA-z]/) || str2[i].match(/[^a-zA-z]/)){
            continue
        }
        set2.push(str2[i-1] + str2[i])
    }

    console.log(set1)
    console.log(set2)

    return answer;
}