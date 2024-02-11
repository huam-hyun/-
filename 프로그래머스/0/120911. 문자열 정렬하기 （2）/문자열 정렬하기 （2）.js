function solution(my_string) {
    return my_string.split('').map(e => e.toLowerCase()).sort().join('')
}