function solution(my_string) {
    return my_string
        .replace(/[^\d]/g, '')
        .split('')
        .map(Number)
        .sort((a, b) => a - b)
}