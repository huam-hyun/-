// 성공
function solution(food) {

    let set = [];
    
    for(let i = 1; i < food.length; i++){
        const nums = food[i] / 2;
        set.push(i.toString().repeat(nums));
    }
    
    return set.join('') + '0' + set.reverse().join('');
}