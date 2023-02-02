// let arr = [1, 4, 7, 2, 6]

// let i = 0
// let len = arr.length

// for (i; i < len; i++) {
//     let j = 0
//     for (j; j < len; j++) {
//         let temp;
//         if (arr[j] < arr[j + 1]) {
//             temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }


function generateCode(code) {

    let formattedCode = code.slice(1, code.length)
    formattedCode = parseInt(formattedCode) + 1;
    return`Q${formattedCode}`
}


console.log(generateCode("Q00001"))