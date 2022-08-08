// 성공
function solution(s, n) {
    let answer = '';
    let S = 'abcdefghijklmnopqrstuvwxyz'
    let L = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    for(let i = 0; i < s.length; i++){
        const Lindex = L.indexOf(s[i])
        const Sindex = S.indexOf(s[i])
        if(Lindex === -1 && Sindex === -1){
            answer += ' '
        }else{
            // console.log(Lindex)
            // console.log(Sindex)
            answer += Lindex === -1 ? S[(Sindex + n) % 26] : L[(Lindex + n) % 26]
        }
    }
    return answer;
}