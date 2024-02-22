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