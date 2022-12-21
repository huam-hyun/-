// 성공
// BruteForce: O(n^2), Hash: O(n)
// 해쉬를 이용해서 시간복잡도를 낮출 수 있다

var twoSum = function(nums, target) {
    const hash = new Map();
    
    for(let i = 0; i < nums.length; i++){
        const cur = nums[i];
        if(hash.has(target - cur)) return [hash.get(target - cur), i];

        hash.set(cur, i);
    }
};