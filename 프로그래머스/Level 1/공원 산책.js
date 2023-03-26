// 성공
// park와 routes가 주어졌을 때 마지막 도착지점 return 하기
// 조건 : route에 장애물이 있거나 도착지점이 park 밖일 경우 움직이지 않음
// isAvail로 해당 지점으로 이동할 수 있는지 여부 확인
// move로 이동

function solution(park, routes) {
    const N = park.length, M = park[0].length
    let loc = [0, 0]
    
    for(let i = 0; i < N; i++) {
        if(park[i].includes('S')) {
            loc = [i, park[i].indexOf('S')]
            break
        }
    }
    
    const isAvail = (loc, direction, distance) => {
        distance = +distance
        switch(direction) {
            case 'E':
                if(loc[1] + distance >= M) return false
                for(let i = 1; i <= distance; i++) {
                    if(park[loc[0]][loc[1] + i] === 'X') {
                        return false
                    }
                }
                break
            case 'W':
                if(loc[1] - distance < 0) return false
                for(let i = 1; i <= distance; i++) {
                    if(park[loc[0]][loc[1] - i] === 'X') {
                        return false
                    }
                }
                break
            case 'S':
                if(loc[0] + distance >= N) return false
                for(let i = 1; i <= distance; i++) {
                    if(park[loc[0] + i][loc[1]] === 'X') {
                        return false
                    }
                }
                break
            case 'N':
                if(loc[0] - distance < 0) return false
                for(let i = 1; i <= distance; i++) {
                    if(park[loc[0] - i][loc[1]] === 'X') {
                        return false
                    }
                }
                break
        }
        return true
    }
    
    const move = (loc, direction, distance) => {
        switch(direction) {
            case 'E':
                return [loc[0], loc[1] + +distance]
                break
            case 'W':
                return [loc[0], loc[1] - +distance]
                break
            case 'N':
                return [loc[0] - +distance, loc[1]]
                break
            case 'S':
                return [loc[0] + +distance, loc[1]]
                break
        }
    }
    
    for (const route of routes) {
        const [direction, distance] = route.split(" ")
        
        if(isAvail(loc, direction, distance)) {
            loc = move(loc, direction, distance)
        }
    }
    
    return loc
}