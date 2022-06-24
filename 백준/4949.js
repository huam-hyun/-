let strings = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( )]) )) ]).
 .
.`
// let input = require('fs').readFileSync('dev/stdin').toString().split('\n')
let input = strings.trim().split('\n')
let consoleText = ''

for(let j = 0; j < input.length; j++){
    let string = input[j]
    let isBalanced = true;
    let stack = []
    for(let i = 0; i < string.length; i++){
        switch(string[i]){
            case '[':
                stack.push(string[i]);
                break;
            case '(':
                stack.push(string[i]);
                break;
            case ']':
                if(stack.pop() !== '['){
                    isBalanced = false;
                    break;
                }else{
                    break;
                }
            case ')':
                if(stack.pop() !== '('){
                    isBalanced = false;
                    break;
                }else{
                    break;
                }
            default:
        }
    }
    if(isBalanced){
        if(stack.length === 0){
            consoleText += 'yes\n'
        }else{
            consoleText += 'no\n'
        }
    }else{
        consoleText += 'no\n'
    }
}

console.log(consoleText)