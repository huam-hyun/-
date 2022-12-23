// 성공
// Follow up: Could you solve it without converting the integer to a string?
// string으로 바꾸지 않고 하는 방법을 생각해보자

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const newX = x.toString();
    let lp = 0;
    let rp = newX.length - 1;

    while(lp < rp){
        if(newX[lp++] !== newX[rp--]) return false;
    }

    return true;
};


// string으로 바꾸지 않고 해결한 방법
// 수를 사용해서 구현하니 시간이 훨씬 빠르게 풀렸다

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0) return false;
    let newX = x;
    let newNum = 0;

    while(newX > 0){
        newNum *= 10;
        newNum += newX % 10;
        newX = Math.floor(newX / 10);
    }

    return newNum === x;
};