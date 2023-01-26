// 성공
/*
    문제
    완호가 관리하는 어떤 데이터베이스의 한 테이블은 모두 정수 타입인 컬럼들로 이루어져 있습니다. 테이블은 2차원 행렬로 표현할 수 있으며 열은 컬럼을 나타내고, 행은 튜플을 나타냅니다.
    첫 번째 컬럼은 기본키로서 모든 튜플에 대해 그 값이 중복되지 않도록 보장됩니다. 완호는 이 테이블에 대한 해시 함수를 다음과 같이 정의하였습니다.

    1. 해시 함수는 col, row_begin, row_end을 입력으로 받습니다.
    2. 테이블의 튜플을 col번째 컬럼의 값을 기준으로 오름차순 정렬을 하되, 만약 그 값이 동일하면 기본키인 첫 번째 컬럼의 값을 기준으로 내림차순 정렬합니다.
    3. 정렬된 데이터에서 S_i를 i 번째 행의 튜플에 대해 각 컬럼의 값을 i 로 나눈 나머지들의 합으로 정의합니다.
    4. row_begin ≤ i ≤ row_end 인 모든 S_i를 누적하여 bitwise XOR 한 값을 해시 값으로서 반환합니다.
    5. 테이블의 데이터 data와 해시 함수에 대한 입력 col, row_begin, row_end이 주어졌을 때 테이블의 해시 값을 return 하도록 solution 함수를 완성해주세요.

    풀이
    1. 변수
    - _data === data배열을 조건에 따라 정렬한 배열
    - S_i === row_begin, end 사이에 있는 row들을 i로 mod연산 후 더한 값
    - answer === 정답

    2. 해결법
    - sort함수를 통해 정렬한다.
        -> col의 값이 같을 때는 기본 키인 0번 인덱스를 통해 내림차순으로 정렬한다
        -> col의 값이 다를 때는 col 익덱스를 통해 오름차순으로 정렬한다
    - row_begin ~ row_end 사이에 있는 튜플들의 값들을 i로 mod한 후 S_i에 저장한다
    - reduce를 통해 S_i의 값들을 모두 XOR 연산해준다
        -> 0 ^ x === x기 때문에 초기값으로 0을 주었다
*/

function solution(data, col, row_begin, row_end) {
    const _data = data.slice().sort((a, b) => {
        if(a[col - 1] === b[col - 1]) return b[0] - a[0];
        else return a[col - 1] - b[col - 1];
    });
    const S_i = [];
    let answer = 0;
    
    for(let i = row_begin - 1; i < row_end; i++){
        _data[i].forEach(e =>{
            S_i[i + 1] = (S_i[i + 1] || 0) + e % (i + 1);
        });
    }
    
    answer = S_i.reduce((p, c) => p ^ c, 0);
    
    return answer;
}