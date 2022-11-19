// 성공
// 배열에서 x, y를 반대로 써서 약간 헤맸다

function solution(line) {
    let answer = [];
    let stars = [];
    
    for(let i = 0; i < line.length; i++){
        for(let j = 0; j < line.length && j !== i; j++){
            const [A, B, E] = line[i];
            const [C, D, F] = line[j];
            
            // 기울기 같으면 스킵
            if(A / B === C / D) continue;
            
            const x = (B * F - E * D) / (A * D - B * C);
            const y = (E * C - A * F) / (A * D - B * C);
            
            // x, y 하나라도 정수가 아니면 스킵
            if(x !== Math.floor(x) || y !== Math.floor(y)) continue;
            
            stars.push([x, y]);
        }
    }

    const [min_X, max_X, min_Y, max_Y] = stars.reduce((p, c) => {
        const [x, y] = c;
        let [min_X, max_X, min_Y, max_Y] = p;
        
        return [min_X < x ? min_X : x, max_X < x ? x : max_X, min_Y < y ? min_Y : y, max_Y < y ? y : max_Y];
        
    }, [Infinity, -Infinity, Infinity, -Infinity]);
    
    answer = new Array(max_Y - min_Y + 1).fill('.').map(e => e.repeat(max_X - min_X + 1));

    stars.forEach(star => {
        let [x, y] = [star[0] - min_X, star[1] - min_Y];

        answer[y] = answer[y].slice(0, x) + '*' + answer[y].slice(x + 1);
    })
    
    return answer.reverse();
}