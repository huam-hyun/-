// 성공
// 처음엔 뒷 숫자가 더 크면 앞의 숫자를 제거하는 방식으로 했으나 너무 느려 10번을 통과하지 못했다
// stack을 사용한 방식으로 stack에 마지막 값이 현재 num보다 작으면 pop()하는 방식으로 구현했다

function solution(number, k) {
    let stack = [];
    
    for(let i = 0; i < number.length; i++){
        const num = number[i];
        
        while(k > 0 && num > stack.at(-1)){
            stack.pop();
            k--;
        }
        
        stack.push(num);
    }
    
    return stack.slice(0, stack.length - k).join('');
}