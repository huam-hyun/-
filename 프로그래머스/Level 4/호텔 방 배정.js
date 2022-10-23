// 1차 시도 실패, 효율성만 전부 실패
// 너무 느리다

// 2차 시도 실패, 효율성 7 실패
// 다른 사람들의 풀이를 참고했다

// 3차 시도 성공
// 대용량 데이터를 쓸 경우 Object보다 Map객체가 더 빠르다는 것을 알았다!

// 3차 시도
function solution(k, room_number) {
    let answer = [];
    const room = new Map();
    
    room_number.forEach(num => {
        if(!room.has(num)){
            answer.push(num);
            room.set(num, num + 1);
        }else{
            let pointer = room.get(num);
            let needFix = [num];
            while(room.get(pointer)){
                needFix.push(pointer);
                pointer = room.get(pointer);
            }
            needFix.forEach(e => room.set(e, pointer + 1));
            room.set(pointer, pointer + 1);
            answer.push(pointer);
        }
    })
    
    return answer;
}

// 2차 시도
function solution(k, room_number) {
    let answer = [];
    const room = {};
    
    room_number.forEach(num => {
        if(!room[num]){
            answer.push(num);
            room[num] = num + 1;
        }else{
            let pointer = room[num];
            let needFix = [num];
            while(room[pointer]){
                needFix.push(pointer);
                pointer = room[pointer];
            }
            needFix.forEach(e => room[e] = pointer + 1);
            room[pointer] = pointer + 1;
            answer.push(pointer);
        }
    })
    
    return answer;
}



// 1차 시도
function solution(k, room_number) {
    let answer = [];
    let room = new Array(k + 1);
    room[0] = 1;
    
    room_number.forEach(num => {
        if(!room[num]){
            room[num] = 1;
            answer.push(num);
        }else{
            const index = room.findIndex((e, i) => i > num && !e);
            room[index] = 1;
            answer.push(index);
        }
    })
    
    return answer;
}