// 성공

function solution(N, number) {
    // N과 표현할 number가 같다면 N이 한 개만 필요하니 바로 1을 반환한다.
    if(N === number){
        return 1
    }

    // N이 1개라면 표현할 수 있는 수는 한 개밖에 없으니 객체에 미리 생성해둔다.
    const cal = {
        '1': new Set().add(N)
    }
    
    // 2부터 사용 가능한 최대 갯수인 8까지 가능한 모든 수를 구한다.
    for(let i = 2; i <= 8; i++){
        // 기본적으로 N을 i개 붙인 값이 있다
        cal[i] = new Set().add(+`${N}`.repeat(i))

        // i가 3일 때 (1, 2), (2, 1) 같은 방식으로 모든 조합이 가능하도록 반복문 실행
        for(let j = 1; j < i; j++){
            for(const a of cal[j]){
                for(const b of cal[i - j]){
                    cal[i].add(a + b)
                    cal[i].add(a - b)
                    cal[i].add(a * b)
                    // 소수점 아래는 버린다
                    cal[i].add(Math.floor(a / b))
                }
            }
        }
        // console.log(cal)
        
        // N을 i개 사용했을 때 원하는 number가 있다면 i를 반환한다.
        if(cal[i].has(number)){
            return i
        }
    }
    
    return -1
}