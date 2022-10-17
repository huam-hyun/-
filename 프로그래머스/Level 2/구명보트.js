// 1차 시도 테스트케이스 성공, 효율성 실패

// 2차 시도 성공
// shift 연산이 시간이 오래 걸려서 index를 사용
// 내림차순 정렬 + 마지막 사람과 현재 사람의 합이 limit보다 작으면 pop을 통해 제거
// => people 배열의 길이가 답이 된다

function solution(people, limit){
    let answer = 0
    people.sort((a, b) => b - a)
    let front = 0

    while(front < people.length){
        if(people[front] + people[people.length - 1] > limit){
            front++
            continue
        }else{
            people.pop()
        }

        front++
    }

    return answer = people.length
}

const people = [70, 50, 80, 50]	
const limit = 100

console.log(solution(people, limit))