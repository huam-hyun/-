const numbers = [4, 1, 2, 1]
const target = 4

function solution(numbers, target){
    let answer = 0;
    
    DFS(0, 0)

    function DFS(depth, sum){
        if(depth === numbers.length){
            if( sum === target ){
                answer++
            }
            return
        }

        DFS(depth+1, sum + numbers[depth])
        DFS(depth+1, sum - numbers[depth])
    }

    return answer
}

console.log(solution(numbers, target))

