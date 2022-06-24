function solution(s)
{
    let answer = 0;
    let letters = s.split('')
    let stack = []
    let index = 0

    while(true){
        stack.push(letters[index])

        if(stack.length >= 2){
            let letter1 = stack.pop()
            let letter2 = stack.pop()

            if(letter1 === letter2){

            }else{
                stack.push(letter2)
                stack.push(letter1)
            }
        }

        index++
        if(index === letters.length)    break;
    }

    return answer = stack.length ? 0 : 1
}

console.log(solution('cdcd'))