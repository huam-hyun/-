// 머리 a개, 상의 b개, 하의 c개 일 때 경우의 수
// abc + (ab + bc + ca) + (a + b + c) = (a + 1)(b + 1)(c + 1) - 1

function solution(clothes) {
    let answer = 1;
    const part = {}
    
    for(const cloth of clothes){
        if(!part[cloth[1]]) part[cloth[1]] = 0
        part[cloth[1]]++
    }

    for(const key in part){
        answer *= (part[key] + 1)
    }
    
    return answer - 1;
}


const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
console.log(solution(clothes))