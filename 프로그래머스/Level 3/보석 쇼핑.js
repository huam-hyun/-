// 1차 시도 실패
// 효율성 11, 13, 14, 15실패
// 구현은 잘 했는데 시간이 부족하다

// 2차 시도 성공
// 투포인터로 슬라이딩 윈도우를 구현하였다
// 1. 윈도우에 보석 갯수가 부족하다 or 왼쪽을 축소할 수 없는데 아직 오른쪽에 보석이 남아있다 : 오른쪽으로 확장
// 2. 윈도우에 모든 종류의 보석이 있다 and 현재 왼쪽 포인터가 가리키는 보석을 제거해도 된다 : 왼쪽 축소
// 좌, 우 포인터가 움직일 수 없을 때까지 반복하면서 answer에 맞는 정답을 찾는다

// 2차
function solution(gems) {
    const Gems = new Set(gems);
    const slide = new Map();
    
    let answer = [1, gems.length];
    
    let right = 0;
    let left = 0;
    let leftAvail = false;
    let rightAvail = true;
    
    if(Gems.size === 1){
        return [1, 1];
    }
    
    slide.set(gems[0], 1);
    
    while(leftAvail || rightAvail){
        if(rightAvail){
            const gem = gems[++right];
            const num = slide.get(gem);
            
            if(num){
                slide.set(gem, num + 1);
                
                if(gems[left] === gem){
                    leftAvail = true;
                }
            }else{
                slide.set(gem, 1);
            }
            
            if(slide.size === Gems.size){
                rightAvail = false;
                
                if(right - left < answer[1] - answer[0]){
                    answer = [left + 1, right + 1];
                }
            }
            if(right === gems.length - 1){
                rightAvail = false;
            }
        }else if(leftAvail){
            const gem = gems[left++];
            const num = slide.get(gem);
            
            if(num > 1){
                slide.set(gem, slide.get(gem) - 1);
                
                if(right - left < answer[1] - answer[0]){
                    answer = [left + 1, right + 1];
                }
            }else{
                leftAvail = false;
                continue;
            }
            
            if(slide.get(gems[left]) === 1){
                leftAvail = false;
            }else if(slide.size < Gems.size){
                leftAvail = false;
            }
        }
        if(!leftAvail && !rightAvail){
            if(right < gems.length - 1){
                rightAvail = true;
            }
        }
    }
    
    return answer;
}

// 1차
function solution(gems) {
    let answer = [];
    let answerLength = 0;
    let indexOfGems = [];
    let min = 0;
    let max = 1;
    const Gems = new Set(gems);
    const kindOfGems = Gems.size;
    const iterator = Gems.values();
    const gemMap = {}
    
    // gem 인덱스 매핑 + 초기 위치 찾기
    for(let i = 0; i < kindOfGems; i++){
        const gem = iterator.next().value;
        gemMap[gem] = i;
        indexOfGems[i] = gems.indexOf(gem);
    }
    max = Math.max(...indexOfGems);
    answer = [min + 1, max + 1];
    answerLength = max - min;

    while(!indexOfGems.includes(-1)){
        // 이번에 위치를 바꿀 보석
        const needChange = gems[min];
        // 최소 위치 +1부터 해당 보석을 찾는다
        const newIndex = gems.indexOf(needChange, min + 1);
        
        if(newIndex === -1){
            break;
        }
        // indexOfGems를 update시킨다
        indexOfGems[gemMap[needChange]] = newIndex;
        
        // max, min 재설정
        if(newIndex > max){
            max = newIndex;
        }
        min = Math.min(...indexOfGems);
        
        // 이번에 결과로 나온 배열의 길이와 배열
        const curLength = max - min;
        const curAnswer = [min + 1, max + 1];

        if(curLength < answerLength){
            answerLength = curLength;
            answer = curAnswer;
        }
    }
    
    return answer;
}