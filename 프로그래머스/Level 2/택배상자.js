// 성공
// 해시를 이용해 보았다
// 각 상자 번호를 key로 이전 Box의 번호를 value로 가진다
// 상자를 더 이상 꺼낼 수 없을 때까지 반복하여 answer를 구한다

function solution(order) {
    let answer = 0;
    let main = new Map();
    let pointer = 1;
    
    for(let i = 0; i < order.length; i++){
        main.set(i + 1, i);
    }
    
    for(let i = 0; i < order.length; i++){
        const curBox = order[i];
        
        if(curBox >= pointer){
            if(main.has(curBox + 1)){
                pointer = curBox + 1;
                main.set(curBox + 1, main.get(curBox));
            }else{
                pointer = main.get(curBox);
            }
            answer++;
            main.delete(curBox);
        }else if(curBox === main.get(pointer)){
            main.set(pointer, main.get(curBox));
            main.delete(curBox);
            
            answer++;
        }else{
            break;
        }
    }
    
    return answer;
}