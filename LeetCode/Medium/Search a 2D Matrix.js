// 성공
// 2차원 배열을 탐색하는 문제
// O(log(m * n)) 속도 제한이 있다
// 이분 탐색으로 해당 속도에 맞게 탐색해주었다

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0, right = matrix.length - 1;
    let row, col;

    while(left < right){
        const mid = Math.ceil(left / 2 + right / 2);

        if(matrix[mid][0] === target) left = right = mid;
        else if(matrix[mid][0] < target) left = mid;
        else right = mid - 1;
    }

    row = left;
    left = 0; right = matrix[0].length - 1;
    
    while(left < right){
        const mid = Math.ceil(left / 2 + right / 2);

        if(matrix[row][mid] === target) left = right = mid;
        else if(matrix[row][mid] < target) left = mid;
        else right = mid - 1;
    }

    col = left;

    if(matrix[row][col] === target) return true;
    else return false;
};