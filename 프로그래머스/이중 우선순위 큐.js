function solution(operations) {
    let answer = []
    let queue = []

    operations.forEach(e => {
        let [op, num] = e.split(' ')
        num = +num

        switch(op){
            case 'I':
                queue.push(num)
                break
            case 'D':
                if(!queue.length){
                    break;
                }
                if(num === 1){
                    // 최대값 제거
                    const max = Math.max(...queue)
                    queue = queue.filter(e => e !== max)
                }else{
                    const min = Math.min(...queue)
                    queue = queue.filter(e => e !== min)
                }
                console.log(queue)
                break
        }
    })

    

    if(queue.length){
        answer = [Math.max(...queue), Math.min(...queue)]
    }else{
        answer = [0, 0]
    }

    return answer
}

console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]))