// 성공
/*
    문제
    1. i번째 아이의 rating이 저장되어 있다.
    2. 아이는 적어도 1개의 사탕을 받아야 한다
    3. 바로 양 옆의 아이들보다 rating이 높은 아이는 항상 양 옆의 아이보다 많은 사탕을 받아야 한다.
    4. ratings 배열이 주어졌을 때 아이들에게 줘야하는 최소 사탕의 갯수를 리턴해라

    풀이
    1. 변수
    - N === 아이들의 수
    - candies[] === i번째 아이에게 줘야하는 사탕의 수
    - candySum === 현재까지 줘야하는 사탕의 총 합
    
    2. 해결법
    - ratings[왼쪽 아이] < ratings[자신]인 경우
        -> candies[자신] = candies[왼쪽 아이] + 1
        -> candySum += candies[자신] - 1
    - ratings[오른쪽 아이] < ratings[자신] && candies[자신] < candies[오른쪽 아이]인 경우
        -> candySum += candies[오른쪽 아이] - candies[자신] + 1
        -> candies[자신] = candies[오른쪽 아이] + 1

        * 왼쪽을 비교할땐 항상 왼쪽 아이의 사탕이 1보다 크거나 같기 때문에 사탕 갯수를 비교할 필요가 없다
        * 하지만 오른쪽을 비교할땐 이미 자신의 사탕이 오른쪽 아이보다 클 경우가 생기기 때문에 사탕 갯수를 비교해줘야 한다
        * candySum은 사탕 갯수가 바뀔때마다 갱신해준다
    
    - candySum을 반환한다

*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const N = ratings.length;
    const candies = new Array(N).fill(1);
    let candySum = N;

    if(ratings[1] < ratings[0]){
        candies[0] = 2;
        candySum += 1;
    }
    // upside
    for(let i = 1; i < N; i++){
        if(ratings[i - 1] < ratings[i]){
            candies[i] = candies[i - 1] + 1;
            candySum += candies[i] - 1;
        } 
    }
    // downside
    for(let i = N - 1; i > -1; i--){
        if(ratings[i + 1] < ratings[i] && candies[i] <= candies[i + 1]){
            candySum += candies[i + 1] - candies[i] + 1;
            candies[i] = candies[i + 1] + 1;
        }
    }

    return candySum;
};