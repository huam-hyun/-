// 테스트케이스 1, 2, 4, 7, 10, 11, 12 실패
// 틀린이유 : dfs 사용했는데 같은 숫자가 여러개 있는 경우를 고려안함

// 2차 시도 array에 있는 값을 하나 빼고 나머지 배열을 다시 재귀로 넘겨주는 방식으로 모든 수를 찾음
// temp = array가 주소를 공유해서 값이 같이 바뀌어서 값이 제대로 안나왔음
// temp = [...array]로 해결
// 성공!

const numbers = "17"

function solution(numbers) {
    let nums = numbers.split('')
    let prime = []

    makePrime(nums, '')

    function makePrime(array, pre){
        if(!array.length){
            return
        }

        for(let i = 0; i < array.length; i++){
            let temp = [...array]
            let cur = pre + temp[i]
            if(isPrime(+cur) && !prime.includes(+cur)){
                prime.push(+cur)
            }
            temp.splice(i, 1)
            makePrime(temp, cur)
        }
    }

    return prime.length;
}

function isPrime(number){
    if(number === 1 || number === 0){
        return false
    }
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false
        }
    }
    return true
}

console.log(solution(numbers))