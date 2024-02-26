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