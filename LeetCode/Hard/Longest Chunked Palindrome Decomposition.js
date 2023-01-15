// 성공
/* 
    단어로 만드는 가장 긴 팰린드롬의 길이
    Palindrome : 좌우 대칭인 문자열

    단어로 좌우 대칭인 팰린드롬을 만들어야한다.
    string.prototype.endsWith을 활용했다
    정규 표현식을 사용해도 되지만 해당 기능을 하는 함수가 이미 있어서 이를 활용했다
    
    findPalindrome(string) 설명
    1. string의 길이가 0이면 비교할 문자열이 없으므로 0을 리턴한다
    2. word에 한 글자씩 넣어가면서 string.endsWith(word)를 체크한다
      2-1 string이 word로 끝나면 해당 word가 팰린드롬에 들어간다는 의미
    3. 단어의 길이가 string의 길이와 같다면 팰린드롬의 정중앙에 들어가는 단어라는 의미이다.
      3-1 1을 리턴한다
    4. 단어의 길이가 string의 길이보다 작다면 string에서 해당 단어를 제거하고 남은 문자열을 다시 findPalindrome에 넣는다
      4-1 (word)string(word) 형태이므로 2 + findPalindrome(남은 문자열)을 리턴한다
*/

/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function(text) {
    
    const answer = findPalindrome(text);

    return answer;

    function findPalindrome(string){
        if(!string) return 0;

        let p = 0;
        let word = '';

        while(p < string.length){
            word += string[p++];

            if(string.endsWith(word)) break;
        }

        if(word.length < string.length) return 2 + findPalindrome(string.slice(p, string.length - p));
        else return 1;
    }
};