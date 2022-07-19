function solution(s) {
    let answer = 0;
    
    for(let i = 0; i < s.length; i++){
        s = s.slice(1, s.length) + s[0]
        if(checkS(s)){
            answer++
        }
    }
    
    return answer;
}

function checkS(s){
    // 괄호 체크하는 스택
    let stack = []

    for(let i = 0; i < s.length; i++){
        if(s[i].match(/[({[]/)){
            stack.push(s[i])
        }else{
            switch(s[i]){
                case ')':
                    if(stack[stack.length-1] === '('){
                        stack.pop()
                    }else{
                        stack.push(s[i])
                    }
                    break
                case '}':
                    if(stack[stack.length-1] === '{'){
                        stack.pop()
                    }else{
                        stack.push(s[i])
                    }
                    break
                case ']':
                    if(stack[stack.length-1] === '['){
                        stack.pop()
                    }else{
                        stack.push(s[i])
                    }
                    break
            }
        }
    }
    if(stack.length){
        return false
    }
    return true
}

const s = "}]()[{"

console.log(solution(s))