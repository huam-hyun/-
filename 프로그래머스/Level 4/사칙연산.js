// 다른 사람의 풀이를 참조했습니다
// 최댓값 = 최댓값 + 최댓값
// 최솟값 = 최댓값 - 최솟값
// 최대, 최소를 모두 알아야하기 때문에 MAX_DP, MIN_DP 사용
function solution(arr) {
    const n = Math.ceil(arr.length / 2);
    let MAX_DP = new Array(n).fill(0).map(e => new Array(n).fill(-Infinity));   // MAX_DP[i][j] = i에서 j연산의 최댓값
    let MIN_DP = new Array(n).fill(0).map(e => new Array(n).fill(Infinity));    // MIN_DP[i][j] = i에서 j연산의 최솟값
    let nums = [];  // 숫자
    let ops = [];   // 연산자
    
    for(let i = 0; i < arr.length; i++){
       if(i % 2){
           ops.push(arr[i]);
       }else{
           nums.push(arr[i]);
       }
    }
    
    // i와 j 수의 차이 gap
    for(let gap = 0; gap < n; gap++){
        // i + gap 이 숫자의 갯수를 넘지 않도록
        for(let i = 0; i < n - gap; i++){
            const j = i + gap;
            
            if(gap === 0){
                MAX_DP[i][i] = MIN_DP[i][i] = +nums[i];
            }else{
                for(let k = i; k < j; k++){
                    switch(ops[k]){
                        case '+':
                            MAX_DP[i][j] = Math.max(MAX_DP[i][j], MAX_DP[i][k] + MAX_DP[k+1][j]);   // 최댓값 = 최댓값 + 최댓값
                            MIN_DP[i][j] = Math.min(MIN_DP[i][j], MIN_DP[i][k] + MIN_DP[k+1][j]);   // 최솟값 = 최솟값 + 최솟값
                            break;
                        case '-':
                            MAX_DP[i][j] = Math.max(MAX_DP[i][j], MAX_DP[i][k] - MIN_DP[k+1][j]);   // 최댓값 = 최댓값 - 최솟값
                            MIN_DP[i][j] = Math.min(MIN_DP[i][j], MIN_DP[i][k] - MAX_DP[k+1][j]);   // 최솟값 = 최솟값 - 최댓값
                            break;
                    }
                }
            }
        }
    }

    return MAX_DP[0][n-1];
}