// 성공

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const answer = [];
    const duplicate = new Set();

    nums.forEach(num => duplicate.has(num) ? answer.push(num) : duplicate.add(num));

    return answer;
};