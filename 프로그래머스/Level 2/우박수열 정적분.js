// 성공
// 문제 요구사항을 잘 읽고 구현하면 된다

function solution(k, ranges) {
    let answer = [];
    const collatz = [k];
    const volume = {};
    
    while(k > 1){
        if(k % 2){
            k = k * 3 + 1;
        }else{
            k = Math.floor(k / 2);
        }
        collatz.push(k);
    }
    
    for(let i = 1; i < collatz.length; i++){
        const V = (collatz[i] + collatz[i - 1]) / 2;
        
        volume[i - 1] = V;
    }
    
    ranges.forEach(range => {
        if(range[0] > collatz.length - 1 + range[1]){
            answer.push(-1);
            return
        }
        let V = 0;
        
        for(let i = range[0]; i < collatz.length - 1 + range[1]; i++){
            V += volume[i];
        }
        answer.push(V);
    })
    
    return answer;
}