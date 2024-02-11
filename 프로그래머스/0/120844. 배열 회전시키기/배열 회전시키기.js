function solution(numbers, direction) {
    const answer = numbers.slice(1, -1)
    if (direction === 'right') {
        answer.unshift(numbers.at(-1), numbers[0])    
    } else {
        answer.push(numbers.at(-1), numbers[0])
    }
    return answer
}