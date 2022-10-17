// 정답
// 1차 시도 : N개의 공약수를 찾아 모두 곱한후 공약수 ** (N-1)로 나눠주었으나 안되는 경우 발생
// 2차 시도 : arr에서 2개씩 가져와 두 수의 최소공배수를 배열에 넣어주고 재귀시킴

function solution(arr) {
    if(arr.length === 1){
        return arr.pop()
    }
    let common = 1
    // 비교할 수
    let A = arr.pop()
    let B = arr.pop()

    for(let i = 2; i <= Math.max(A, B); i++){
        if(!(A % i) && !(B % i)){
            common = i
        }
    }
    arr.push(A * B / common)
    
    return solution([...arr])
}