//덩치
let input = ['5', '55 185', '58 183', '88 186', '60 175', '46 155']
let testCase = input.shift() * 1
let fatter = new Array(testCase).fill(0)
let people = []
input.forEach((item, index) =>{
    people[index] = item.split(' ').map(x => Number(x))
})

for(let i = 0; i < testCase - 1; i++){
    for(let j = i + 1; j < testCase; j++){
        if(people[i][0] > people[j][0] && people[i][1] > people[j][1]){
            fatter[j]++
        }else if(people[i][0] < people[j][0] && people[i][1] < people[j][1]){
            fatter[i]++
        }
    }
}
fatter = fatter.map(x => x + 1)

console.log(fatter.join(' '))