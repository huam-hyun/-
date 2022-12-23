// 성공
// 쓸데없이 코드가 길다
// 큰 수부터 계산해서 차근히 계산이 가능하다

// 조금 더 느리지만 메모리를 많이 아낄 수 있다
// Beats 56% / 83%
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let idx = 0;
    let answer = '';

    while(num){
        if(num >= value[idx]){
            num -= value[idx];
            answer += roman[idx];
        }else{
            idx++;
        }
    }

    return answer;
};

// 빠르나 메모리 더 사용
//Beats 76% / 24%
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const match = {
        1: 'I', 4: 'IV', 5: 'V', 9: 'IX',
        10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C',
        400: 'CD', 500: 'D', 900: 'CM', 1000 : 'M'
    }

    let answer = '';

    if(match[num]){
        return match[num];
    }else{
        const k = Math.floor(num / 1000) * 1000;
        let h = Math.floor(num / 100) % 10 * 100;
        let t = Math.floor(num / 10) % 10 * 10;
        let o = num % 10;

        answer += getRoman(k, 1000) + getRoman(h, 100) + getRoman(t, 10) + getRoman(o, 1);
    }

    function getRoman(num, unit){
        if(unit === 1000) return match[1000].repeat(num / 1000);

        let roman = '';

        while(num){
            if(match[num]) return roman + match[num];

            if(num > unit * 5){
                roman += match[unit * 5];
            }else{
                roman += match[unit].repeat(num / unit);
            }
            num -= num > unit * 5 ? unit * 5 : num;
        }

        return roman;
    }

    return answer;
};