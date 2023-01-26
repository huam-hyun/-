// 성공
/*
    문제
    최대 k개의 경유지를 이용하여 src 에서 dst로 가는 최소 비용을 구하여라

    처음에는 from, to를 가지는 costMap을 사용하여 dfs로 풀었으나 시간 초과로 실패했다
    이후 다익스트라 알고리즘을 통해 풀었으나 역시 시간 초과로 실패했다

    벨만 포드를 이용한 다른 사람의 코드를 참고하여 코드를 새로 짰다.

    생각해보니 costMap의 경우 from, to를 키로 가질 필요 없이 src부터 to까지의 비용을 저장하는 역할을 하기 때문에 from이 필요 없다는 것을 알았다
    
    벨만 포드 알고리즘의 경우 매번 모든 간선을 확인하기 때문에 다익스트라보다 느리지만 가중치가 음수인 경우에도 최단 거리를 구할수 있다
*/

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
 var findCheapestPrice = function(n, flights, src, dst, k) {
    let costs = new Array(n).fill().map((_, i) => i === src ? 0 : Infinity);

    for(let i = 0; i < k + 1; i++){
        const newCosts = [...costs];

        for(const [from, to, cost] of flights){
            newCosts[to] = Math.min(newCosts[to], costs[from] + cost);
        }

        costs = newCosts.slice();
    }

    return costs[dst] === Infinity ? -1 : costs[dst];
};