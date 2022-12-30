// 성공
// Beats 81.24% / 27.73%

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for(let i = 0; i < s.length; i++){
        if('({['.includes(s[i])){
            stack.push(s[i]);
        }else if(isValid(s[i], stack.at(-1))){
            stack.pop();
        }else{
            return false;
        }
    }

    return stack.length === 0 ? true : false;

    function isValid(a, b){
        if(a === ')') return b === '(' ? true : false;
        if(a === '}') return b === '{' ? true : false;
        if(a === ']') return b === '[' ? true : false;
    }
};