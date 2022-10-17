function solution(n, times) {
    let answer = 0;
    let [left, right] = [1, Math.max(...times) * n]

    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        let sum = 0
        for(let i = 0; i < times.length; i++){
            sum += Math.floor(mid / times[i])
        }
        if(sum < n){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }

    return answer = left
}