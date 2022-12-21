// 성공
// 슬라이딩 윈도우로 해결했다
// 슬라이딩 윈도우를 배열로 만드는게 아니라 leftPointer, rightPointer로 사용하면 더 좋을 것 같다

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let window = [];
    let max = 0;

    for(let i = 0; i < s.length; i++){
        const letter = s[i];

        if(window.includes(letter)){
            window.push(letter);
            window = window.slice(window.indexOf(letter) + 1);
            continue;
        }

        window.push(letter);
        if(max < window.length)max = window.length;
    }

    return max;
};