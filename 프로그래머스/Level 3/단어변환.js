// 1차 시도 실패, 테스트케이스 5번 런타임에러
// 2차 시도 성공, 언제했지 왜 돼있냐

const begin = 'hit'
const target = 'cog'
const words = ["hot", "dot", "dog", "lot", "log", "cog"]

function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    answer = bfs(begin, target, words);
    
    return answer;
}

function bfs(start, end, words){
    let needVisit = [start];
    let visited = [];
    let depth = 0;
    
    while(needVisit.length){
        const loop = needVisit.length;
        for(let i = 0; i < loop; i++){
            const curWord = needVisit.shift();
            // console.log(curWord);
            if(!visited.includes(curWord)){
                visited.push(curWord);

                let temp = words.filter(e => compareSimilar(e, curWord));
                needVisit.push(...temp);
            }
        }
        // console.log('needVisit:',needVisit)
        depth++;
        if(needVisit.includes(end)) return depth;
    }
}

function compareSimilar(target, criteria){
    let diff = 1;
    if(target === criteria) {return false;}
    for(let i = 0; i < target.length; i++){
        if(diff < 0){
            return false;
        }
        if(target[i] !== criteria[i]){
            diff--;
        }
    }
    
    return diff >= 0 ? true : false;
}

// function solution(begin, target, words) {
//     let answer = 0
//     const graph = {}
//     words.push(begin)
    
//     for(let i = 0; i < words.length; i++){
//         const similarWord = []
//         for(let j = 0; j < words[i].length; j++){
//             // similar는 j번째 글자를 제외한 단어
//             const similar = new RegExp(words[i].slice(0, j) + '.' + words[i].slice(j + 1, words[j].length))
//             similarWord.push(...words.filter(e => e.match(similar)))            
//             graph[words[i]] = [...new Set(similarWord)].filter(e => !e.includes(words[i]))
//         }
//     }

//     answer = words.includes(target) ? bfs(begin, target, graph) : 0
    
//     return answer
// }

// function bfs(char, word, graph){
//     let needVisit = []
//     let visited = []
//     let depth = 0

//     needVisit.push(char)

//     while(needVisit.length){
//         const cycle = needVisit.length
//         for(let i = 0; i < cycle; i++){ // 큐 크기만큼 반복
//             const node = needVisit.shift()

//             if(!visited.includes(node)){
//                 visited.push(node)

//                 needVisit = [...needVisit, ...graph[node]]
//             }
//         }
//         // 돌고나면 depth 증가
//         depth++

//         if(needVisit.includes(word)){
//             // 찾는 단어가 다음단계에 있으면 깊이 반환
//             return depth
//         }
//     }
//     return 0
// }