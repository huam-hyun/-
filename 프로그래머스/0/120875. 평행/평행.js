const getGradient = ([x1, y1], [x2, y2]) => {
    return (y2 - y1) / (x2 - x1)
}

const checkParallel = (dots, combination) => {
    return +(getGradient(dots[combination[0]], dots[combination[1]])
        === getGradient(dots[combination[2]], dots[combination[3]]))
}

function solution(dots) {
    const combinations = [[0, 1, 2, 3], [0, 2, 1, 3], [0, 3, 1, 2]]
    let answer = 0
    
    combinations.forEach((combination) => {
        if (answer) {
            return
        }
        answer = checkParallel(dots, combination)
    })
    
    return answer
}