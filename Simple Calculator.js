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