const n = 6
const arr1 = [46, 33, 33 ,22, 31, 50]
const arr2 = [27 ,56, 19, 14, 14, 10]

// 맨 뒤가 공백이면 뒤집을때 공백이 없어짐
// 원인 : join이 공백을 없애버림

// join이 아니라 while문이 문제였음
// n자리 2진법으로 나타내야 하는데 그냥 2진법으로 나타내서 문제 발생함

function solution(n, arr1, arr2) {
    let answer = [];
    const length = arr1.length

    for(let i = 0; i < length; i++){
        let item1 = arr1[i]
        let item2 = arr2[i]
        let string = ''

        for(let j = 0; j < n; j++){
            // 둘 중 하나라도 1이면 벽
            const current = item1 % 2 || item2 % 2
            item1 = Math.floor(item1 / 2)
            item2 = Math.floor(item2 / 2)

            if(current === 1){
                string = '#' + string
            }else{
                string = ' ' + string
            }
        }

        answer.push(string)
    }

    return answer;
}

console.log(solution(n, arr1, arr2))