// 성공
// Beats 43% / 88%
// letter 사용 수 별로 nums에 저장
// nums의 키(사용된 알파벳)를 내림차순으로 정렬한 다음 nums의 값 만큼 반복해서 answer에 더해준다

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const nums = {};
    let answer = '';

    for(let i = 0; i < s.length; i++){
        nums[s[i]] = nums[s[i]] + 1 || 1;
    }

    const sorted = Object.keys(nums).sort((a, b) => {
        return nums[b] - nums[a];
    });

    sorted.forEach(e => answer += e.repeat(nums[e]));

    return answer;
};