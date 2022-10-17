function solution(brown, yellow) {
    let answer = [];
    let width = 0
    let height = 0
    // brown = 2m + 2n - 4
    // yellow = (m - 2) * (n - 2)
    // brown = 2 * yellow / (n - 2) + 2 * n
    for(let i = 3; i > 0; i++){
        if(brown === 2 * yellow / (i - 2) + 2 * i){
            height = i
            break
        }
    }
    width = (brown + yellow) / n
    answer = width >= height ? [width, height] : [height, width]

    return answer;
}