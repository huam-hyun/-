const participant = ["leo", "kiki", "eden"]
const completion = ["eden", "kiki"]

function solution(participant, completion) {
    let answer = '';
    
    participant = participant.sort()
    completion = completion.sort()
    
    for(let i = 0; i < completion.length; i++){
        if(participant[i] !== completion[i])
            answer = participant[i]
            break
    }
    
    return answer;
}