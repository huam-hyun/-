// 성공
// 대칭이동을 통해 거리의 최솟값을 구하는 문제
// X 혹은 Y가 같을 때는 원쿠션을 할 수 없으니 해당 경우를 제외하고 구해야한다
// X, Y, m, n으로 대칭이동한 symmetricMove 좌표를 구하고 해당 좌표와 목표 지점까지의 최솟값을 구한다

function solution(m, n, startX, startY, balls) {
  let answer = []
  
  const getDistance = (from, to) => {
      return (from[0] - to[0]) ** 2 + (from[1] - to[1]) ** 2
  }
  
  const symmetricMove = []
  symmetricMove.push([-startX, startY]) // Y축
  symmetricMove.push([startX, -startY]) // X축
  symmetricMove.push([m + Math.abs(m - startX), startY]) // 우측면
  symmetricMove.push([startX, n + Math.abs(n - startY)]) // 윗면

  for(let i = 0; i < balls.length; i++) {
      let min = Infinity
      for(let j = 0; j < symmetricMove.length; j++) {
          const from = balls[i]
          const to = symmetricMove[j]
          
          if(startY === from[1]) {
              if(startX < from[0] && from[0] < to[0]) continue
              if(startX > from[0] && from[0] > to[0]) continue
          } else if(startX === from[0]) {
              if(startY < from[1] && from[1] < to[1]) continue
              if(startY > from[1] && from[1] > to[1]) continue
          }
          
          min = Math.min(min, getDistance(from, to))
      }
      answer.push(min)
  }
  
  return answer
}