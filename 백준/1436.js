//영화감독 숌
let input = [2, 3, 6, 187, 500]   //제출할땐 바꿀부분

for(let i = 0; i < input.length; i++){
    let cnt = 0
    let j = 666
    while(true){
        let jString = j.toString()
        if(jString.includes('666')){
            cnt++
            if(cnt === input[i]){
                console.log(j)
                break
            }
        }
        j++
    }
}