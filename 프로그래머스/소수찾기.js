const numbers = "17"

function solution(numbers) {
    let answer = 0;
    let nums = numbers.split("")
    const nodes = []
    let prime = []

    for(let i = 0; i < nums.length; i++){
        nodes[i] = i
    }

    for(let i = 0; i < nums.length; i++){
        prime.push(dfs(i.toString(), nodes, nums))
    }
    // console.log(prime)

    prime = prime.flat().map(e => +e)
    answer = new Set(prime).size

    

    return answer;
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

function dfs(startNode, nodes, array){
    let visited = []
    let needVisit = []
    let prime = []
    let nums = []

    needVisit.push(startNode)

    while(needVisit.length){
        const node = needVisit.shift()
        // console.log(nodes)
        if(!visited.includes(node)){
            visited.push(node)
            nodes = nodes.filter(e => e !== node)
            nums.push(array[node])

            // console.log(visited)

            // 만들어진 문자열이 소수면 prime 배열에 추가
            if(isPrime(+nums.join(''))){
                prime.push(nums.join(''))
            }

            needVisit = [...nodes, ...needVisit]
        }
    }

    return prime
}

console.log(solution(numbers))