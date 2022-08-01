// 1차 성공

function solution(skill, skill_trees) {
    let answer = 0
    
    skill_trees.forEach(e =>{
        const tree = e.split('').filter(x => skill.includes(x))
        
        if(skill.slice(0, tree.length) === tree.join('')){
            answer++
        }
    })
    
    return answer;
}