// 성공
// 레벨3인데 쉽게 됐다. 이상허눼...

function solution(s){
    let answer = 0;
    
    for(let i = s.length; i > 0; i--){
        for(let j = 0; j <= s.length - i; j++){
            const curS = s.slice(j, j + i);
            if(checkBalanced(curS)){
                return i;
            }
        }
    }

    return answer;
}

function checkBalanced(check){
    let left = 0;
    let right = check.length - 1;
    let avail = true;
    
    while(left < right){
        if(check[left] !== check[right]){
            avail = false;
            break;
        }
        left++; right--;
    }
    
    return avail;
}