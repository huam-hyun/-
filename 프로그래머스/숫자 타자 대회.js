// 1차 시도 실패, 테스트케이스 16 ~ 20 런타임 에러
// 처음엔 그리디로 풀었다가 이분탐색을 통해서 최소 시간을 구했다
// 16 ~ 20번째는 중복 때문일 것 같다

function solution(numbers) {
    let left = numbers.length;
    let right = 7 * numbers.length;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const result = bruteForce(numbers, mid);

        if(result){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }

    return left;
}

function bruteForce(stream, maxWeight, weight = 0, left = 4, right = 6){
    const leftWeight = weight + getWeight(left, stream[0]);
    const rightWeight = weight + getWeight(right, stream[0]);
    
    if(leftWeight > maxWeight && rightWeight > maxWeight){
        return false;
    }
    
    if(!stream[1]){
        return (leftWeight <= maxWeight) || (rightWeight <= maxWeight);
    }else{
        const nextStream = stream.slice(1);
        let ifLeft;
        let ifRight;
        
        if(leftWeight < maxWeight && right !== stream[0]){
            ifLeft = bruteForce(nextStream, maxWeight, leftWeight, stream[0], right);   
        }
        if(rightWeight < maxWeight && left !== stream[0]){
            ifRight = bruteForce(nextStream, maxWeight, rightWeight, left, stream[0]);
        }
        
        return !!ifLeft || !!ifRight;
    }
}

function getWeight(from, to){
    if(from == to){
        return 1;
    }
    
    const pad = {
        1: [0, 1], 2: [0, 2], 3: [0, 3],
        4: [1, 1], 5: [1, 2], 6: [1, 3],
        7: [2, 1], 8: [2, 2], 9: [2, 3],
                   0: [3, 2]
    }
    
    let X = Math.abs(pad[from][1] - pad[to][1]);
    let Y = Math.abs(pad[from][0] - pad[to][0]);
    let weight = 0;
    
    while(X > 0 || Y > 0){
        if(X > 0 && Y > 0){
            X--; Y--;
            weight += 3;
        }else if(X > 0){
            X--;
            weight += 2;
        }else{
            Y--;
            weight += 2;
        }
    }
    
    return weight;
}