// 성공

// 테스트케이스 4, 7, 9, 10, 11 실패 이유 :
// set1의 item이 set2에 있으면 교집합에 넣었는데 같은 item이 set1에 n개, set2에 m(m < n)개 있으면 교집합엔 item이 m개가 있어야 하는데 n개가 들어가서 실패했다
// 교집합 처리를 수정해서 해결

const str1 = "handshake"
const str2 = "shake hands" 

console.log(solution(str1, str2))

function solution(str1, str2) {
    // 대소문자 상관없으니 소문자로 변환
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let answer = 0;
    let set1 = []
    let set2 = []
    let union = []
    let inter = []

    // 문자열 Set 만들기
    for(let i = 1; i < str1.length; i++){
        if(str1[i-1].match(/[a-z]/i) && str1[i].match(/[a-z]/i)){
            set1.push(str1[i-1] + str1[i])   
        }
    }
    for(let i = 1; i < str2.length; i++){
        if(str2[i-1].match(/[a-z]/i) && str2[i].match(/[a-z]/i)){
            set2.push(str2[i-1] + str2[i])
        }
    }

    console.log(set1)
    console.log(set2)

    // set가 둘 다 공집합이면 65536
    if(set1.length === 0 && set2.length === 0){
        return 65536
    }

    while(set1.length){
        const item = set1.shift()

        // 교집합이면 교집합에 아니면 합집합에
        if(set2.includes(item)){
            inter.push(item)
            union.push(item)
            set2.splice(set2.indexOf(item), 1)
        }else{
            union.push(item)
        }
    }
    union = union.concat(set2)

    answer = (inter.length / union.length) * 65536

    return Math.floor(answer);
}