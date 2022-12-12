// 성공
// 이분 탐색으로 라운드 찾기

function solution(n, k, enemy) {
    let left = 0;
    let right = enemy.length;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const enemies = enemy.slice(0, mid).sort((a, b) => b - a);  // 내림차순 정렬
        const sum = k >= mid ? 0 : enemies.slice(k).reduce((p, c) => p + c, 0); // 무적권 k개 제외 나머지 적의 수
        
        // console.log(`left: ${left} / right: ${right} / mid: ${mid}`);
        // console.log(enemies);
        // console.log(`총 합: ${sum}`);
        
        if(sum <= n){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    
    return right;
}