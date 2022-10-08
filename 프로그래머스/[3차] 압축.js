// 성공
// 일단 생각 나는 대로 풀어보았는데 더 좋은 방법이 있다면 수정해봐도 좋을 것 같다.

function solution(msg) {
    let answer = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const dic = {};
    let order = 27;
    
    for(let i = 0; i < alphabet.length; i++){
        dic[alphabet[i]] = i + 1;
    }
    
    let s = '';
    for(let i = 0; i < msg.length; i++){
        const beforeS = s;
        s += msg[i];
        
        if(dic[s] === undefined){
            dic[s] = order++;
            i--;
            s = '';
            answer.push(dic[beforeS]);
        }
        
        // 마지막 글자일 때
        if(i === msg.length - 1){
            if(dic[s] === undefined){
                dic[s] = order++;
                i--;
                s = '';
                answer.push(dic[beforeS]);
            }else{
                answer.push(dic[s]);
            }
        }
    }
    
    return answer;
}