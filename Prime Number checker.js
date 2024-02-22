function primeNumber(num) {
    if (num <= 1) {
        return num + " is not a Prime number.";
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return num + " is not a Prime number.";
        }
    }
    return num + " is a Prime number.";
}
console.log(primeNumber(6));