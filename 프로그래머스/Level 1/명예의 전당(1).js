// 성공
function solution(k, score) {
    let answer = [];
    let honor = [];
    
    for(let i = 0; i < score.length; i++){
        if(honor.length < k){
            honor.push(score[i]);
        }else if(honor.some(e => e <= score[i])){
            honor.pop();
            honor.push(score[i]);
        }
        
        honor.sort((a, b) => b - a);
        answer.push(honor.at(-1));
    }
    
    return answer;
}