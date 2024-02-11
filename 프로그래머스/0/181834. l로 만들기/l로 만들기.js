function solution(myString) {
    const l = 'l'.charCodeAt(0)
    return myString.replace(/\w/g, (char) => char.charCodeAt(0) < l
        ? 'l'
        : char
    )
}