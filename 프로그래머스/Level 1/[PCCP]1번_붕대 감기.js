// 예전엔 안그랬는데 일을 시작하고 나서 코드를 읽기 좋게 짜려고 노력하게 된다
function solution(bandage, health, attacks) {
  const [skillDuration, healingPerSecond, bonusHealing] = bandage
  const maxHealth = health
  const sortedAttacks = [...attacks].sort((a, b) => a[0] - b[0])
  let lastAttackTime = 0
  let playerHP = health
  
  sortedAttacks.forEach(([time, damage]) => {
      if (playerHP < 0) {
          return   
      }
      // 문제 풀땐 몰랐는데, 0초에 바로 맞게되면 healingTime이 -1이 될수 있어 처리가 필요하다
      const healingTime = time - lastAttackTime - 1
      const healingAmount = healingTime * healingPerSecond
      const bonusHealingAmount = Math.floor(healingTime / skillDuration) * bonusHealing

      lastAttackTime = time
      playerHP = Math.min(maxHealth, playerHP + healingAmount + bonusHealingAmount) - damage
  })
  
  return playerHP > 0 ? playerHP : -1
}