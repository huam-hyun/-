// 성공
// 다른 사람의 힌트를 참고했다
// A와 B를 정렬 후 가장 큰 값들을 비교한다
// A가 더 클 경우는 A만 pop(), B가 더 클 경우는 둘 다 pop()하고 승점 1점을 챙긴다
// A나 B가 더 없을때까지 반복한다

function solution(A, B) {
    let answer = 0;
    
    // A B 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    while(A.length && B.length){
        if(A.at(-1) < B.at(-1)){
            B.pop();
            A.pop();
            answer++;
        }else{
            A.pop();
        }
    }
    
    return answer;
}