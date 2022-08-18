// 미완

function solution(user_id, banned_id) {
    let answer = 0;
    let availId = []
    const idList = {}
    
    for(let i = 0; i < banned_id.length; i++){
        let temp = banned_id[i].replace(/\*/g, '[a-z0-9]')
        availId.push(temp)
    }
    
    for(let i = 0; i < availId.length; i++){
        user_id.forEach(e =>{
            if(e.match(new RegExp(availId[i], 'g'))){
                idList[i] ? idList[i].push(e) : idList[i] = [e]
            }
        })
    }
    console.log(idList)
    
    return answer;
}