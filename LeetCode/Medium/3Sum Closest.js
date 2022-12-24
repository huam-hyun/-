// 성공
// 3Sum 문제와 유사하지만 절대값 비교하는 과정만 다르게 하면 된다

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length <= 3) return nums.reduce((p, c) => p + c, 0);

    const _nums = nums.slice().sort((a, b) => a - b);
    const N = nums.length;
    let i = 0;
    let answer = Infinity;

    for(let i = 0; i < N - 2; i++){
        let left = i + 1;
        let right = N - 1;

        while(left < right){
            const sum = _nums[i] + _nums[left] + _nums[right];
            
            if(Math.abs(target - sum) < Math.abs(target - answer)) answer = sum;

            if(target < sum) right--;
            else left++;
        }
    }

    return answer;
};