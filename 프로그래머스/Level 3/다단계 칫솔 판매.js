const enroll = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"]
const referral = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"]
const seller = ["young", "john", "tod", "emily", "mary"]
const amount = [12, 4, 2, 5, 10]

// 1차 시도 테스트 11, 13 실패, 12 시간초과
// 틀린이유 : Math.floor()를 너무 호출해서 Stack 초과됨 + 시간 오래걸림

// 2차 시도 성공
// moneyToRefer 변수로 Math.floor()함수를 한번만 호출 + 분배금이 0원이면 profitDivide 함수 호출을 그만함
function solution(enroll, referral, seller, amount){
    let answer = []
    const tree = {}

    enroll.forEach((e, i) =>{
        tree[e] = new Tree(referral[i])
    })
    // console.log(tree)
    seller.forEach((e, i) =>{
        tree[e].profitDivide(amount[i] * 100)
    })

    function Tree(parent){
        this.parent = parent
        this.profit = 0

        this.profitDivide = (profit) =>{
            const moneyToRefer = Math.floor(profit * 0.1)
            this.profit += profit - moneyToRefer
            if(this.parent === '-' || moneyToRefer === 0){
                return
            }
            tree[this.parent].profitDivide(moneyToRefer)
        }
    }

    for(let key in tree){
        answer.push(tree[key].profit)
    }

    return answer
}


console.log(solution(enroll, referral, seller, amount))
