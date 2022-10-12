// 1차시도 실패
// 효율성 11, 13, 14, 15실패
// 구현은 잘 했는데 시간이 부족하다

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