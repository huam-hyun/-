// 정답
// 다 해놓고 isPrime함수에 오타 때문에 삽질했다

function solution(n, k) {
    let answer = 0;
    
    const temp = n.toString(k).split(/0+/);
    
    temp.forEach(e => {
        if(e.includes('0')){
            return;
        }
        if(isPrime(Number(e))){
            answer++;
        }
    })
    
    return answer;
}

const isPrime = (num) => {
    if(num < 2){
        return false;
    }else if(num === 2){
        return true;
    }
    
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}