// 테스트 성공
// 효율성 테스트 1, 2, 5 실패

// 2차시도 성공

// 1차 시도
function solution(n) {
    let answer = ''
    const numberMapping = {
        1: '1',
        2: '2',
        3: '4'
    }
    let string = ''
    
    while(n > 0){   // 3진법
        string += (n % 3)
        n = parseInt(n / 3)
    }

    // 3진법 수
    string = string.split('')
    let length = string.length

    string.forEach((e, i) => {
        if(e <= 0){
            if(i + 1 === length){
                return
            }
            string[i+1]--
            string[i] = +string[i] + 3
        }
    })
    
    string.reverse()
    if(string[0] == 0){
        string.splice(0, 1)
        length--
    }

    for(let i = 0; i < length; i++){
        answer += numberMapping[string[i]]
    }

    return answer;
}

// 2차 시도
function solution2(n){
    let answer = ''

    function nextNum(n){
        if(n <= 3){
            return n.toString()
        }
        let p = n - 1

        let next = Math.floor(p / 3)
        let remain = p % 3 + 1

        return nextNum(next) + remain
    }

    answer = nextNum(n)

    return answer.replace(/3/g, '4')
}

for(let i = 152 ; i < 156; i ++){
    console.log(solution2(i))
}