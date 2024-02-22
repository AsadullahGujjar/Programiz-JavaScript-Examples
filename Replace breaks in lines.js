function replaceLineBreaks(string) {
    let result = string.replace(/(\r\n|\r|\n)/g, ' ');
    return result;
}
let inputString = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;
console.log(replaceLineBreaks(inputString));