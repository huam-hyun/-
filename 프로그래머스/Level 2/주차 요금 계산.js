// 성공
// 단순한 구현 문제
// 차근차근 하다보면 쉽게 풀린다

function solution(fees, records) {
    let answer = [];
    let cars = [...new Set(records.map(e => e.match(/\d{4}/)[0]).sort((a, b) => a - b))];
    
    cars.forEach(e => {
        let totalTime = 0
        let curCarLog = records.filter(v => v.match(new RegExp(e)));
        
        // 마지막으로 나간 경우가 없으면 추가해줌
        if(curCarLog.length % 2 === 1){
            curCarLog.push(`23:59 ${e} OUT`);
        }
        
        for(let i = 0; i < curCarLog.length / 2; i++){
            const inTime = curCarLog[i * 2].slice(0, 5).split(':');
            const outTime = curCarLog[i * 2 + 1].slice(0, 5).split(':');
            
            const hour = +outTime[0] - +inTime[0];
            const minute = +outTime[1] - +inTime[1];
            
            totalTime += 60 * hour + minute;
        }
        
        answer.push(totalTime);
    })
    
    // 시간으로 요금 계산
    answer = answer.map(e => {
        // 기본 시간
        if(e <= fees[0]){
            // 기본 요금
            return fees[1];
        }
        
        // 기본 시간 초과했을 때 잔여시간
        const remain = e - fees[0];
        
        return fees[1] + Math.ceil(remain / fees[2]) * fees[3]
    })
    
    return answer
}