function armstrongNumber(num) {
    let size = num.toString().length;
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, size);
        temp = Math.floor(temp / 10);
    }
    if (sum === num) {
        return num + " is an Armstrong number.";
    } else {
        return num + " is not an Armstrong number.";
    }
}
console.log(armstrongNumber(123));