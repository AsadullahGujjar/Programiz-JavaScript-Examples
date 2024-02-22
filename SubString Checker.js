function subStringChecker(string, substring) {
    for (let i = 0; i < string.length; i++) {
        if (string.slice(i, i + substring.length) === substring) {
            return substring + " is in this string.";
        }
    }
    return substring + " is not in this string.";
}

console.log(subStringChecker('My name is Asad.', 'name'));