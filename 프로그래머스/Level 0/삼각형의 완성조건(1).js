// 성공
function solution(sides) {
    const sum = sides.reduce((p, c) => p + c, 0);
    
    return sides.every(side => sum - side > side) ? 1 : 2;
}