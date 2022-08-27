// 성공

// 기본적인 행렬의 곱셈
// 앞 행렬의 행, 뒷 행렬의 열을 곱하여 더한다음 결과 행렬의 i행 j열에 더한다.

function solution(arr1, arr2) {
    let answer = Array.from(new Array(arr1.length)).map(e => new Array(arr2[0].length).fill(0))
       
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2[0].length; j++){
            for(let k = 0; k < arr1[0].length; k++){
                answer[i][j] += arr1[i][k] * arr2[k][j] 
            }
        }
    }    
    
    return answer;
}