const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

function solution(record) {
    let answer = []
    let user = {}
    let string = []
    
    record.forEach(e => {
        let [act, id, nickname] = e.split(' ')
        
        switch(act){
            case 'Enter':
                console.log('Enter')
                user[id] = nickname
                string.push([id,'님이 들어왔습니다.'])
                break
            case 'Leave':
                console.log('Leave')
                string.push([id, '님이 나갔습니다.'])
                break
            case 'Change':
                console.log('Change')
                user[id] = nickname
                break
        }
    })

    string.map(e =>{
        let result = user[e[0]].toString() + e[1].toString()
        answer.push(result)
    })
    
    return answer;
}

solution(record)