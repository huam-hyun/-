// 성공
// brute force로도 답을 찾을 수 있었다

function solution(elements) {
    let answer = 0;
    let num = new Set();
    const length = elements.length;
    elements = [...elements, ...elements];
    
    for(let i = 0; i < length; i++){
        let sum = 0;
        
        for(let j = 0; j < length; j++){
            sum += elements[i + j];
            num.add(sum);
        }
    }
    
    return num.size;
}