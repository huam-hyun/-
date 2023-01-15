/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    if(nums.every(num => num === nums[0])) return 0;

    const N = nums.length;
    const times = {};
    let answer = 0;

    for(let i = 0; i < N; i++){
        times[nums[i]] = times[nums[i]] + 1 || 1;
    }

    const sorted = Object.keys(times).sort((a, b) => a - b);
    
    for(let i = 1; i < sorted.length; i++){
        const NUM = sorted[i];

        answer += i * times[NUM];
    }

    return answer;
};