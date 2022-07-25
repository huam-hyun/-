function solution(n){
    let answer = []
    let num = 1
    const block = Array.from(new Array(n), (x, i) => new Array(i+1))
    const direction = ['down', 'right', 'leftUp']
    let dir = 0
    let row = -1
    let col = 0

    for(let i = n; i > 0; i--){
        const remainMove = i
        switch(direction[dir]){
            case 'down':
                for(let j = 0; j < remainMove; j++){
                    block[++row][col] = num++
                }
                break
            case 'right':
                for(let j = 0; j < remainMove; j++){
                    block[row][++col] = num++
                }
                break
            case 'leftUp':
                for(let j = 0; j < remainMove; j++){
                    block[--row][--col] = num++
                }
                break
        }
        dir = (dir + 1) % 3
    }

    return answer = block.flat()
}

console.log(solution(5))