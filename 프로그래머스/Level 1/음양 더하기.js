function solution(absolutes, signs) {
    var answer = 123456789;
    
    answer = 0
    
    absolutes.forEach(function(item, index){
        if(signs[index]){
            answer += item
        }else{
            answer -= item
        }
    })
    
    return answer;
}