function solution(dartResult) {
    let answer = 0;
    let dart = dartResult.match(/\d{1,2}[SDT][#*]?/g)
    let ops = []
    
    while(dart.length){
        let score = dart.shift()
        let [num, option] = score.split(/[SDT]/)
        num = +num
        
        if(score.match(/[D]/)){
            num = num ** 2
        }else if(score.match(/[T]/)){
            num = num ** 3
        }

        if(option === '#'){
            num *= -1
            ops.push(num)
        }else if(option === '*'){
            if(ops.length > 0){
                ops[ops.length - 1] *= 2
                ops.push(num * 2)
            }else{
                ops.push(num * 2)
            }
        }else{
            ops.push(num)
        }
    }
    
    answer = ops.reduce((pre, cur)=> pre + cur, 0)
    
    return answer;
}