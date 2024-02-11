function solution(age) {
    const alphabet = 'abcdefghij'
    return age.toString().replace(/./g, (str) => alphabet[str])
}