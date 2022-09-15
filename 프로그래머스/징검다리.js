// 성공
// 이분탐색 문제
// 감이 오지 않아서 다른 사람들의 힌트를 참고하여 만들었다

// 첫 left = 가능한 가장 작은 최솟값, 첫 right = 가능한 가장 큰 최솟값
// mid를 구하여 해당 값을 최솟값으로 징검다리를 만들 수 있는지 확인 -> isAvail
// 가능하다면 더 큰 값을 확인하기 위해 left = mid + 1
// 불가능하다면 더 작은 값으로 확인하기 위해 right = mid - 1

// isAvail을 더 짧게 만들 수 있을 것 같다

function solution(distance, rocks, n) {
    var answer = 0;
    let left = 0, right = distance
    
    rocks.sort((a, b) => a - b)
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        // console.log(mid)
        const [avail, min] = isAvail(0, distance, [...rocks], n, mid)
        // console.log(min, avail)
        if(avail){
            answer = answer < min ? min : answer
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    
    function isAvail(start, end, rock, n, min){
        let curLoc = start
        let minDis = Infinity
        let index = 0
        
        while(n > 0 && curLoc < end){
            const distance = rock[index] - curLoc
            
            if(distance < min){
                // ㅊㅗㅣㅅㅗㅅㄱㅏㅂㅅㅂㅗㄷㅏ ㅈㅏㄱㅇㅡㅁㅕㄴ ㄷㅗㄹ ㅅㅏㄱㅈㅔ
                rock.splice(index, 1)
                n--
                if(n === 0){
                    rock = [start, ...rock, end]
                    for(let i = 1; i < rock.length; i++){
                        if(rock[i] - rock[i - 1] < min){
                            return [false, 0]
                        }else{
                            if(rock[i] - rock[i - 1] < minDis){
                                minDis = rock[i] - rock[i - 1]
                            }
                        }
                    }
                    curLoc = end
                }
            }else{
                // ㄷㅏㅇㅡㅁ ㄷㅗㄹㄹㅗ ㄴㅓㅁㅇㅓㄱㅏㄴㄷㅏ
                if(distance < minDis){
                    minDis = distance
                }
                
                curLoc = index >= rock.length ? end : rock[index]
                index++
            }
        }
        
        if(curLoc === end){
            return [true, minDis]
        }else{
            return [false, 0]
        }
    }
    
    return answer;
}