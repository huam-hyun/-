// 성공

function solution(genres, plays) {
    let answer = [];
    const music = {}
    let order = []
    
    // 객체로 정리
    genres.forEach((e, i) => {
        // 처음 확인하는 장르
        if(!music[e]){
            // 객체에 키 생성
            order.push(e)
            music[e] = {sum: 0, play: []}
        }
        // 인덱스로 객체 sum프로퍼티에 더함
        // 인덱스와 재생 횟수를 객체 play프로퍼티에 추가
        music[e].sum += plays[i]
        music[e].play.push([i, plays[i]])
    })

    // 장르별 sum으로 정렬
    order.sort((a, b) => {
        if(music[a].sum >= music[b].sum){
            return -1
        }
    })
    
    // 정렬된 장르 순서대로 반복
    order.forEach(e =>{
        // 장르에 속한 노래 재생 횟수가 많은대로 정렬
        // 재생 횟수가 같다면 index가 작은 것부터
        music[e].play.sort((a, b) => {
            if(a[1] === b[1]){
                return a[0] - b[0]
            }else{
                return b[1] - a[1]
            }
        })
        // 장르별로 최대 2개씩 answer에 추가
        music[e].play.slice(0, 2).map(x => answer.push(x[0]))
    })
    
    return answer;
}