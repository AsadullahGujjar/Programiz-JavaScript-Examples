function similarLastDigit(num1, num2, num3) {
    function getLastDigit(num) {
        return num % 10;
    }
    if (
        getLastDigit(num1) === getLastDigit(num2) &&
        getLastDigit(num2) === getLastDigit(num3)
    ) {
        return num1 + ", " + num2 + ", " + num3 + " have a common last digit.";
    } else {
        return num1 + ", " + num2 + ", " + num3 + " do not have a common last digit.";
    }
}
console.log(similarLastDigit(126, 456, 786));