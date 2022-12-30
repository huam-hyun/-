const input = '()()[]';
const stack = [];
let answer = 0;
let temp = 1;

for(let i = 0; i < input.length; i++){
    const cur = input[i];

    if(cur === '('){
        stack.push(cur);
        temp *= 2;
    }else if(cur === '['){
        stack.push(cur);
        temp *= 3;
    }else if(cur === ')'){
        if(stack.length === 0 || stack[stack.length - 1] === '['){
            answer = 0;
            break;
        }else if(stack[stack.length - 1] === '('){
            answer += temp;
        }
        stack.pop();
        temp = Math.floor(temp / 2);
    }else{
        if(stack.length === 0 || stack[stack.length - 1] === '('){
            answer = 0;
            break;
        }else if(stack[stack.length - 1] === '['){
            answer += temp;
        }
        stack.pop();
        temp = Math.floor(temp / 3);
    }
}

console.log(answer);