function solution(m, musicinfos) {
    let hear = m.replace(/[A-Z]#/g, x => x[0].toLowerCase())
    let selected = []
    // console.log(hear)
    
    for(let i = 0; i < musicinfos.length; i++){
        // 시작시간, 끝난시간, 음악이름, 멜로디
        let [start, end, name, melody] = musicinfos[i].split(',')
        start = start.split(':').map(e => +e)
        end = end.split(':').map(e => +e)
        // #붙은 애들 소문자로 변경
        melody = melody.replace(/[A-Z]#/g, x => x[0].toLowerCase())
        // console.log(melody)
        let tempMelody = melody
        
        // 최대 길이 설정
        const hour = end[0] - start[0]
        let melodyLength = hour < 0 ? (hour + 24) * 60 : hour * 60
        melodyLength += end[1] - start[1]

        // console.log(melodyLength)

        // 멜로디의 한 주기가 길이보다 길 때는 자름
        if(tempMelody.length > melodyLength){
            tempMelody = tempMelody.slice(0, melodyLength)
        }
        
        while(tempMelody.length < melodyLength){
            if(melodyLength > tempMelody.length + melody.length){
                tempMelody += melody
            }else{
                tempMelody += melody.slice(0, melodyLength - tempMelody.length)
            }
        }
        
        if(tempMelody.includes(hear)){
            // 재생시간 비교
            selected.push([melodyLength, name])
        }
    }
    selected.sort((a, b) => b[0] - a[0])
    console.log(selected)

    return selected.length ? selected[0][1] : '(None)'
}

// const musicinfos = ["23:00,24:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]
const musicinfos = ["23:00,24:14,HELLO,CDEFGAB", "23:00,24:14,HI,CDEFGAB"]
const m = "ABCDEFG"

solution(m, musicinfos)