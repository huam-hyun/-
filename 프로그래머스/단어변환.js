// 테스트케이스 5번 런타임에러
const begin = 'hit'
const target = 'cog'
const words = ["hot", "dot", "dog", "lot", "log", "cog"]

function solution(begin, target, words) {
    let answer = 0
    const graph = {}
    words.push(begin)
    
    for(let i = 0; i < words.length; i++){
        const similarWord = []
        for(let j = 0; j < words[i].length; j++){
            // similar는 j번째 글자를 제외한 단어
            const similar = new RegExp(words[i].slice(0, j) + '.' + words[i].slice(j + 1, words[j].length))
            similarWord.push(...words.filter(e => e.match(similar)))            
            graph[words[i]] = [...new Set(similarWord)].filter(e => !e.includes(words[i]))
        }
    }

    answer = words.includes(target) ? bfs(begin, target, graph) : 0
    
    return answer
}

function bfs(char, word, graph){
    let needVisit = []
    let visited = []
    let depth = 0

    needVisit.push(char)

    while(needVisit.length){
        const cycle = needVisit.length
        for(let i = 0; i < cycle; i++){ // 큐 크기만큼 반복
            const node = needVisit.shift()

            if(!visited.includes(node)){
                visited.push(node)

                needVisit = [...needVisit, ...graph[node]]
            }
        }
        // 돌고나면 depth 증가
        depth++

        if(needVisit.includes(word)){
            // 찾는 단어가 다음단계에 있으면 깊이 반환
            return depth
        }
    }
    return 0
}

console.log(solution(begin, target, words))