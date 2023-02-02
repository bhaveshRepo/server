exports.generateCode = (code) => {
    let formattedCode = code.slice(1, code.length)
    formattedCode = parseInt(formattedCode) + 1;
    return `Q${formattedCode}`
}
