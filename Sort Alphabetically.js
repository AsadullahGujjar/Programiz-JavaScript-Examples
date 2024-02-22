function sortAlphabetically(string) {
    let sorted = string.split('').sort().join('');
    return sorted;
}
console.log(sortAlphabetically('Asad'));