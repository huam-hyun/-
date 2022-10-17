// 2진수로 나타냈을 때 모든 자리가 1이면 앞에 10으로 교체한게 가장 작은 숫자
// ex) 111 -> 1011
// 가장 마지막 숫자가 0이면 0을 1로 바꾸면 됨
// ex) 110 -> 111
// 가장 마지막 숫자가 0이 아니면 마지막 01을 찾아 10으로 바꿈
// ex) 101 -> 110

// 1차시도 성공

function solution(numbers){
    let answer = []

    numbers.forEach(e => {
        let bit = numToBit(e)
        if(e === 0){
            bit = '1'
        }else if(!bit.match(/0/g)){
            // bit에 1밖에 없을 때
            bit = '1'.repeat(bit.length - 1) + '01'
        }else if(bit[0] === '0'){
            // bit 첫 자리가 0일 때
            bit = bit.replace(/0/, '1')
        }else{
            // bit 첫 자리가 0이 아닐 때
            bit = bit.replace(/10/, '01')
        }
        answer.push(bitToNum(bit))
    })

    return answer
}

function numToBit(number){
    let bit = ''
    while(number > 0){
        bit += number % 2 === 1 ? '1' : '0'
        number = Math.floor(number / 2)
    }
    // 역순 bit 반환
    return bit
}

function bitToNum(bit){
    let temp = bit.split('').map(e => +e)
    let num = 0

    temp.forEach((e, i) =>{
        // bit를 역순으로 놨기 때문에 자기자리 index가 2의 지수
        num += e * 2 ** i
    })

    return num
}

console.log(solution([0, 3, 7, 15]))