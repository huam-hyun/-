const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
const hand = 'right'

function solution(numbers, hand) {
    let answer = '';
    keypad = {
        1: [1, 1],
        2: [1, 2],
        3: [1, 3],
        4: [2, 1],
        5: [2, 2],
        6: [2, 3],
        7: [3, 1],
        8: [3, 2],
        9: [3, 3],
        '*': [4, 1],
        0: [4, 2],
        '#': [4, 3]
    }
    let leftHand = keypad['*']
    let rightHand = keypad['#']
    
    numbers.forEach(e =>{
        answer += getHand(leftHand, rightHand, e, hand)
    })
    
    return answer;
}

function getHand(leftLocation, rightLocation, goWhere, hand){
    // 왼손 오른속 기본 원칙
    if([1, 4, 7].includes(goWhere)){
        leftHand = keypad[goWhere]
        return 'L'
    }else if([3, 6, 9].includes(goWhere)){
        rightHand = keypad[goWhere]
        return 'R'
    }

    // 2580 키패드 손 선택
    const goTo = keypad[goWhere]
    let leftDistance = 0
    let rightDistance = 0
    if(leftHand[1] === 2){  // 왼손이 중간에 있으면
        leftDistance = goTo[0] > leftHand[0] ? goTo[0] - leftHand[0] : leftHand[0] - goTo[0]
    }else{                  // 왼손이 왼쪽에 있으면
        leftDistance = goTo[0] > leftHand[0] ? goTo[0] - leftHand[0] : leftHand[0] - goTo[0]
        leftDistance++      // 오른쪽으로 한칸 움직임
    }

    if(rightHand[1] === 2){ // 오른손이 중간에 있으면
        rightDistance = goTo[0] > rightHand[0] ? goTo[0] - rightHand[0] : rightHand[0] - goTo[0]
    }else{                  // 오른손이 오른쪽에 있으면
        rightDistance = goTo[0] > rightHand[0] ? goTo[0] - rightHand[0] : rightHand[0] - goTo[0]
        rightDistance++     // 한칸 왼쪽으로 움직임
    }

    if(leftDistance > rightDistance){
        rightHand = keypad[goWhere]
        return 'R'
    }else if(leftDistance < rightDistance){
        leftHand = keypad[goWhere]
        return 'L'
    }else{
        if(hand === 'right'){
            rightHand = keypad[goWhere]
            return 'R'
        }else{
            leftHand = keypad[goWhere]
            return 'L'
        }
    }
}

console.log(solution(numbers, hand))
