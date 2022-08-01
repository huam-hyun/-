// 1차 성공

function solution(dirs) {
    let answer = 0;
    const direction = []
    let loc = [0, 0]    
    
    for(let i = 0; i < dirs.length; i++){
        switch(dirs[i]){
            case 'L':
                if(loc[0] === -5){
                    break
                }else{
                    const tempLoc = loc.join(',')
                    loc[0]--
                    const destLoc = loc.join(',')
                    direction.push(`${tempLoc} ${destLoc}`)
                    direction.push(`${destLoc} ${tempLoc}`)
                    break
                }
            case 'R':
                if(loc[0] === 5){
                    break
                }else{
                    const tempLoc = loc.join(',')
                    loc[0]++
                    const destLoc = loc.join(',')
                    direction.push(`${tempLoc} ${destLoc}`)
                    direction.push(`${destLoc} ${tempLoc}`)
                    break
                }
            case 'U':
                if(loc[1] === 5){
                    break
                }else{
                    const tempLoc = loc.join(',')
                    loc[1]++
                    const destLoc = loc.join(',')
                    direction.push(`${tempLoc} ${destLoc}`)
                    direction.push(`${destLoc} ${tempLoc}`)
                    break
                }
            case 'D':
                if(loc[1] === -5){
                    break
                }else{
                    const tempLoc = loc.join(',')
                    loc[1]--
                    const destLoc = loc.join(',')
                    direction.push(`${tempLoc} ${destLoc}`)
                    direction.push(`${destLoc} ${tempLoc}`)
                    break
                }
        }
    }
    
    return answer = (new Set(direction).size) / 2
}