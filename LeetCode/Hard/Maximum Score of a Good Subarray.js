// 성공
// 투 포인터를 사용해 O(n)으로 문제를 풀었는데 속도가 느리다.(Runtime Beats 10.53%)
// 다른 방법은 뭐가 있는지 찾아봐야겠다
// while문을 조금 바꿨더니 시간은 30ms 정도 빨라졌으나 그대로인거 같다

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    const N = nums.length;
    let answer = nums[k], min = nums[k];
    let l = k, r = k;

    // while(l > 0 || r < N){
    //     while(nums[r + 1] > min && r + 1 < N) r++;
    //     while(nums[l - 1] > min && l - 1 > -1) l--;

    //     answer = Math.max(answer, getValue(l, r, min));

    //     if(nums[l - 1] <= nums[r + 1] || l === 0) min = nums[++r];
    //     else if(nums[r + 1] < nums[l - 1] || r === N - 1) min = nums[--l];
    // }

    while(l > 0 || r < N - 1){
        if(nums[l - 1] <= nums[r + 1] || l === 0) min = Math.min(min, nums[++r]);
        else if(nums[r + 1] < nums[l - 1] || r === N - 1) min = Math.min(min, nums[--l]);

        answer = Math.max(answer, getValue(l, r, min));
    }

    return answer;

    function getValue(i, j, min){
        return (j - i + 1) * min;
    }
};