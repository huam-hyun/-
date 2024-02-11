function solution(array) {
    return array.reduce(([max, index], c, i) => {
        return max < c
            ? [c, i]
            : [max, index]
    }, [0, 0])
}