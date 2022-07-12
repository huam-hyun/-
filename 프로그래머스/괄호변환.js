// 통과
// 틀린 이유 :
// 문제를 제대로 안읽어서 u가 올바른 문자열이 아니면 u를 조건대로 해서 뒤에 붙인다고 생각했는데
// v를 다시 재귀적으로 처리하고 괄호를 붙인다음 그 뒤에 u를 붙이는 거였다

function solution(p) {
    let left = 0
    let right = 0
    let u = ''
    let v = ''

    // 빈 문자열인 경우 빈 문자열 반환
    if(!p.length){
        return ''
    }

    for(let i = 0; i < p.length; i++){
        if(p[i] === '('){
            left++
        }else{
            right++
        }
        if(left === right){
            u = p.slice(0, i + 1)
            v = p.slice(i + 1)
            break
        }
    }

    // u가 올바르지 않은 문자열 이면
    if(checkU(u)){
        let temp = ''

        // u의 처음과 끝을 제거하고 가운데 있는 괄호를 뒤집어준다
        for(let i = 1; i < u.length - 1; i++){
            // 괄호를 뒤집는다
            if(u[i] === '('){
                temp += ')'
            }else{
                temp += '('
            }
        }
        u = temp
        v = '(' + solution(v) + ')'

        return v + u
    }

    return u + solution(v)
}

// 올바르지 않으면 true 반환
function checkU(u){
    if(u[0] === ')'){
        return true
    }

    let needCheck = u.split('')
    let stack = []

    while(needCheck.length){
        let cur = needCheck.shift()
        if(!stack.length && stack[stack.length - 1] !== cur){
            stack.pop()
        }else{
            stack.push(cur)
        }
    }

    return !!stack.length
}

const p = ")("
const p2 = "(()())()"
const p3 = 	"()))((()"

console.log(solution(p))
