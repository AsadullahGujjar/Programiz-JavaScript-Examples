function primeInInterval(lowestNumber, highestNumber) {
    let primesArray = [];
    for (let i = lowestNumber; i <= highestNumber; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && i > 1) {
            primesArray.push(i);
        }
    }
    return primesArray;
}
console.log(primeInInterval(2, 100));