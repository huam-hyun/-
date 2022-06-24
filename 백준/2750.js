//수 정렬하기
let input = [5, 5, 2, 4, 3, 1]
let num = input.shift()

let sorted = input.sort((a, b)=> a - b)

for(let i = 0; i < num; i++){
    console.log(sorted[i])
}