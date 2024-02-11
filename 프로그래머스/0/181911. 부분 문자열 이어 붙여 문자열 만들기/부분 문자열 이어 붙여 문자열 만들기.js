function solution(my_strings, parts) {
    return parts.reduce((p, [start, end], i) => p + my_strings[i].slice(start, end + 1), '')
}