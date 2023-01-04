// 성공
// hash를 통해 메모리 낭비를 줄였다

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const hash = {};
    const N = nums.length;
    const answer = [];

    nums.forEach(num => hash[num] = true);

    for(let i = 1; i <= N; i++) if(!hash[i]) answer.push(i);

    return answer;
};