// 성공
function solution(number) {
    let answer = 0;
    const numLength = number.length;
    
    for(let i = 0; i < numLength; i++){
        const first = number[i];
        for(let j = 0; j < numLength && j !== i; j++){
            const second = number[j];
            for(let k = 0; k < numLength && k !== j; k++){
                if(first + second + number[k] === 0) answer++;
            }
        }
    }
    
    return answer;
}