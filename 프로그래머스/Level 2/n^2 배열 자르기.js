// 1차 성공

function solution(n, left, right) {
    let answer = [];
    
    for(let i = left; i <= right; i++){
        const row = Math.floor(i / n)
        const col = i % n
        
        answer.push(col < row ? row + 1 : col + 1)
    }
    
    return answer;
}