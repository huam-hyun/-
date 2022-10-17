function solution(n,a,b)
{
    let answer = 1;

    while(true){
        if(a % 2 === 0 && a - b === 1){
            break
        }else if(a % 2 === 1 && b - a === 1){
            break
        }else{
            a = Math.ceil(a / 2)
            b = Math.ceil(b / 2)
            answer++
        }
    }

    return answer;
}

console.log(solution(8, 4, 7))