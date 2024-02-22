function highestCommonFactor(num1,num2){
    let hcf;
    for (let i = 1; i <= num1 && i <= num2; i++) {
        if( num1 % i == 0 && num2 % i == 0) {
            hcf = i;
        }
    }
    return hcf;
}
console.log(highestCommonFactor(12,16));