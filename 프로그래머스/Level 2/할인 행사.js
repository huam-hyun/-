// 성공
// 슬라이딩 윈도우 형식으로 풀었다.
// want_list와 현재 날짜부터 할인 받을 수 있는 내역인 goods_list를 비교하여 되는 날짜를 구했단

function solution(want, number, discount) {
    let answer = 0;
    const want_list = {};
    const goods_list = {};
    let left = 0;
    let right = 9;
    
    for(let i = 0; i < want.length; i++){
        want_list[want[i]] = number[i];
    }
    
    discount.slice(0, 10).forEach(e => {
        goods_list[e] = goods_list[e] + 1 || 1;
    })
    
    while(right < discount.length){
        let avail = true;
        
        for(let want in want_list){
            if((goods_list[want] || 0) < want_list[want]){
                avail = false;
                break;
            }
        }
        
        if(avail){
            answer++;
        }
        
        const add = discount[++right];
        const del = discount[left++];
        
        goods_list[del]--;
        goods_list[add] = goods_list[add] + 1 || 1;
    }
    
    return answer;
}