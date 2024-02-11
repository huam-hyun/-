function solution(babbling) {
    const words = ['aya', 'ye', 'woo', 'ma']
    
    return babbling.filter((babb) => {
        words.forEach((word) => babb = babb.replace(word, ' '))
        return !babb.trim()
    }).length
}