// 성공

function solution(orders, course) {
    let answer = [];
    // 손님이 주문한 메뉴들의 조합을 저장할 객체
    const courses = {}
    
    // order별로 가능한 조합을 모두 구함
    for(let i = 0; i < orders.length; i++){
        combi(orders[i].split("").sort(), '')
    }
    
    course.forEach(e =>{
        // courses에 저장된 모든 조합 중 메뉴의 수가 course에 포함되고, 2번 이상 주문된 조합을 keys에 저장
        const keys = Object.keys(courses).filter(x => e === x.length && courses[x] >= 2)

        // 걸러진 조합들을 주문된 횟수에 따라 내림차순 정렬함
        // 횟수가 같은 경우 사전순으로 정렬
        keys.sort((a, b) => {
            if(courses[b] > courses[a]){
                return 1
            }else if(courses[a] === courses[b]){
                return a - b
            }else{
                return -1
            }
        })
        
        // 정렬된 key중에서 횟수가 가장 많은 애들을 선택하기 위해 key[0]과 주문 횟수가 같은 조합을 answer에 포함시킴
        answer.push(...keys.filter(x => courses[keys[0]] === courses[x]))
    })

    // answer를 사전 순으로 정렬하여 반환
    return answer.sort();

    // order에 따른 조합을 구하기 위한 재귀 함수
    function combi(menus, cur){
        for(let i = 0; i < menus.length; i++){
            // 사전순이기 때문에 선택된 메뉴 앞쪽은 살펴보지 않아도 된다
            const temp = [...menus.slice(i + 1)]
            const curCourse = cur + menus[i]
            
            // 구해진 조합이 있으면 +1 하고 아니면 1로 만들어준다
            if(courses[curCourse]){
                courses[curCourse]++
            }else{
                courses[curCourse] = 1
            }
            combi(temp, curCourse)
        }
    }
}