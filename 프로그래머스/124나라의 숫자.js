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

    // 3진법 거꾸로 쓴 글자
    string = string.split('')

    for(let i = 0; i < string.length; i++){
        if(string[string.length-1] === '0') break
        if(string[i] <= 0){
            string[i + 1]--
            string[i] = 3
            answer += string[i]
        }
    }
    
    console.log(string)

    

    return answer;
}

console.log(solution(3))