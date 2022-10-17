let n = 5
let lost = [2, 4]
let reserve = [1, 3, 5]

function solution(n, lost, reserve){
    let answer = 0
    let temp = [] // 여분 가져온 사람꺼

    lost.map(e => +e)
    reserve.map(e => +e)
    lost.sort()
    reserve.sort()

    // 본인 여분 있는 사람들
    temp = lost.filter(e => reserve.includes(e))

    // 본인 여분 있는 사람들 제거
    lost = lost.filter(e => !temp.includes(e))
    reserve = reserve.filter(e => !temp.includes(e))

    reserve.forEach(e => {
        if(lost.includes(e - 1)){
            lost.splice(lost.indexOf(e - 1), 1)
        }else if(lost.includes(e + 1)){
            lost.splice(lost.indexOf(e + 1), 1)
        }
    })
    
    return answer = n - lost.length
}

console.log(solution(n, lost, reserve))