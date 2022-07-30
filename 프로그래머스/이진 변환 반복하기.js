// 성공

function solution(s) {
    let answer = [];
    let zeros = 0
    let transform = 0
    
    while(s !== '1'){
        transform++
        if(s.includes('0')){
            zeros += s.match(/0/g).length
        }
        
        s = s.replace(/0/g, '')
        s = s.length.toString(2)
    }
    
    return [transform, zeros];
}