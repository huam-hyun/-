function solution(a, b) {
    let answer = '';    
    let dayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let MonthString = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    let days = 0
    
    for(let i = 0; i < dayOfMonth.length; i++){
        if(a > i+1){
            days += dayOfMonth[i]
        }
        else{
            days += b
            break
        }
    }
    
    answer = MonthString[(days-1) % 7]
    
    return answer;
}