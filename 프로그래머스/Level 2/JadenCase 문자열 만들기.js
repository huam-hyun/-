// 성공
// 대부분의 사람들은 그냥 반복문을 통해 answer를 완성시킨걸 볼 수 있었다
// 정규표현식을 써서 편리하게 한 것 같다

function solution(s) {
    let strings = s.split(' ')
    
    strings = strings
        .map(e => e.toLowerCase())
        .map(e => e.replace(/^\D/, x => x.toUpperCase()))

    return strings.join(' ')
}