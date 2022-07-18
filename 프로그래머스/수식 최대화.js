const expression = "100-200*300-500+20"

function solution(expression) {
    let answer = 0;

    // 부호 저장
    let sign = expression.match(/\D/g)
    let num = expression.match(/\d+/g)
    let signSet = [...new Set(sign)]

    if(signSet.length === 3){
        for(let i = 0; i < 3; i++){
            // 1번째 우선순위
            let tempSign = [...sign]
            let tempNum = [...num]
            while(tempSign.includes(signSet[i])){
                const index = tempSign.indexOf(signSet[i])
                const cal = eval(tempNum[index] + ' ' + tempSign[index] + ' ' + tempNum[index+1])
                tempSign.splice(index, 1)
                tempNum.splice(index, 2, cal)
            }
            for(let j = 0; j < 3 && j !== i; j++){
                // 2번째 우선순위
                // 1번째 하고 난 뒤 남은 sign과 num을 저장
                let tempSign2 = [...tempSign]
                let tempNum2 = [...tempNum]
                while(tempSign2.includes(signSet[j])){
                    const index = tempSign2.indexOf(signSet[j])
                    const cal = eval(tempNum2[index] + ' ' + tempSign2[index] + ' ' + tempNum2[index+1])
                    tempSign2.splice(index, 1)
                    tempNum2.splice(index, 2, cal)
                }

                // 마지막 우선순위
                while(tempSign2.length){
                    const sign = tempSign2.shift()
                    const cal = eval(tempNum2[0] + ' ' + sign + ' ' + tempNum2[1])
                    tempNum2.splice(0, 2, cal)
                }

                answer = answer < Math.abs(tempNum2[0]) ? Math.abs(tempNum2[0]) : answer
            }
        }
    }else if(signSet.length === 2){
        for(let i = 0; i < 2; i++){
            let tempSign = [...sign]
            let tempNum = [...num]
            while(tempSign.includes(signSet[i])){
                const index = tempSign.indexOf(signSet[i])
                const cal = eval(tempNum[index] + ' ' + tempSign[index] + ' ' + tempNum[index+1])
                tempSign.splice(index, 1)
                tempNum.splice(index, 2, cal)
            }
            while(tempSign.length){
                const sign = tempSign.shift()
                const cal = eval(tempNum[0] + ' ' + sign + ' ' + tempNum[1])
                tempNum.splice(0, 2, cal)
            }

            answer = answer < Math.abs(tempNum[0]) ? Math.abs(tempNum[0]) : answer
        }
    }else{
        answer = eval(expression)
        answer = Math.abs(answer)
    }

    return answer;
}

console.log(solution(expression))