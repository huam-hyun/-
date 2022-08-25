// 성공

// A는 오름차순으로 정렬, B는 내림차순으로 정렬
// 그 다음 A, B의 같은 위치에 있는 값들을 곱해서 answer에 더한다

function solution(A,B){
    let answer = 0;

    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)

    for(let i = 0; i < A.length; i++){
        answer += A[i] * B[i]
    }

    return answer;
}