// const isBalanced = (str) => {
//     let allBalanced = true
//     const opening = [/{/, /\[/, /\(/]
//     const closing = [/}/, /\]/, /\)/]
//
//     opening.forEach((bracket, i) => {
//         console.log(str)
//         debugger
//         if (bracket.test(str)) {
//             if (closing[i].test(str)) {
//                 const openingIndex = bracket.exec(str).index
//                 const closingIndex = closing[i].exec(str).index
//                 if (openingIndex < closingIndex) {
//                     if (closingIndex - openingIndex === 1) {
//                         allBalanced = isBalanced(str.slice(0, openingIndex) + str.slice(closingIndex + 1))
//                     } else if (isBalanced(str.slice(openingIndex + 1, closingIndex))) {
//                         allBalanced = isBalanced(str.slice(closingIndex + 1))
//                     } else {
//                         return allBalanced = isBalanced(str.slice)
//                     }
//                 } else {
//                     return allBalanced = false
//                 }
//             } else {
//                 return allBalanced = false
//             }
//         } else if (closing[i].test(str)) {
//             return allBalanced = false
//         }
//     })
//     return allBalanced
// }

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
