/**
 * x에서 y로 숫자를 변환할 때 가장 적게 걸리는 수를 반환하는 함수
 * @param {Number} x 시작 숫자
 * @param {Number} y 목표 숫자
 * @param {Number} n 더해야 하는 수
 * @returns x에서 y로 변환하는 최소 횟수
 */

// 성공
// dict[num]이 갱신될 경우에만 needVisit에 push 해주는 형식으로 해결했다
// BFS
function solution(x, y, n) {
  if (x === y) return 0
  const dict = {}
  let needVisit = [[x, 0]]
  
  for (let i = 0; i < needVisit.length; i++) {
      const [num, count] = needVisit[i]

      if(y < num) continue
      else if(y === num) {
          if (dict[y] < count) continue
          dict[y] = count
      } else if(dict[num]) {
          if (dict[num] <= count) continue
      } else {
          dict[num] = count
      }
      if(num + n <= y) needVisit.push([num + n, count + 1])
      if(num * 2 <= y) needVisit.push([num * 2, count + 1])
      if(num * 3 <= y) needVisit.push([num * 3, count + 1])
  }
  
  return dict[y] || -1
}