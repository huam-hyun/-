function solution(k, dungeons) {
    let answer = -1;
    
    answer = findPath(dungeons, [], k, [])

    answer = Math.max(...answer.map(e => e.length))
    
    return answer;
}

function findPath(remain, path, k, available){
    for(let i = 0; i < remain.length; i++){
        let temp = [...remain]
        if(k >= temp[i][0]){
            let nowPath = [...path, temp[i]]
            let nowK = k - temp[i][1]
            temp.splice(i, 1)

            available.push(nowPath)

            findPath(temp, nowPath, nowK, available)
        }
    }

    return available
}

const dungeons = [[80,20],[50,40],[30,10]]
const k = 80

console.log(solution(k, dungeons))