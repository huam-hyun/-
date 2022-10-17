function solution(price, money, count) {
    let answer = -1;
    
    for(let i = 0; i < count; i++){
        money -= price * (i + 1)
    }

    return answer = money >= 0 ? 0 : -money;
}