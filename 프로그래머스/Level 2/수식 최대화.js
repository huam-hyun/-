const expression = "100-200*300-500+20"

// 1차 시도 실패

// 2차 시도 성공

// 2차 시도 코드
function solution(expression) {
    // 우선순위를 담은 signs 배열
    const signs = ['+-*', '+*-', '-+*', '-*+', '*-+', '*+-']
    let answers = []
    
    // 각 우선순위 별로 나오는 값들을 answers에 담는다.
    for(let i = 0; i < signs.length; i++){
        answers.push(getValue(signs[i], expression))
    }
    // console.log(answers)
    
    // 우선순위에 따라 값을 반환하는 getValue 함수
    function getValue(sign, exp){
        // 1. 우선순위가 가장 낮은 연산자로 exp를 나눈다
        exp = exp.split(sign[0])

        // 2. 나눠진 value를 숫자로 형변환 시 NaN이 아니면 수식이다. NaN이 아닐 시 숫자이므로 그대로 값을 저장한다.
        // 수식은 2번째 우선순위 연산자를 가지고 있으면 sign[1]로 split한다. 없을 경우 바로 연산한 값을 저장한다.
        // sign[1]로 split된 value는 마지막 1번째 우선순위를 가진 연산자(sign[2])만 있으므로 바로 연산한다.
        exp = exp.map(e => {
            if(isNaN(+e)){
                return e.includes(sign[1]) ? eval(e.split(sign[1]).map(v => eval(v)).join(sign[1])) : eval(e)
            }else{
                return e
            }
        })
        
        // 3. 2번 과정의 경우 sign[0]으로 나눈 value들을 연산한 결과기 때문에 각 value들을 sign[0]으로 join하여 값을 구하여 반환한다.
        return Math.abs(eval(exp.join(sign[0])))
    }

    // answers 중 가장 큰 값을 반환한다.
    return Math.max(...answers)
}


// 1차 시도 코드
// function solution(expression) {
//     let answer = 0;

//     // 부호 저장
//     let sign = expression.match(/\D/g)
//     let num = expression.match(/\d+/g)
//     let signSet = [...new Set(sign)]

//     if(signSet.length === 3){
//         for(let i = 0; i < 3; i++){
//             // 1번째 우선순위
//             let tempSign = [...sign]
//             let tempNum = [...num]
//             while(tempSign.includes(signSet[i])){
//                 const index = tempSign.indexOf(signSet[i])
//                 const cal = eval(tempNum[index] + ' ' + tempSign[index] + ' ' + tempNum[index+1])
//                 tempSign.splice(index, 1)
//                 tempNum.splice(index, 2, cal)
//             }
//             for(let j = 0; j < 3 && j !== i; j++){
//                 // 2번째 우선순위
//                 // 1번째 하고 난 뒤 남은 sign과 num을 저장
//                 let tempSign2 = [...tempSign]
//                 let tempNum2 = [...tempNum]
//                 while(tempSign2.includes(signSet[j])){
//                     const index = tempSign2.indexOf(signSet[j])
//                     const cal = eval(tempNum2[index] + ' ' + tempSign2[index] + ' ' + tempNum2[index+1])
//                     tempSign2.splice(index, 1)
//                     tempNum2.splice(index, 2, cal)
//                 }

//                 // 마지막 우선순위
//                 while(tempSign2.length){
//                     const sign = tempSign2.shift()
//                     const cal = eval(tempNum2[0] + ' ' + sign + ' ' + tempNum2[1])
//                     tempNum2.splice(0, 2, cal)
//                 }

//                 answer = answer < Math.abs(tempNum2[0]) ? Math.abs(tempNum2[0]) : answer
//             }
//         }
//     }else if(signSet.length === 2){
//         for(let i = 0; i < 2; i++){
//             let tempSign = [...sign]
//             let tempNum = [...num]
//             while(tempSign.includes(signSet[i])){
//                 const index = tempSign.indexOf(signSet[i])
//                 const cal = eval(tempNum[index] + ' ' + tempSign[index] + ' ' + tempNum[index+1])
//                 tempSign.splice(index, 1)
//                 tempNum.splice(index, 2, cal)
//             }
//             while(tempSign.length){
//                 const sign = tempSign.shift()
//                 const cal = eval(tempNum[0] + ' ' + sign + ' ' + tempNum[1])
//                 tempNum.splice(0, 2, cal)
//             }

//             answer = answer < Math.abs(tempNum[0]) ? Math.abs(tempNum[0]) : answer
//         }
//     }else{
//         answer = eval(expression)
//         answer = Math.abs(answer)
//     }

//     return answer;
// }

// console.log(solution(expression))