// SJF가 평균 반환시간이 가장 짧다

function solution(jobs) {
    let answer = 0
    let time = 0
    let returnTime = 0
    let length = jobs.length

    // 시작 시간
    time = Math.min(...jobs.map(e => e[0]))

    while(jobs.length !== 0){
        // 시작 가능한 프로세스들
        let processes = jobs.filter(e => e[0] <= time)
        // 처리할 프로세스
        let process = []

        // console.log(processes)

        if(processes.length < 1){
            // 시작 가능한 프로세스가 없으면 다음 도착하는 프로세스가 있는 시간대로 점프
            time = Math.min(...jobs.map(e => e[0]))
            continue
        }else if(processes.length === 1){
            // 시작 가능한 프로세스가 하나면
            process = processes[0]
        }else{
            // 시작 가능한 프로세스가 여러개면 처리시간이 짧은 것부터
            processes.sort((a, b) => {return a[1] - b[1]})

            process = processes[0]
        }

        // 프로세스 처리했으니 jobs에서 삭제
        const index = jobs.indexOf(process)
        jobs.splice(index, 1)

        // 다음 프로세스 실행 시간 = 현재 경과시간 + 프로세스 처리시간
        time += process[1]

        // 반환시간 = 프로세스 종료 시간 - 프로세스 도착 시간
        returnTime += time - process[0]
    }

    answer = Math.floor(returnTime / length)

    return answer;
}

console.log(solution([[24, 10], [28, 39], [43, 20], [37, 5], [47, 22], [20, 47], [15, 34], [15, 2], [35, 43], [26, 1]]))