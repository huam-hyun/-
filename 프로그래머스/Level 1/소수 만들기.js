function solution(nums) {
    let answer = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length && j !== i; j++){
            for(let k = 0; k < nums.length && k !== i && k !== j; k++){
                const sum = nums[i] + nums[j] + nums[k]
                if(isPrime(sum)){
                    answer++
                }
            }
        }
    }
    
    return answer
}

function isPrime(num){
    const sqrt = Math.sqrt(num)
    
    for(let i = 2; i <= sqrt; i++){
        if(num % i === 0){
            return false
        }
    }
    
    return true
}