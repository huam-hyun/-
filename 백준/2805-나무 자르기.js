// let input = require('fs').readFileSync('dev/stdin').toString().split('\n')
let input = '4 7\n20 15 10 17'.split('\n')
const [N, M] = input[0].split(' ').map(e => +e)
const trees = input[1].split(' ').map(e => +e)

// 가져갈 나무의 최솟값과 최댓값
let left = 0
let right = Math.max(...trees) * N

// 구해야 할 높이 값이 mid가 되어야 한다
while(left <= right){
    const mid = (left + right) / 2
    // 가져갈 나무의 길이
    const sliced = trees.reduce((pre, cur) => pre + (cur > mid ? cur - mid : 0), 0)

    if(sliced === M){
        right = mid
        break
    }else if(sliced > M){
        // 가져갈 나무의 길이가 M보다 크면
        // H의 높이를 높여아 하므로 left가 mid + 1
        left = mid + 1
    }else{
        // 가져갈 나무의 길이가 M보다 작으면
        // H의 높이를 낮춰야 하므로 right가 mid - 1
        right = mid - 1
    }
}

// left가 right보다 크면 반복문 종료이고 최솟값을 구해야 하니 더 작은 right를 출력
console.log(right)