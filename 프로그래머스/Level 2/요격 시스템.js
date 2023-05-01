/**
 * 구간을 가진 targets가 있을 때, 요격시키기 위해선 구간 사이에서 미사일을 발사해야한다.
 * 그랬을 때 모든 targets를 요격시킬 최소한의 미사일 개수를 구해라
 * @param {int[int[]]} targets 
 * @returns 전체 target을 요격시킬 최소한의 미사일 개수
 */

// 성공
// targets를 구간의 마지막 좌표로 오름차순 정렬한다
// 마지막 요격한 위치를 저장할 lastLoc를 사용한다
// lastLoc보다 현재 target의 시작점이 앞일 경우 요격된 target이다
// 현재 target이 lastLoc보다 뒤일경우 현재 target을 최대한 끝에서 타격했단 의미로 lastLoc를 target의 끝으로 저장한다. answer++
// 끝까지 반복한다
function solution(targets) {
    let answer = 0, lastLoc = 0
    
    targets.sort((a, b) => a[1] - b[1])
    
    for (let i = 0; i < targets.length; i++) {
        const target = targets[i]
        
        if (target[0] >= lastLoc) {
            lastLoc = target[1]
            answer++
        }
    }
    
    return answer
}