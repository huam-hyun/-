/**
 * 직선도로 100원 코너 500원일 때 0, 0에서 N - 1, N - 1로 가는 도로의 최솟값을 구해라
 * @param {int[][]} board 
 * @returns int
 */

// DFS에 4방향을 추가하여 구현해야 하는 문제
function solution(board) {
  const N = board.length
  const DYDX = [[-1, 0], [1, 0], [0, -1], [0, +1]]
  const cost = new Array(N).fill().map(e => new Array(N).fill().map(v => new Array(4).fill(Infinity)))
  const isValid = (row, col) => row >= 0 && row < N && col >= 0 && col < N && board[row][col] === 0
  const needVisit = [[0, 0, 0, 1], [0, 0, 0, 3]]
  
  while (needVisit.length) {
      const [row, col, curCost, dir] = needVisit.shift()
      
      for (let i = 0; i < DYDX.length; i++) {
          const [dy, dx] = DYDX[i]
          const [newRow, newCol] = [row + dy, col + dx]
          
          if (isValid(newRow, newCol)) {
              let newCost = curCost + 100
              
              if (dir !== i) newCost += 500
              if (newCost < cost[newRow][newCol][i]) {
                  cost[newRow][newCol][i] = newCost
                  needVisit.push([newRow, newCol, newCost, i])
              }
          }
      }
  }
  
  return Math.min(...cost[N - 1][N - 1])
}