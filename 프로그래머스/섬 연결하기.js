// 성공
// 최소 비용의 다리를 통해 연결된 섬을 추가 한 후 break문으로 빠져나가야 하는데 까먹고 안써서 다른 다리도 추가가돼서 틀린거였다

function solution(n, costs) {
    const islands = new Graph()
    islands.setNode(costs)
    return islands.makeBridge(costs)
    
    function Graph(){
        this.nodes = []
        this.cost = 0
        
        this.setNode = (bridge) => {
            bridge.forEach(e =>{
                const [a, b, cost] = e
                this.nodes.push(a, b)
            })
            this.nodes = [...new Set(this.nodes)]
        }
        
        this.makeBridge = (bridge) =>{
            let availBridges = []
            let nodes = [this.nodes[0]]
            
            while(nodes.length !== this.nodes.length){
                // 방문한 노드와 연결된 다리들
                availBridges = bridge.filter(e => nodes.includes(e[0]) || nodes.includes(e[1]))
                // cost순으로 오름차순 정렬
                availBridges.sort((a, b) => a[2] - b[2])
                
                for(let i = 0; i < availBridges.length; i++){
                    const [a, b, cost] = availBridges[i]
                    if(nodes.includes(a) && nodes.includes(b)){
                        // 이미 두 개의 섬을 방문했으면 스킵
                        continue
                    }
                    // 연결된 섬을 visited에 추가
                    nodes.includes(a) ? 0 : nodes.push(a)
                    nodes.includes(b) ? 0 : nodes.push(b)
                    
                    this.cost += cost
                    break
                }  
            }
            
            return this.cost
        }
    }
}