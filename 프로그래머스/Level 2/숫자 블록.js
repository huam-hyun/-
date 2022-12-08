// 성공
// 자기 자신보다 작은 가장 큰 약수를 찾는 문제이다
// 블록이 10,000,000 까지밖에 없기 때문에 10,000,000 이하 중 가장 큰 약수를 찾아야 한다
// 이 부분을 간과하면 효율성에서 실패가 발생한다

function solution(begin, end) {
    // 소수는 1, 나머지 수는 가장 큰 약수를 값으로 가진다
    let answer = [];
    
    for(let i = begin; i <= end; i++){
        answer.push(getNum(i));
    }
    
    return answer;
}

function getNum(num){
    if(num === 1) return 0;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0 && num / i <= 10000000) return num / i;
    }
    return 1;
}