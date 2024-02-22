function getRandomElementFromArray(array) {
    if (array.length === 0) {
        return "Array is empty.";
    }
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
let myArray = [1, 2, 3, 4, 5];
console.log(getRandomElementFromArray(myArray));