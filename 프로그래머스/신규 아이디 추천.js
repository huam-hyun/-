const new_id = "...!@BaT#*..y.abcdefghijklm"

function solution(new_id) {
    let answer = '';

    // 1단계 소문자로 치환
    new_id = new_id.toLowerCase()
    
    // 2단계 '. - _' 제외 문자 제거
    new_id = new_id.replace(/[^-_.a-z0-9]/g, '')

    // 3단계 '.' 2개 이상이면 하나로 치환
    new_id = new_id.replace(/[.]{2,}/g, '.')

    // 4단계 마침표가 처음과 마지막에 있으면 제거
    if(new_id.startsWith('.')){
        new_id = new_id.replace('.', '')
    }
    if(new_id.endsWith('.')){
        new_id = new_id.slice(0, new_id.length-1)
    }

    // 5단계 빈 문자열이면 a대입
    new_id = new_id === '' ? 'a' : new_id

    // 6단계 16자 이상이면 15자 까지만 제거후 .이 마지막이면 제거
    if(new_id.length > 15){
        new_id = new_id.slice(0, 15)
        if(new_id.endsWith('.')){
            new_id = new_id.slice(0, new_id.length-1)
        }
    }

    // 7단계 아이디가 2자 이하면 마지막 글자를 붙여서 3자까지 만듦
    if(new_id.length === 1){
        new_id = new_id.repeat(3)
    }else if(new_id.length === 2){
        new_id = new_id.concat('', new_id[1])
    }

    return answer = new_id
}

console.log(solution(new_id))