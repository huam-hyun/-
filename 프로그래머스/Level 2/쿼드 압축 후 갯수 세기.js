// 성공
// 재귀를 이용한 풀이
// 현재 박스가 압축이 가능하거나 크기가 1이라면 그 값을 answer에 더해준다
// 현재 박스가 압축이 불가능하다면 4등분으로 나눠 나눈 박스를 다시 함수에 넣는다

function solution(arr) {
    let answer = [0, 0];
    
    get_values(arr, answer);
    
    return answer;
}

function avail_compress(box){
    const value = box[0][0];
    
    // 모든 값이 같은지 확인한다
    for(let i = 0; i < box.length; i++){
        for(let j = 0; j < box.length; j++){
            if(box[i][j] !== value){
                return false
            }
        }
    }
    
    return true;
}

function get_values(box, answer){
    if(box.length === 1 || avail_compress(box)){
        answer[box[0][0]]++;
        return
    }
    
    const first = box.slice(0, box.length / 2).map(e => e.slice(0, box.length / 2));
    const second = box.slice(0, box.length / 2).map(e => e.slice(box.length / 2));
    const third = box.slice(box.length / 2).map(e => e.slice(0, box.length / 2));
    const fourth = box.slice(box.length / 2).map(e => e.slice(box.length / 2));
    
    get_values(first, answer);
    get_values(second, answer);
    get_values(third, answer);
    get_values(fourth, answer);
}