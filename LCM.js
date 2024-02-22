function leastCommonFactor(num1,num2){
    let lcm;
    for (let i = 2; i <= num1 && i <= num2; i++) {
        if( num1 % i == 0 && num2 % i == 0) {
            lcm = i;
            break;
        }
        else{
            return "No, common factor."
        }
    }
    return lcm;
}
console.log(leastCommonFactor(10,21));