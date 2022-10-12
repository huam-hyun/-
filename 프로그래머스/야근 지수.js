// 실패
// 최댓값에서 1을 계속 빼주어야 하는데 아닌 곳에서도 빼서 제대로 답이 안나왔다
// 계속해서 최댓값을 찾을 때 시간을 적게 쓰도록 하면 통과할 것 같다.

// 2차 시도
// 효율성 2 실패, 1도 3.4초로 느리다
// indexOf로 최댓값들만 먼저 -1되게 했는데 너무 느리다.

// 3차 시도
// 성공
// while문 안에 for문을 포함시켜서 indexOf로 찾은 최댓값부터 한번에 1씩 뺐다.
// 계속해서 indexOf를 찾을 때보다 시간이 빨라졌다

function solution(n, works) {
    works.sort((a, b) => a - b);
    let sum = works.reduce((p, c) => p + c, 0);
    let max = works.at(-1);
    let remain = n;
    
    if(sum <= n){
        return 0;
    }
    
    while(remain > 0){
        let index = works.indexOf(max);
        const length = works.length - index;
        for(let i = index; i < index + (remain > length ? length : remain); i++){
            works[i]--;
        }
        remain -= length;
        max = works.at(-1);
    }
    
    return works.reduce((p, c) => p + c ** 2, 0);
}

// 1차
function solution(n, works) {
    works.sort((a, b) => b - a);
    let sum = works.reduce((p, c) => p + c, 0);
    let remain = n;
    
    if(sum <= n){
        return 0;
    }
    
    while(remain > 0){
        if(!works.includes(0) && remain >= works.length){
            works = works.map(e => e - 1);
            remain -= works.length;
        }else{
            for(let i = 0; i < (works.length < remain ? works.length : remain); i++){
                if(works[i] === 0) break;
                works[i]--;
                remain--;
            }
        }
    }
    
    return works.reduce((p, c) => p + c ** 2, 0);
}

// 2차
function solution(n, works) {
    works.sort((a, b) => a - b);
    let sum = works.reduce((p, c) => p + c, 0);
    let max = works.at(-1);
    let remain = n;
    
    if(sum <= n){
        return 0;
    }
    
    while(remain > 0){
        let index = works.indexOf(max);
        
        works[index]--;
        remain--;
        
        if(works.indexOf(max) < 0){
            max = works.at(-1);
        }
    }
    
    return works.reduce((p, c) => p + c ** 2, 0);
}

