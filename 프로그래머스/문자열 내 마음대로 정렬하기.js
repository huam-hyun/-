// 성공

function solution(strings, n) {   
    strings.sort((a, b) =>{
        if(a[n] > b[n]){
            return 1
        }else if(a[n] === b[n]){
            return a < b ? -1 : 1
        }else{
            return -1
        }
    })
    
    return strings;
}