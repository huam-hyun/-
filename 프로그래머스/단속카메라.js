// 성공
// 차량이 나가는 순서대로 정렬한다
// 맨 처음 나가는 차량의 나가는 지점에 첫 카메라를 세운다
// 들어오는 지점이 첫 카메라 이후인 차량들만 남긴다
// answer++
// 이후 routes가 없을때까지 반복하면 필요한 카메라의 숫자가 나온다

function solution(routes) {
    let answer = 0;
    
    // 나가는 순서대로 정렬
    routes.sort((a, b) => {
        if(a[1] < b[1]){
            return -1
        }else if(a[1] > b[1]){
            return 1
        }
    })

    while(routes.length){
        // 맨 처음 차량의 나간 지점
        const camera = routes[0][1]
        // 차량의 진입 구간이 카메라 위치보다 뒤인 애들만 routes에 남긴다
        routes = routes.filter(e => camera < e[0])
        // 새로운 카메라를 설치해야 하니 answer++
        answer++
    }
    
    return answer;
}