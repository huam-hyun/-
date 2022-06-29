const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}"

function solution(s) {
    let answer = [];
    
    let set = s.match(/\{.*?\}/g)

    for(let i = 0; i < set.length; i++){
        set[i] = set[i].replace(/[^,0-9]/g, '')
        set[i] = set[i].split(',')
    }

    set.sort((a, b) => {
        return a.length - b.length
    })

    while(set.length){
        let array = set.shift()
        array.forEach(e => {
            if(!answer.includes(+e)){
                answer.push(+e)
            }
        })
    }

    return answer;
}

solution(s)