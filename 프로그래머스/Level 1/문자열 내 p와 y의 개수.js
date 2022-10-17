function solution(s){
    const P = s.match(/p/gi)
    const Y = s.match(/y/gi)

    const countP = P ? P.length : 0
    const countY = Y ? Y.length : 0

    return countP === countY
}

const s = "pPoooyY"	
const s2 = "Pyy"
const s3 = 'P'
// console.log(solution(s))
console.log(solution(s3))