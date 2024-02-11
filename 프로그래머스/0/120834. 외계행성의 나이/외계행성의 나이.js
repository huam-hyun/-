function solution(age) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return age.toString().replace(/./g, (str) => alphabet[str])
}