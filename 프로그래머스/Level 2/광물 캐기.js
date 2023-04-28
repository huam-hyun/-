// 성공
// 낮은 레벨도 이제 꽤 많은 코드를 요구하는 것 같다
/*
마인은 다음과 같은 규칙을 지키면서 최소한의 피로도로 광물을 캐려고 합니다.

1. 사용할 수 있는 곡괭이중 아무거나 하나를 선택해 광물을 캡니다.
2. 한 번 사용하기 시작한 곡괭이는 사용할 수 없을 때까지 사용합니다. (최대 5개)
3. 광물은 주어진 순서대로만 캘 수 있습니다.
4. 광산에 있는 모든 광물을 캐거나, 더 사용할 곡괭이가 없을 때까지 광물을 캡니다.
*/
// 계산식: 다이아: 5^2, 철: 5^1, 돌: 5^0, 피로도 = Math.ceil(캘 광물 / 곡괭이 광물)

/* 풀이
1. picks 갯수 * 5 만큼 최대 광물의 갯수로 새로운 배열을 만든다
  - 광물의 갯수가 더 적으면 그대로, 더 많으면 최대 광물 갯수만큼 자름
2. 광물을 5개씩 잘라 [다이아, 철, 돌]의 갯수를 저장해 하나의 배열로 만든다
3. 5개씩 자른 광물을 다이아 - 철 - 돌의 갯수로 내림차순 정렬한다
4. 내림차순 정렬된 배열을 순서대로 다이아 - 철 - 돌 곡괭이로 캤을 때 피로도를 구한다
5. 곡괭이의 갯수가 더 많을 수도 있으니 예외처리 해준다
*/

function solution(picks, minerals) {
  let answer = 0
  const maxMinerals = picks.reduce((p, c) => p + c, 0) * 5
  const newMinerals = []
  
  if(minerals.length > maxMinerals) {
      minerals = minerals.slice(0, maxMinerals)
  }
  
  for(let i = 0; i < minerals.length / 5; i++) {
      const nums = [0, 0, 0]
      for(let j = 0; j < 5; j++) {
          const mineral = minerals[i * 5 + j]
          if(mineral === 'diamond') nums[0]++
          if(mineral === 'iron') nums[1]++
          if(mineral === 'stone') nums[2]++
      }
      newMinerals.push(nums)
  }
  
  newMinerals.sort((a, b) => {
      if(a[0] === b[0]){
          if(a[1] === b[1]) {
              return b[2] - a[2]
          }
          return b[1] - a[1]
      }
      return b[0] - a[0]
  })
  let idx = 0
  for(let j = 0; j < maxMinerals / 5; j++) {
      if(!newMinerals[idx]) break
      const mineral = newMinerals[idx++]
      let pick = 0
      if(picks[0] > 0){
          pick = 0
          picks[0]--
      } else if(picks[1] > 0) {
          pick = 1
          picks[1]--
      } else if(picks[2] > 0) {
          pick = 2
          picks[2]--
      }

      answer += mineral.reduce((p, c, i) => p + Math.ceil(5 ** (2 - i) / 5 ** (2 - pick)) * c , 0)
  }
  
  return answer
}