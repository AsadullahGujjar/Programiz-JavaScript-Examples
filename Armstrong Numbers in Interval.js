function findArmstrongNumbersInterval(start, end) {
    let armstrongNumbers = [];
    for (let num = start; num <= end; num++) {
        let size = num.toString().length;
        let sum = 0;
        let temp = num;
        while (temp > 0) {
            let digit = temp % 10;
            sum += Math.pow(digit, size);
            temp = Math.floor(temp / 10);
        }
        if (sum === num) {
            armstrongNumbers.push(num);
        }
    }
    return armstrongNumbers;
}
console.log(findArmstrongNumbersInterval(0,154));