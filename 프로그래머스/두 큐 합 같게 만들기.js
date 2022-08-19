// 성공
// 1차 시도 queue에서 직접 요소를 제거하고 더하니 시간이 오래걸려서 시간초과 발생

// 2차 시도 queue에서 요소를 제거하는 시간을 없애고 그냥 pointer를 써서 값을 가져온 후 상대 큐에 push해줌
// 시간도 더 빠르게 해서 정답을 맞출 수 있었다

function solution(queue1, queue2) {
    let q1Sum = queue1.reduce((a, b) => a + b, 0)
    let q2Sum = queue2.reduce((a, b) => a + b, 0)
    let swap = 0
    let q1Pointer = 0
    let q2Pointer = 0
    const queueLength = queue1.length
    const average = (q1Sum + q2Sum) / 2
    const limit = 3 * queueLength - 1
    
    if(average !== Number(average)){
        return -1
    }else if(queue1.find(e => e > average) || queue2.find(e => e > average)){
        return -1
    }
    
    while(swap < limit){
        if(q1Sum === q2Sum){
            return swap
        }else if(q1Sum > q2Sum){
            const num = queue1[q1Pointer]
            queue2.push(num)
            q1Sum -= num
            q2Sum += num
            q1Pointer++
            swap++
        }else{
            const num = +queue2[q2Pointer]
            queue1.push(num)
            q1Sum += num
            q2Sum -= num
            q2Pointer++
            swap++
        }
    }
    
    return -1
}