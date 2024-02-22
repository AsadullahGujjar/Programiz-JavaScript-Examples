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