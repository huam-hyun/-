// 테스트케이스 6 실패
// 어떤 점이 문제인지 잘 모르겠다
// 딱히 문제가 되는 부분은 없어 보이는데...

function solution(want, number, discount) {
    let answer = 0;
    
    for(let i = 0; i < discount.length - 9; i++){
        const disForTen = discount.slice(i, i + 10).join(' ');
        let avail = true;
        
        for(let j = 0; j < want.length; j++){
            const nums = disForTen.match(new RegExp(want[j], 'g'));

            if(!nums || nums.length < number[j]){
                avail = false;
                break;
            }
        }
        
        if(avail){
            answer++;
        }
    }
    
    return answer;
}