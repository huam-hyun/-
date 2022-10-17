// 성공
function solution(arr1, arr2) {
    var answer = Array.from(new Array(arr1.length)).map(e => new Array(arr1[0].length))
    
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    
    return answer;
}