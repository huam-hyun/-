function solution(user_id, banned_id) {
    const bannedRegExp = banned_id.map(e => '^' + e.replace(/\*/g, '.') + '$')
    const matchedIds = bannedRegExp.map((regExp) => user_id.filter((id) => id.match(regExp)))
    const combinations = new Set(
        matchedIds
            .reduce((p, c) => {
                const newCombination = []
                c.forEach((id) => {
                  p.filter((set) => !set.includes(id)).forEach((set) => {
                      newCombination.push([...set, id])
                  })
                })
                return newCombination
            }, [[]])
            .map((set) => set.sort().join(' '))
    )

    return combinations.size
}