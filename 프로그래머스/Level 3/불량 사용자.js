// 1차 시도 실패
// 테스트케이스 6, 7, 9, 11 실패, 5 시간초과

// 5번 시간초과 해결

// 2차 시도 실패
// 테스트케이스 2, 6, 7, 9, 10, 11 실패
// 아마 'abcd'.includes('abc')가 true가 나와서 생기는 문제 같다 (28번째 줄)

// 3차 시도 성공
// dfs를 통해 모든 경우의 수를 찾았다
// checked를 통해 중복되는 아이디를 제거하고 used를 통해 모든 banned_id가 사용되었는지 확인하였다

// 6, 7, 9, 11문제의 경우 'abc'를 검출할때 관련없는 'dabc'가 같이 검출돼서 생기는 문제였다
// 정규 표현식 앞에 ^를 추가해서 정확하게 걸리도록 수정해주었다.

// 3차 코드
function solution(user_id, banned_id) {
    const ids = new Set();
    let used = new Array(banned_id.length).fill(false);
    
    banned_id = banned_id.map(e => '^' + e.replace(/\*/g, '.') + '$')
    let needVisit = user_id.filter(e => e.match(banned_id[0]));
    
    for(let i = 0; i < needVisit.length; i++){
        dfs(needVisit[i], [], [...used], user_id, banned_id, [], ids);
    }
    
    return new Set(ids).size;
}

function dfs(check, checked, used, user_id, banned_id, array, set){  
    const id = check;
    const index = banned_id.findIndex((ban, i) => id.match(ban) && !used[i]);
    if(index >= 0 && !checked.includes(id)){
        used[index] = true;
        checked.push(id);
        
        array[index] = id;
        
        if(used.includes(false)){
            const next = banned_id[used.indexOf(false)];
            const nextIds = user_id.filter(e => e.match(next) && !checked.includes(e));
            
            for(let i = 0; i < nextIds.length; i++){
                dfs(nextIds[i], [...checked], [...used], user_id, banned_id, [...array], set);
            }
        }else{
            set.add(array.sort().join(' '));
        }
    }
}

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