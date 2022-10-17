function solution(d, budget) {
    var answer = 0;
    
    d.sort((a,b)=>{return a-b})
    
    d.forEach(function(item){
        if((budget -= item) >= 0){
            answer++
        }
    })
    
    return answer;
}