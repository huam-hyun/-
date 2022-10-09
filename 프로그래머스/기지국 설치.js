// 1차 시도 실패 효율성만 전부 실패
// stations의 범위를 제외한 나머지 부분을 구하여 안테나 최소 갯수만큼 answer에 더해주었다.

// 2차 시도 성공
// 생각보다 간단하게 성공됐다
// 기지국들이 오름차순으로 돼있으니 순서대로 꺼내서 기지국 왼쪽에 안닿는 곳이 있으면 안테나 갯수 더하기
// 없으면 기지국 오른쪽에서 안닿는 첫 부분을 start로 두고 다음 과정을 반복한다

function solution(n, stations, w) {
    let answer = 0;
    let start = 1;
    let max = n;
    const width = 2 * w + 1;
    
    while(start <= n){
        const nearBy = stations ? stations.shift() : -1;
        const end = nearBy > 0 ? nearBy - w - 1 : max;
        
        if(start <= end){
            const nums = end - start + 1;
            answer += Math.ceil(nums / width);
        }
        start = nearBy + w + 1;
    }
    
    return answer;
}

// function solution(n, stations, w) {
//     let answer = 0;
//     const width = 2 * w + 1;
    
//     stations = stations.map(e => {
//         return Array.from({length: width}, (v, i) => e - w + i);
//     }).flat();
    
//     apart = Array.from({length: n}, (v, i) => stations.includes(i + 1) ? 1 : 0).join('');
    
//     const need = apart.match(/0+/g);
//     if(!need){
//         return 0;
//     }
//     need.forEach(e => answer += Math.ceil(e.length / width));

//     return answer;
// }