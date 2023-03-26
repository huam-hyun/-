// 성공
// 배열에 문자열로 .과 #을 주고 #을 모두 포함하는 드래그 좌표를 구하는 문제
// from[0]은 각 행에서 #의 인덱스 중 가장 작은 값
// from[1]은 #이 제일 먼저 있는 행
// to[0]은 #이 마지막으로 있는 행
// to[1]은 각 행에서 #의 인덱스 중 가장 큰 값

function solution(wallpaper) {
  let from = [51, 51]
  let to = [0, 0]
  
  for(let i = 0; i < wallpaper.length; i++) {
      if(wallpaper[i].includes('#')) {
          from[0] = Math.min(from[0], i)
          from[1] = Math.min(from[1], wallpaper[i].indexOf('#'))
          to[0] = i + 1
          to[1] = Math.max(to[1], wallpaper[i].lastIndexOf('#') + 1)
      }
  }
  return [...from, ...to]
}