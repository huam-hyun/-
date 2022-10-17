const numbers = [6, 10, 2]
const numbers2 = [3, 30, 34, 5, 9]
const numbers3 = [0, 0, 0, 0]

function solution(numbers) {
    let answer = '';

    numbers = numbers.map(e => '' + e)

    numbers = sort(numbers).split(' ')

    console.log(numbers)

    answer = '' + +numbers.join('')

    return answer;
}

function sort(array){
    if(array.length === 1){
        return array[0]
    }else if(array.length === 0){
        return ''
    }
    let leftArray = []
    let rightArray = []
    const pivot = array[0]
    for(let i = 1; i < array.length; i++){
        const a = pivot + array[i]
        const b = array[i] + pivot

        if(+a < +b){
            leftArray.push(array[i])
        }else{
            rightArray.push(array[i])
        }
    }
    leftArray.push(pivot)

    return sort(leftArray) + ' ' + sort(rightArray)
}

console.log(solution(numbers))
console.log(solution(numbers3))