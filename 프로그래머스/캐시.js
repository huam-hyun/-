// 성공

function solution(cacheSize, cities) {
    let answer = 0;
    let cache = []
    cities = cities.map(e => e.toLowerCase())
    if(cacheSize === 0){
        return 5 * cities.length
    }
    
    for(let i = 0; i < cities.length; i++){
        if(cache.includes(cities[i])){
            cache.splice(cache.indexOf(cities[i]), 1)
            answer += 1
        }else{
            if(cache.length === cacheSize){
                cache = cache.slice(1)
            }
            answer += 5
        }
        cache.push(cities[i])
    }
    
    return answer;
}