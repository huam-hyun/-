// 1차 시도 실패
// 테스트케이스 6, 7, 9, 11 실패, 5 시간초과

// 5번 시간초과 해결

function solution(user_id, banned_id) {
    let availId = []
    let combinations = []
    const idList = {}
    
    for(let i = 0; i < banned_id.length; i++){
        let temp = banned_id[i].replace(/\*/g, '.')
        availId.push([temp, i])
    }
    
    while(availId.length){
        const [banned, i] = availId.shift()
        user_id.forEach(e =>{
            if(e.match(new RegExp(banned + '$', 'g'))){
                idList[i] ? idList[i].push(e) : idList[i] = [e]
            }
        })
    }
    
    for(const key in idList){
        if(!combinations.length){
            combinations = [...idList[key]]
        }else{
            let nextCombinations = []
            combinations.forEach(e =>{
                idList[key].forEach(x => {
                    if(e.split(' ').includes(x)){
                        return
                    }else{
                        nextCombinations.push(`${e} ${x}`)
                    }
                })
            })
            combinations = [...nextCombinations]
        }
    }
    
    combinations = combinations.map(e => e.split(' ').sort().join(' '))
    // console.log(combinations)
    
    return new Set(combinations).size;
}