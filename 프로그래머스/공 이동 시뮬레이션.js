// 시간 부족으로 실패
// 접근 방식은 정확했으나 시간을 더 짧게 만들어야 한다

function solution(n, m, x, y, queries) {
    let answer = 0;
    let dots = [[x, y]];
    
    for(let i = queries.length - 1; i >= 0; i--){
        const query = queries[i];
        console.log('curDots:' + dots);
        dots = getDots(dots, query, n, m).map(e => e.split(" ").map(Number));
        
        if(dots.length === m * n) return n * m;
    }

    return dots.length;
}

function getDots(dots, query, n, m){
    let newDots = new Set();
    
    for(let i = 0; i < dots.length; i++){
        const loc = dots[i];
        const newLoc = getXY('normal', query, loc, n, m);
        const beforeLoc = getXY('opposite', query, loc, n, m);
        
        console.log(`${loc} ${newLoc} ${beforeLoc}`);
        
        if(loc[0] === newLoc[0] && loc[1] === newLoc[1]){
            getBetweenDots(loc, beforeLoc).forEach(dot => {
                newDots.add(dot.join(' '));
            });
        }else{
            newDots.add(beforeLoc.join(' '));
        }
        console.log(newDots);
    }
    
    return [...newDots];
}

function getBetweenDots(start, end){
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;
    const betweenDots = [];
    
    if(startRow === endRow){
        for(let i = Math.min(startCol, endCol); i <= Math.max(startCol, endCol); i++){
            betweenDots.push([startRow, i]);
        }
    }else{
        for(let i = Math.min(startRow, endRow); i <= Math.max(startRow, endRow); i++){
            betweenDots.push([i, startCol]);
        }
    }
    
    return betweenDots;
}

function getXY(type, query, loc, n, m){
    const [command, dx] = query;
    const newLoc = [loc[0], loc[1]];
    
    switch(command){
        case 0:
            newLoc[1] = loc[1] + (-dx) * (type === 'normal' ? 1 : -1);
            break;
        case 1:
            newLoc[1] = loc[1] + dx * (type === 'normal' ? 1 : -1);
            break;
        case 2:
            newLoc[0] = loc[0] + (-dx) * (type === 'normal' ? 1 : -1);
            break;
        case 3:
            newLoc[0] = loc[0] + dx * (type === 'normal' ? 1 : -1);
    }
    
    if(newLoc[0] < 0) newLoc[0] = 0;
    if(newLoc[0] >= n) newLoc[0] = n - 1;
    if(newLoc[1] < 0) newLoc[1] = 0;
    if(newLoc[1] >= m) newLoc[1] = m - 1;
    
    return newLoc;
}