function solution(str_list, ex) {
    return str_list.reduce((p, c) => p + (c.includes(ex) ? '' : c), '')
}