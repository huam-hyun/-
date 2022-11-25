// 1차 시도 실패
// 테스트케이스 6, 7, 9, 11 실패, 5 시간초과

// 5번 시간초과 해결

// 2차 시도 실패
// 테스트케이스 2, 6, 7, 9, 10, 11 실패
// 아마 'abcd'.includes('abc')가 true가 나와서 생기는 문제 같다 (28번째 줄)

// 2차 코드
function solution(user_id, banned_id) {
    let ids = []
    banned_id = banned_id.map(e => e.replace(/\*/g, '.') + '$')
    
    for(let i = 0; i < banned_id.length; i++){
        if(ids.length === 0){
            user_id.forEach(e =>{
                if(e.match(new RegExp(banned_id[i]))){
                    ids.push(e)
                }
            })
            continue
        }
        
        let temp = []
        ids.forEach(e =>{
            user_id.forEach(v => {
                if(v.match(new RegExp(banned_id[i])) && !e.includes(v)){
                    temp.push(`${e} ${v}`)
                }
            })
        })
        ids = [...temp]
    }
    
    ids = ids.filter(e => new Set(e.split(' ')).size === banned_id.length)
            .map(e => e.split(' ').sort().join(' '))
                 
    return new Set(ids).size
}

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