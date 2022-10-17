// 성공
// 새로 나온 문제!

function solution(survey, choices) {
    let answer = '';
    const chars = {
        'R' : 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0
    }
    
    for(let i = 0; i < survey.length; i++){
        if(choices[i] > 4){
            chars[survey[i][1]] += choices[i] - 4  
        }else if(choices[i] < 4){
            chars[survey[i][0]] += 4 - choices[i]
        }
    }
    
    answer = getMBTI(chars)
    
    function getMBTI(object){
        let mbti = ''
        mbti += object['R'] >= object['T'] ? 'R' : 'T'
        mbti += object['C'] >= object['F'] ? 'C' : 'F'
        mbti += object['J'] >= object['M'] ? 'J' : 'M'
        mbti += object['A'] >= object['N'] ? 'A' : 'N'
        
        return mbti
    }
    
    return answer;
}