// 성공
// 더해서 target을 만들 수 있는 모든 조합을 찾는 문제
// dfs를 이용해 풀었고 해결되지 않는 경우는 함수를 종료시켜 경우의 수를 줄였다

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const answer = new Set();

    candidates.forEach(e => {
        dfs(e, 0, []);
    });

    return [...answer].map(e => e.split(' '));

    function dfs(min, sum, set){
        if(sum === target){
            answer.add(set.join(' '));
        }

        const avails = candidates.filter(e => e <= target - sum && e >= min);

        if(!avails.length) return;
        else{
            avails.forEach(avail => {
                dfs(avail, sum + avail, [...set, avail]);
            });
        }
    }
};