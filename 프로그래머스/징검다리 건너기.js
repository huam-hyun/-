// 1차 시도 테스트케이스 성공, 효율성 실패
// k개씩 끊어서 Set으로 만든 후 최댓값을 비교하여 가장 작은 값이 결과가 된다.
// 가장 긴 시간이 0.55ms인데 실패하는걸 보니 시간이 굉장히 짧은가보다


// 1차 시도
function solution(stones, k) {
    let min = Infinity

    for(let i = 0; i < stones.length - k + 1; i++){
        let set = stones.slice(i, i + k)
        const max = Math.max(...set)
        if(max < min){
            min = max
        }
    }
    
    return min;
}

// 2차 시도
// 이분 탐색
// 효율성테스트 1, 2, 3 실패

// 3차 효율성 2, 12 실패
// 속도가 약간 느려서 2개 실패하는 것 같다

// 4차시도 성공
// check 함수의 if문 수정해서 속도를 줄임

function solution(stones, k) {
    let tempStones = [...stones].sort((a, b) => a - b)
    // 지나갈 수 있는 최솟값
    let left = tempStones.shift()
    // 지나갈 수 있는 최댓값
    let right = tempStones.pop()
    let answer = 0

    while(left <= right){
        // 평균 mid
        const mid = Math.floor((left + right) / 2)
        // console.log(mid)

        if(check(mid, stones, k)){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return left
    
    function check(mid, stones, k){
        let count = 0
        
        for(let i = 0; i < stones.length; i++){
            if(stones[i] <= mid){
                count++
            }else{
                if(count >= k){
                    return true
                }
                count = 0
            }
        }
        return count >= k
    }
}