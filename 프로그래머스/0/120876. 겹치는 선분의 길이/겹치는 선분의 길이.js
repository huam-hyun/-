function solution(lines) {
    // -100 = 0번 index
    const array = []
    
    lines.forEach(([start, end]) => {
        for (let i = start + 100; i < end + 100; i++) {
            array[i] = array[i] + 1 || 1
        }
    })
    
    return array.filter((num) => num > 1).length
}