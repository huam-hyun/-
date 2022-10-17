// 성공
// 간단한 구현 문제였다.

function solution(n, t, m, p) {
    let answer = '';
    let string = '';
    let i = 0;
    
    while(string.length < m * t){
        string += i.toString(n);
        i++;
    }
    
    for(let i = 0; i < string.length; i++){
        if(i % m + 1 === p){
            answer += string[i];
        }
    }
    
    return answer.slice(0,t).toUpperCase();
}