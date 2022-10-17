function solution(sizes) {
    let answer = 0;
    let max_w = 0
    let max_h = 0
    
    sizes.forEach(e => {
        let [w, h] = e
        
        if(w > h){
            let temp = w
            w = h
            h = temp
        }
        
        max_w = max_w < w ? w : max_w
        max_h = max_h < h ? h : max_h
    })
    
    return max_w * max_h;
}