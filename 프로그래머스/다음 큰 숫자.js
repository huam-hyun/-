// 성공
// 2진수로 바꿨을 때 1의 갯수가 같은 수 중 n보다 큰 가장 작은 수
function solution(n) {
    const nBit = n.toString(2)
    n++
    
    while(nBit.match(/1/g).length !== n.toString(2).match(/1/g).length){
        n++
    }
    
    return n;
}