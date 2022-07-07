const n = 8
const k = 2
const cmd = ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]
const cmd2 = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]

function solution(n, k, cmd) {
    let answer = '';
    let temp = []
    
    for(let i = 0; i < n; i++){
        temp[i] = i
    }
    
    // 삭제된 인덱스 저장할 스택
    let deleted = []
    // 현재 가리키고 있는 위치
    let pointer = k
    
    while(cmd.length){
        const [op, num] = cmd.shift().split(' ')
        
        switch(op){
            case 'U':
                pointer -= +num
                if(pointer < 0){
                    pointer = 0
                }
                break
            case 'D':
                pointer += +num
                if(pointer >= temp.length){
                    pointer = temp.length - 1
                }
                
                break
            case 'C':
                if(pointer === temp.length - 1){
                    deleted.push(temp.splice(pointer, 1))
                    pointer--
                    break
                }else{
                    deleted.push(...temp.splice(pointer, 1))
                    break
                }
            case 'Z':
                if(!deleted.length){
                    break;
                }
                const insertItem = deleted.pop()
                if(insertItem > temp[temp.length-1]){
                    temp.push(insertItem)
                    break
                }
                if(temp[pointer] > insertItem){
                    pointer++
                }
                for(let i = 0; i < temp.length; i++){
                    if(insertItem < temp[i]){
                        temp.splice(i, 0, insertItem)
                    }
                }
        }
    }
    
    for(let i = 0; i < n; i++){
        if(deleted.includes(i)){
            answer += 'X'
        }else{
            answer += 'O'
        }
    }
    
    return answer;
}

console.log(solution(n , k, cmd2))