function solution(my_string, num1, num2) {
    const stringArray = my_string.split('')
    stringArray[num1] = my_string[num2]
    stringArray[num2] = my_string[num1]
    return stringArray.join('')
}