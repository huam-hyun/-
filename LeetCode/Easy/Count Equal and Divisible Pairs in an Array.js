// 성공
// 속도가 다른 사람들에 비해 느리길래 예제 코드들을 확인해 보았다
// 보니까 내 코드랑 똑같은데 속도만 다르게 나왔다
// 테스트 케이스가 적었을 때 제출해서 지금과 속도가 다르게 나온것 같다.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let answer = 0;

    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j] && (i * j) % k === 0) answer++;
        }
    }

    return answer;
};