function rangeOfNumbers(min, max) {
    let result = [];
    for (let i = min; i <= max; i += 1) {
        result.push(i);
    }
    return result;
}
function rangeOfCharacters(startingCharacter, endingCharacter) {
    if (typeof startingCharacter === 'string') {
        let result = [];
        for (let i = startingCharacter.charCodeAt(0); i <= endingCharacter.charCodeAt(0); i++) {
            result.push(String.fromCharCode(i));
        }
        return result;
    } else {
        let result = [];
        for (let i = startingCharacter; i <= endingCharacter; i++) {
            result.push(i);
        }
        return result;
    }
}
console.log(rangeOfNumbers(1, 10));
console.log(rangeOfCharacters("a", "z"));