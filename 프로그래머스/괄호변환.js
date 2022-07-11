// 프로그래머스 내부 오류로 확인 불가

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
            v = p.slice(i + 1, p.length)
            break
        }
    }

    if(checkU(u)){
        if(u.length === 2){
            u = "()"
        }else{
            let temp = ''
            for(let i = 1; i < u.length - 1; i++){
                if(u[i] === '('){
                    temp += ')'
                }else{
                    temp += '('
                }
            }
            u = '(' + temp + ')'
        }
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

console.log(solution(p2))
