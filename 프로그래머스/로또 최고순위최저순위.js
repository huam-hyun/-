function solution(lottos, win_nums) {
    var answer = [];

    let matches = lottos.filters(x => win_nums.includes(x))
    let zero = lottos.filters(x => x === 0)

    if(zero.length === 0){
        answer.push(matches.length === 0 ? 6 : 7 - matches.length)
        answer.push(answer[0])
    }else{
        // 최소 순위
        answer.push(7 - matches.length - zero.length)

        // 최대 순위
        answer.push(matches.length === 0 ? 6 : 7 - matches.length)
    }

    return answer;
}