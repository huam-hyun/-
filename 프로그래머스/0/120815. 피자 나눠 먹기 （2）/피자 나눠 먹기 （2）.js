function solution(n) {
    const getGCD = (num1, num2) => (num1 % num2 ? getGCD(num2, num1 % num2) : num2)
    return n / getGCD(n, 6)
}