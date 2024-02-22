/*function findAreaOfTriangle(base,height){
    return (base * height)/2;
}
console.log(findAreaOfTriangle(5,10));
let a = 2
let b = 3

let temp;
temp = a;
a = b;
b = temp;
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
function quadraticEquation(a,b,c){
    num = (b*b-4*a*c);
    result = Math.sqrt(num);
    if (num > 0){
        root1 = ((-b + result)/2*a);
        root2 = ((-b - result)/2*a);
        return [root1,root2];
    }
    else{
        return "Discriminant is smaller than Zero." ;
    }
}
console.log(quadraticEquation(1, -3, 2));
function kilometertomile(kilos){
    result = kilos / 1.609344;
    return result;
}
console.log(kilometertomile(120));
function celsiusToFahrenheit(celsius){
    result = (celsius*9/5) + 32;
    return result;
}
console.log(celsiusToFahrenheit(120));
function generateRandomNumber(){
    return Math.floor(Math.random());
}
randomValue = generateRandomNumber();
console.log(randomValue);
function randomBetInterval(lowestNumber,highestNumber){
    return Math.floor(Math.random() * (highestNumber - lowestNumber) + lowestNumber);
}
console.log(randomBetInterval(1,100));
function checkNumber(num){
    if(num>0){
        return (num + " is a positive number.");
    }
    else if (num < 0){
        return (num + " is a negative number.");
    }
    else if (num == 0){
        return (num + " is Zero.")
    }
}
console.log (checkNumber(0));
function oddOrEven(num){
    if (num % 2 == 0){
        return (num + " is an Even number.")
    }
    else{
        return (num + " is an Odd number.")
    }
}
console.log(oddOrEven(5));
function largestAmoungOthers(num1,num2,num3){
    let largest;
    if (num1 > num2 && num1 > num3){
        return num1;
    }
    else if (num2 > num1 && num2 > num3){
        return num2;
    }
    else if (num3 > num1 && num3 > num2){
        return num3;
    }
}
console.log(largestAmoungOthers(1,2,3));
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
function findFactorial(num){
    factorial = 1;
    if (num == 0 || num == 1){
        return 1;
    }
    for(i = 1 ; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}
console.log(findFactorial(7));
function multiplicationTable(num){
    table = " ";
    for(i =1 ; i <= 10; i++){
        result = num*i; 
        table += num + " * " + i + " = " + result + "\n";
    }
    return table;
}
console.log(multiplicationTable(10));
function fabonacciSequence(num){
    let num1 = 0, num2 = 1, nextterm;
    for (i = 1; i <=num;i++){
        console.log(num1);
        nextterm = num1 + num2;
        num1 = num2;
        num2 = nextterm;
    }
    return num2;
}
console.log(fabonacciSequence(10));
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
function simpleCalculator(x, y, operator) {
    switch (operator) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y === 0) {
                return "Cannot divide by zero";
            }
            return x / y;
        default:
            return "Invalid operator";
    }
}
console.log("Result : " + simpleCalculator(154, 320, '-' ));
function sumOfNaturalNumber(num){
    let sum = 0;
    for(i=1;i<=num;i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfNaturalNumber(100));*/
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