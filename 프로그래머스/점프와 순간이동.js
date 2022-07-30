// 성공

function solution(n)
{
    let ans = 0;

    ans = shortestToN(n)

    return ans;
}

function shortestToN(n){
    if(n <= 1){
        return n
    }
    if(n % 2){
        return shortestToN(Math.floor(n / 2)) + 1
    }else{
        return shortestToN(n / 2)
    }
}