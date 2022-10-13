// 질문하기를 참고하여 성공함

function solution(a) {
    let answer = 1;
    let left = 0;
    let right = a.length - 1;
    let leftMin = a[left];
    let rightMin = a[right];
    
    for(let i = 0; i < a.length + 1; i++){
        const bigger = leftMin > rightMin ? 'left' : 'right';
        
        switch(bigger){
            case 'left':
                const lNext = a[++left];
                if(lNext < leftMin){
                    leftMin = lNext;
                    answer++;
                }
                break;
            case 'right':
                const rNext = a[--right];
                if(rNext < rightMin){
                    rightMin = rNext;
                    answer++;
                }
                break;
        }
    }
    
    return answer;
}