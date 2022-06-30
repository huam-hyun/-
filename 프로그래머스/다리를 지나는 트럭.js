function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let length = truck_weights.length
    // 다리 스택
    let bridge = new Array(bridge_length).fill(0)
    // 걸린시간
    let time = 0
    // 다리 지난 트럭
    let finish = []

    while(finish.length !== length){
        time++  // 1초
        // console.log(weight)
        // 다리 맨 앞 부분에 있는 트럭 확인
        const nowCome = bridge.shift()
        if(!!nowCome){
            // 트럭이라면
            finish.push(nowCome)
            // 버틸수 있는 무게 증가
            weight += nowCome
        }

        // 다음 트럭
        if(truck_weights[0] <= weight){
            bridge.push(truck_weights[0])
            weight -= truck_weights.shift()
        }else{
            bridge.push(0)
        }
    }

    answer = time


    return answer;
}

console.log(solution(2, 10, [7,4,5,6]))