function solution(myString, pat) {
    return +myString
        .replace(/[AB]/g, (str) => str === 'A' ? 'B' : 'A')
        .includes(pat)
}