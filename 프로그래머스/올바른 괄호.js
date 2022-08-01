// 1차 성공

function solution(s){
    if(s[0] === ')'){
        return false
    }
    
    let cnt = 0
    for(let i = 0; i < s.length; i++){
        s[i] === '(' ? cnt++ : cnt--
        if(cnt < 0){
            return false
        }
    }
    
    return cnt === 0 ? true : false
}