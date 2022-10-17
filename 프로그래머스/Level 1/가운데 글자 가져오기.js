function solution(s) {
    let answer = '';
    const length = s.length
    
    if(length % 2 === 0){
        answer += s[length / 2 - 1]
        answer += s[length / 2]
    }else{
        answer += s[Math.floor(length / 2)]
    }
    
    
    return answer;
}