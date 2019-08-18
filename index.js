const isBalanced = (str) => {
    const brackets = [
         /\{\}/g,
         /\(\)/g,
         /\[\]/g
    ]

    brackets.forEach(bracket => {
        str = str.replace(bracket, '')
    })
    if (str && brackets.some(bracket => bracket.test(str))) {
        return isBalanced(str)
    } else {
        return !str
    }
}
