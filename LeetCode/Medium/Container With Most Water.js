// 성공
// 1차 시도: dp
// 시간복잡도가 커서 실패
// 2차 시도: 투포인터
// 1. lp, rp사이 크기를 구하고 현재 answer보다 크면 answer에 저장
// 2. lp의 높이와 rp의 높이를 비교하여 더 낮은 쪽을 움직임

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    const N = height.length;
    let lp = 0, rp = N - 1;
    let answer = 0;
    const getVolume = (i, j) => {
        return Math.min(height[i], height[j]) * (j - i);
    }

    while(lp < rp){
        answer = Math.max(answer , getVolume(lp, rp));

        height[lp] < height[rp] ? lp++ : rp--;
    }

    return answer;
};