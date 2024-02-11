function solution(arr) {
    return +arr.every((e, i) => {
        return e.every((d, j) => d === arr[j][i])
    })
}