// 집합의 요소들 간의 차이가 가장 적을 때가 최고의 집합이다.
// 1. s가 n보다 작다면 집합을 만들 수 없다
// 2. s / n이 자연수라면 s / n 이 n개가 있는 집합이 최고의 집합이다
// 3. 이외의 경우 s / n을 만족하면서 가장 큰 자연수 n개가 있는 집합에서 요소를 한개씩 +1 해주며 합이 s가 될때까지 반복한다.

function solution(n, s) {
    if(s < n){
        return [-1];
    }
    if(Math.floor(s / n) === s / n){
        return Array.from({length: n}, () => s / n);
    }
    
    let array = Array.from({length: n}, () => Math.floor(s / n));
    let i = 0;
    let sum = n * Math.floor(s / n);
    
    while(sum !== s){
        array[i]++;
        
        sum++;
        i = (i + 1) % n;
    }
    
    return array.sort((a, b) => a - b);
}