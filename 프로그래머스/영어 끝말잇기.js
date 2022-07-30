// 성공

function solution(n, words) {
    let answer = []
    let used = [words[0]]
    let i = 0
    
    for(i = 1; i < words.length; i++){
        if(!used.includes(words[i]) && words[i][0] === words[i-1][words[i-1].length-1]){
            used.push(words[i])
        }else{
            break
        }
    }
    // console.log(i)
    // console.log(used)
    
    answer = used.length === words.length ? [0, 0] : [i % n + 1, Math.ceil((i + 1) / n)]
    
    return answer;
}