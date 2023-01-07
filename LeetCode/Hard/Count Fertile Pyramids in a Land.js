// 성공
/* 
    문제 : M * N 이차원 배열 안에 몇 개의 피라미드가 있는지 세어라

    forwardPyramids(i, j) = (i, j) 좌표에서 아랫 방향의 피라미드 개수를 반환하는 함수
    reversePyramids(i, j) = (i, j) 좌표에서 윗 방향의 피라미드 개수를 반환하는 함수

    forwardPyramids는 조건을 만족할 경우 forwardPyramids(i + 1, j - 1), forwardPyramids(i + 1, j + 1)을 재귀적으로 호출한다
    reversePyramids는 조건을 만족할 경우 reversePyramids(i - 1, j - 1), reversePyramids(i - 1, j + 1)을 재귀적으로 호출한다

    재귀 호출의 경우 같은 조건을 여러번 연산하게 되어 시간이 오래 걸리게 된다
    그래서 연산이 완료된 좌표는 피라미드 갯수를 저장해 둘 변수를 하나 만들었다
    pyramids[0]은 아랫 방향 피라미드, pyramids[1]은 윗 방향 피라미드 개수를 저장한다

    forwardPyramids(i, j)는 pyramids[0][i][j]를 반환한다. 없을 경우 재귀 호출을 하여 값을 얻어낸다.
    reversePyramids(i, j)는 pyramids[1][i][j]를 반환한다. 없을 경우 재귀 호출을 하여 값을 얻어낸다.

    forwardPyramids는 첫째줄부터, reverwePyramids는 마지막줄부터 실행하여 answer값에 더해준다
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPyramids = function(grid) {
    const M = grid.length, N = grid[0].length;
    const pyramids = [0, 0].map(e => new Array(M).fill(0).map(v => new Array(N).fill(-1)));
    let answer = 0;

    for(let i = 0; i < M; i++){
        for(let j = 1; j < N - 1; j++){
            answer += forwardPyramids(i, j);
        }
    }

    for(let i = M - 1; i > -1; i--){
        for(let j = 1; j < N - 1; j++){
            answer += reversePyramids(i, j);
        }
    }

    return answer;

    function forwardPyramids(row, col){
        if(pyramids[0][row][col] !== -1) return pyramids[0][row][col];
        if(row + 1 >= M || col + 1 >= N || col - 1 < 0) return pyramids[0][row][col] = 0;
        if([grid[row][col], grid[row + 1][col - 1], grid[row + 1][col], grid[row + 1][col + 1]].includes(0)){
            return pyramids[0][row][col] = 0;
        }

        pyramids[0][row + 1][col - 1] = forwardPyramids(row + 1, col - 1);
        pyramids[0][row + 1][col] = forwardPyramids(row + 1, col);
        pyramids[0][row + 1][col + 1] = forwardPyramids(row + 1, col + 1);

        return pyramids[0][row][col] =  1 + Math.min(pyramids[0][row + 1][col - 1], pyramids[0][row + 1][col + 1]);
    }

    function reversePyramids(row, col){
        if(pyramids[1][row][col] !== -1) return pyramids[1][row][col];
        if(row - 1 < 0 || col + 1 >= N || col - 1 < 0) return pyramids[1][row][col] = 0;
        if([grid[row][col], grid[row - 1][col - 1], grid[row - 1][col], grid[row - 1][col + 1]].includes(0)){
            return pyramids[1][row][col] = 0;
        }

        pyramids[1][row - 1][col - 1] = reversePyramids(row - 1, col - 1);
        pyramids[1][row - 1][col] = reversePyramids(row - 1, col);
        pyramids[1][row - 1][col + 1] = reversePyramids(row - 1, col + 1);

        return pyramids[1][row][col] =  1 + Math.min(pyramids[1][row - 1][col - 1], pyramids[1][row - 1][col + 1]);
    }
};