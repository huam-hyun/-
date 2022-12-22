// 성공
// O(n^3)이라 시간이 많이 느리다 2162ms
// 포인터를 사용해서 메모리는 많이 잡아먹지 않는다
// 시간이 너무 걸리니까 시간을 줄일 방법을 생각해보자

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    const check = (s, left, right) => {
        while(left < right){
            if(s[left++] !== s[right--]) return false;
        }

        return true;
    }

    let max = s[0];

    for(let i = 0; i < s.length; i++){
        const start = s[i];

        for(let j = s.length - 1; j > i; j--){
            if(s[j] !== s[i]) continue;

            if(check(s, i, j) && max.length < j - i + 1){
                max = s.slice(i, j + 1);
            }
        }
    }

    return max;
};