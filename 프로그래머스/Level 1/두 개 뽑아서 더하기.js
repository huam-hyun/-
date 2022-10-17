function solution(numbers) {
    let answer = [];
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j])
        }
    }
    
    answer.sort((a, b) => {return a - b})
    answer = [...new Set(answer)]
    
    return answer;
}