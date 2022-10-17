// 성공

// files를 정렬하면 되는 문제이니까 sort에 비교 함수를 사용했다
// 앞 뒤의 head부분을 비교해야 하는데 숫자가 나오기 이전까지는 모두 head 부분이므로 그 이전부분까지를 정규표현식(\D{1,})을 이용해 구했다
// Number 부분은 숫자로만 이루어져 있으니 정규표현식(\d{1, })을 이용해 구하고 +를 통해 형변환 해준다.
// Head가 같을 경우에만 Number를 비교하여 정렬하고, 이외의 경우에는 Head만을 이용하여 구한다.

function solution(files) {
    files.sort((a, b) =>{
        const aHead = a.match(/\D{1,}/i)[0].toLowerCase()
        const bHead = b.match(/\D{1,}/i)[0].toLowerCase()
        const aNumber = +a.match(/\d{1,}/)[0]
        const bNumber = +b.match(/\d{1,}/)[0]
        
        if(aHead === bHead){
            return aNumber - bNumber
        }else{
            return aHead > bHead ? 1 : -1
        }
    })
    
    return files
}