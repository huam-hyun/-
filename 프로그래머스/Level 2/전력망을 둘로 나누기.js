// 성공
// 완전 탐색으로 와이어를 하나씩 없앤 다음 group을 만들었다
// group이 두 개일 경우 절대값과 answer중에서 더 작은 값을 answer에 저장했다

function solution(n, wires) {
    let answer = n;
    
    for(let i = 0; i < wires.length; i++){
        const curWires = [...wires.slice(0, i), ...wires.slice(i + 1)];
        let group = [];
        let tower = new Array(n + 1).fill(false);    
        tower[0] = true;
        
        while(tower.includes(false)){
            const start = tower.indexOf(false);
            
            let num = 0;
            let needVisit = [start];
            
            while(needVisit.length){
                const curTower = needVisit.shift();
                
                if(!tower[curTower]){
                    tower[curTower] = true;
                    num++;
                    
                    needVisit = [...curWires.filter(e => e.includes(curTower)).map(e => e[0] === curTower ? e[1] : e[0]), ...needVisit];
                }
            }
            group.push(num);
        }
        if(group.length === 2){
            answer = Math.min(answer, Math.abs(group[1] - group[0]));
        }
    }
    
    return answer;
}