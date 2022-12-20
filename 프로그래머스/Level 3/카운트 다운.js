function solution(target) {
    let num = 0;
    let bull = 0;
    let score = target;
    
    // 최소 num 구함
    while(score){
        if(score >= 60){
            score -= 60;
        }else if(score > 40){
            if(score % 3 === 0) score = 0;
            else score %= 3;
        }else{
            if(score % 2 === 0 || score % 3 === 0) score = 0;
            else if(score > 20) score %= 3;
            else{
                score = 0;
            }
        }
        num++;
    }

    // bull/single i개로 가능한지 체크
    for(let i = num; i >= 0; i--){
        score = target;
        bull = i;
        
        while(bull){
            if(score >= 50) score -= 50;
            else if(score > 20){
                if((score - 20) % 3 !== 0 && (score - 20) % 2 !== 0) score -= 19;
                else score -= 20;
            }
            else score = 0;

            bull--;
        }
        
        // single / bull i개 제외하고 나머지로 score 만들 수 있으면
        if(availNum(num - i, score)) return [num, i];
    }
    
    return [num, bull];
}

function availNum(num, score){
    while(num){
        if(score === 1) return false;
        
        if(score >= 60){
            score -= 60;
        }else if(score > 40){
            if(score % 3 === 0) score = 0;
            else score %= 3;
        }else{
            if(score % 2 === 0 || score % 3 === 0) score = 0;
            else score = 3;
        }
        num--;
    }
    
    return !score;
}

let except = [];
for(let i = 1; i <= 100; i++){
    if(i > 30){
        if((i - 20) % 2 && (i - 20) % 3){
            except.push(i);
        }
    }
}

except.forEach(e => {
    console.log(e, solution(e))
})