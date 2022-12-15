const input = '())([]';
const stack = [];
let answer = ''

for(let i = 0; i < input.length; i++){
    const cur = input[i];

    if(cur === '(' || cur === '['){
        stack.push(cur);
        answer += cur === '(' ? '+2*(' : '+3*('
    }else{
        if(stack[stack.length - 1] === '(' && cur === ')'){
            stack.pop();
            answer += ')';
        }else if(stack[stack.length - 1] === '[' && cur === ']'){
            stack.pop();
            answer += ')';
        }else if(cur === ')' || cur === ']'){
            stack.push(cur);
        }
    }
}

if(stack.length) answer = '0';

while(answer.includes('()')){
    answer = answer.replace('()', '1');
}

console.log(eval(answer));