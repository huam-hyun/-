function solution(num_list) {
    return Math.max(...num_list.reduce((p, c, i) => {
        p[i % 2] += c
        return p
    }, [0, 0]))
}