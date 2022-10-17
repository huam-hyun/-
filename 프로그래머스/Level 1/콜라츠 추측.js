// 성공
function solution(num) {
    for(var i = 0; i <= 500; i++){
        if(num === 1){
            return i
        }
        num = num % 2 ? 3 * num + 1 : num / 2
    }
    return i > 500 ? -1 : i
}