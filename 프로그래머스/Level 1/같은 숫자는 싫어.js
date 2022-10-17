const arr = [1,1,3,3,0,1,1]

function solution(arr)
{
    let answer = [];

    for(let i = 0; i < arr.length; i++){
        if(answer[answer.length - 1] !== arr[i]){
            answer.push(arr[i])
        }
    }
    
    return answer;
}

console.log(solution(arr))