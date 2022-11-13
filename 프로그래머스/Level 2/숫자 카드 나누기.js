// 성공
// 다 로직 잘 짜놓고 최대 공약수 구하는 부분을 잘못했다.
// 전체 수의 최대 공약수를 구해야 하는데 가장 작은 값과 큰 값의 최대 공약수를 구해서 자꾸 틀렸다.

function solution(arrayA, arrayB) {
    // 배열 A, B의 최대 공약수를 구한다
    const maxA = arrayA.reduce((p, c) => gcd(p, c), arrayA[0]);
    const maxB = arrayB.reduce((p, c) => gcd(p, c), arrayB[0]);
    let A = 0;
    let B = 0;
    
    // 최대 공약수의 약수 중에서 조건을 만족하는 가장 큰 값을 찾는다
    for(let i = maxA; i > 1; i--){
        if(maxA % i !== 0) continue;
        
        if(arrayB.every(card => card % i !== 0)){
            A = i;
            break;
        }
    }
    for(let i = maxB; i > 1; i--){
        if(maxB % i !== 0) continue;

        if(arrayA.every(card => card % i !== 0)){
            B = i;
            break;
        }
    }
    
    function gcd(a, b){
        const remainder = a % b;
        if(remainder === 0) return b;
        return gcd(b, remainder);
    }
    
    return Math.max(A, B);
}