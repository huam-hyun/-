function solution(s) {
    var answer = 0;
    
    answer = s.replace(/zero/gi, '0')
    s = answer.replace(/one/gi, '1')
    answer = s.replace(/two/g, '2')
    s = answer.replace(/three/g, '3')
    answer = s.replace(/four/g, '4')
    s = answer.replace(/five/g, '5')
    answer = s.replace(/six/g, '6')
    s = answer.replace(/seven/g, '7')
    answer = s.replace(/eight/g, '8')
    s = answer.replace(/nine/g, '9')    
    answer = s
       
    return parseInt(answer);
}