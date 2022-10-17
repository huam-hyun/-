function solution(n) {
    var answer = 0;
    let three = ''
    
    while(n > 0){
        three += n % 3
        n = parseInt(n / 3)
    }
    
    // 3진법
    three = three.split('').reverse()
    
    for(let i = 0; i < three.length; i++){
        answer += (+three[i]) * (3 ** i)
    }
    
    
    return answer;
}