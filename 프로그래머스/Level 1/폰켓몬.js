const nums = [3,1,2,3]

function solution(nums) {
    let answer = 0;
    let index= 0 ;
    let types = []

    while(types.length < nums.length/ 2){
        if(!types.includes(nums[index])){
            types.push(nums[index])
        }

        if(index === nums.length - 1){
            break;
        }

        index++
    }

    return answer = types.length
}

console.log(solution(nums))