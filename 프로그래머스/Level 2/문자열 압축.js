const s = "aabbaccc"

function solution(s) {
    let answer = s.length;
    let strings = {}


    for(let i = 1; i <= Math.floor(s.length / 2); i++){
        let pre = ''
        let count = 1

        for(let j = 0; j < s.length; j += i){
            let cur = s.slice(j, j + i)

            if(!strings[i]){
                strings[i] = [cur]
                pre = cur
            }else{
                if(pre === cur){
                    count++
                }else{
                    if(count === 1){
                        strings[i].push(cur)
                    }else{
                        strings[i].pop()
                        strings[i].push(count + pre)
                        strings[i].push(cur)
                    }
                    count = 1
                    pre = cur
                }
            }
            if(j + i >= s.length){
                strings[i].pop()
                count = count > 1 ? count : ''
                strings[i].push(count + pre)   
            }
        }
    }

    for(let key in strings){
        let string = strings[key].join('')

        answer = string.length < answer ? string.length : answer
    }

    return answer;
}

console.log(solution(s))