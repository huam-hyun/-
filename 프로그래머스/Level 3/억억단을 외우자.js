// 2차 시도 성공
// 약수의 갯수를 구하는 것은 어렵지 않았는데 최댓값 구하는 부분을 참고했다

// 1차 시도 실패, 테스트케이스 9, 10 시간초과
// 수학적으로 접근했는데 그냥 약수의 갯수를 통으로 못구하면 통과가 안된다고 한다

function solution(e, starts) {
    let divisor = new Array(e + 1).fill(0);
    let maxArr = new Array(e + 1).fill(e);
    
    // 약수의 갯수를 구한다
    for(let i = 1; i <= e; i++) {
        for(let j = i; j <= e; j += i) {
            divisor[j] += 1;
        }
    }
    
    // maxArr는 최댓값의 수를 저장한다
    for(let i = e - 1; i > 0; i--) {
        // 약수의 갯수가 이전 수(자신 + 1)보다 클 경우
        if(divisor[i] >= divisor[maxArr[i+1]]) {
            // 자신의 약수의 갯수를 저장
            maxArr[i] = i;
        } else {
            // 자신의 갯수가 더 적으면 이전 수의 약수의 갯수 저장
            maxArr[i] = maxArr[i+1];
        }
    }

    return starts.map(e => maxArr[e]);
}

//     const nums = {};
//     const min = starts.reduce((p, c) => p > c ? c : p, Infinity);
    
//     for(let i = 1; i < min ** 0.5; i++){
//         for(let j = Math.ceil(min / i); j <= e / i; j++) nums[i * j] = nums[i * j] + 2 || 2;
//     }
//     for(let i = Math.ceil(min ** 0.5); i <= e / i; i++){
//         for(let j = i; j <= e / i; j++) nums[i * j] = nums[i * j] + 2 || 2;
//     }
//     for(let i = 1; i <= e ** 0.5; i++){
//         nums[i ** 2] -= 1;
//     }
    
//     for(let i = 0; i < starts.length; i++){
//         let max = 0;
//         for(let j = starts[i]; j <= e; j++){
//             if(nums[j] > max){
//                 answer[i] = j;
//                 max = nums[j];
//             }
//         }
//     }