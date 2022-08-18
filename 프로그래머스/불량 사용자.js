// 1차 시도 실패
// 테스트케이스 6, 7, 9, 11 실패, 5 시간초과

function solution(user_id, banned_id) {
    let answer = 0;
    let availId = []
    let combinations = []
    const idList = {}
    
    for(let i = 0; i < banned_id.length; i++){
        let temp = banned_id[i].replace(/\*/g, '[a-z0-9]')
        availId.push(temp)
    }
    
    for(let i = 0; i < availId.length; i++){
        user_id.forEach(e =>{
            if(e.match(new RegExp(availId[i] + '$', 'g'))){
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
                    nextCombinations.push(`${e} ${x}`)
                })
            })
            combinations = [...nextCombinations]
        }
    }
    
    combinations = combinations.map(e => e.split(' ').sort().join(' '))
        .filter(e => new Set(e.split(' ')).size === availId.length)
    
    return new Set(combinations).size;
}