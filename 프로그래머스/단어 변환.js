// 성공
// compareSimilar 함수는 target단어와 criteria 단어의 글자 수 차이가 1 이하이면 true를 반환한다.
// bfs를 통해 풀었다

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